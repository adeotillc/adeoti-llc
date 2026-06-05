const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();

// Enable CORS to allow our React frontend to communicate with the API
app.use(cors()); 
// Parse incoming JSON payloads
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((err) => console.error('MongoDB connection error:', err));

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  content: { type: String, required: true },
  author: { type: String, default: 'Adeoti LLC Team' },
  imageUrl: { type: String, required: false },
  createdAt: { type: Date, default: Date.now }
});
const Post = mongoose.model('Post', postSchema);

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
const ContactMessage = mongoose.model('ContactMessage', contactSchema);

// This sets up the connection to your email provider (e.g., Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify the email connection on startup
transporter.verify((error, success) => {
  if (error) console.log('Nodemailer error (check .env credentials):', error.message);
  else console.log('Nodemailer is ready to send emails!');
});

// This middleware intercepts requests to protected routes.
// It checks if the request contains the correct Admin Secret Key in the headers.
const requireAdmin = (req, res, next) => {
  const adminKey = req.headers['x-admin-key'];
  
  if (!adminKey || adminKey !== process.env.ADMIN_SECRET_KEY) {
    return res.status(403).json({ message: 'Forbidden: Invalid or missing Admin Key' });
  }
  
  next(); // If the key matches, allow the request to proceed to the route handler
};

// GET: Fetch all posts
app.get('/api/posts', async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }); 
    res.json(posts);
  } catch (error) {
    next(error);
  }
});

// GET: Fetch a single post by ID
app.get('/api/posts/:id', async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (error) {
    next(error);
  }
});

// POST: Receive contact form submission, save to DB, and send email
app.post('/api/contact', async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    // 1. Save the message to the MongoDB database for record-keeping
    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();

    // 2. Configure the email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `Adeoti LLC: New Message from ${name}`,
      text: `You have received a new message via the Adeoti LLC website contact form.\n\nName: ${name}\nEmail: ${email}\nMessage: \n${message}`,
      replyTo: email // Allows you to hit "Reply" directly to the customer in your inbox
    };

    // 3. Send the email
    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    next(error);
  }
});

// Notice how `requireAdmin` is passed as the second argument to these routes.
// This ensures they cannot be accessed without the secret key header.

// POST: Create a new post
app.post('/api/posts', requireAdmin, async (req, res, next) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    next(error);
  }
});

// PUT: Update an existing post
app.put('/api/posts/:id', requireAdmin, async (req, res, next) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true } 
    );
    if (!updatedPost) return res.status(404).json({ message: 'Post not found' });
    res.json(updatedPost);
  } catch (error) {
    next(error);
  }
});

// DELETE: Remove a post
app.delete('/api/posts/:id', requireAdmin, async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    next(error);
  }
});

// Serve React frontend files (Express v5 compatible route)
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err.message);
  res.status(500).json({ 
    message: 'Something went wrong on the server!',
    error: err.message 
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
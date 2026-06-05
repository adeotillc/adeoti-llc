// backend/routes/posts.js
const express = require('express');
const router = express.Router();
const Post = require('../models/Post'); // Import our model

// @route   GET /api/posts
// @desc    Get all blog posts
router.get('/', async (req, res, next) => {
    try {
        // .find() fetches everything. .sort() puts the newest posts first.
        const posts = await Post.find().sort({ createdAt: -1 });
        res.json(posts);
    } catch (error) {
        next(error); // Passes the error to our error-handling middleware
    }
});

// @route   GET /api/posts/:id
// @desc    Get a single post by its ID
router.get('/:id', async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);
    } catch (error) {
        next(error);
    }
});

// @route   POST /api/posts
// @desc    Create a new blog post
router.post('/', async (req, res, next) => {
    try {
        const { title, content, author, imageUrl } = req.body;

        // Create a new post instance
        const newPost = new Post({
            title,
            content,
            author,
            imageUrl
        });

        // Save it to the database
        const savedPost = await newPost.save();
        res.status(201).json(savedPost); // 201 means "Created"
    } catch (error) {
        next(error);
    }
});

// @route   DELETE /api/posts/:id
// @desc    Delete a post
router.delete('/:id', async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    // findByIdAndUpdate takes the ID, the new data ($set), and an options object
    // { new: true } tells Mongoose to return the newly updated document, not the old one
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true } 
    );

    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    
    res.json(updatedPost);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
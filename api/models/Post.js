// backend/models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // A post must have a title
        trim: true      // Removes accidental white spaces at the beginning/end
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        default: 'Adeoti LLC Team'
    },
    imageUrl: {
        type: String,
        required: false, // Optional, for the blog thumbnail
    },
    createdAt: {
        type: Date,
        default: Date.now // Automatically sets the date when created
    }
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Post', postSchema);
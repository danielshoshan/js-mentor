const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET route to fetch all posts
router.get('/', async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        next(error);
    }
});

// POST route to submit a new post
router.post('/', async (req, res, next) => {
    try {
        const { content } = req.body;
        const newPost = new Post({ content });
        await newPost.save();
        res.status(201).json({ message: 'Post submitted successfully' });
    } catch (error) {
        next(error);
    }
});

module.exports = router;




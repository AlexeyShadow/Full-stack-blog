const express = require('express');
const router = express.Router();
const Post = require('../models/post')

// http://localhost:5000/api/post (GET)
router.get('/', async (req, res) => {
   const posts = await Post.find({}); 
   res.status(200).json(posts);
});

// http://localhost:5000/api/post (POST)
router.post('/', (req, res) => {

})

// http://localhost:5000/api/post (DELETE)
router.delete('/', (req, res) => {

})


module.exports = router;
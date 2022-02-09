const router = require('express').Router();
const { Post, Comment, User } = require('../models');

// get all posts for homepage
router.get('/', async (req, res) => {
	try {
		const postData = await Post.findAll();

		// Serialize data
		const posts = postData.map((post) => post.toJSON());

		// Pass serialized data and session flag into template
		res.render('all-posts', {
			posts,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// get single post by id
router.get('/post/:id', async (req, res) => {});

router.get('/login', (req, res) => {});

router.get('/signup', (req, res) => {});

module.exports = router;

const router = require('express').Router();
const { Post, Comment, User } = require('../models');

// get all posts for homepage + comments and authors
router.get('/', async (req, res) => {
	try {
		const postData = await Post.findAll({
			include: [{ model: User }, { model: Comment }],
		});

		const posts = postData.map((post) => post.toJSON());

		res.render('all-posts', {
			posts,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// get single post by id + comments and authors
router.get('/post/:id', async (req, res) => {
	try {
		const postData = await Post.findByPk(req.params.id, {
			include: [{ model: User }, { model: Comment }],
		});

		const post = postData.get({ plain: true });

		res.render('single-post', {
			...project,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// redirect to login
router.get('/login', (req, res) => {
	if (req.session.logged_in) {
		res.redirect('/profile');
		return;
	}

	res.render('login');
});

// redirect to sign up
router.get('/signup', (req, res) => {});

module.exports = router;

const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// Get all posts + user data
router.get('/', async (req, res) => {
	try {
		const postData = await Post.findAll({
			include: [{ model: User }],
		});

		const posts = postData.map((post) => post.get({ plain: true }));

		res.render('all-posts', {
			posts,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// Get single post by id + comments and authors
router.get('/post/:id', async (req, res) => {
	try {
		const postData = await Post.findByPk(req.params.id, {
			include: [
				{ model: User },
				{
					model: Comment,
					include: {
						model: User,
					},
				},
			],
		});

		if (!postData) {
			res.status(404).json({ message: 'No post by that ID' });
		}
		const post = postData.get({ plain: true });
		const comments = post.comments;

		res.render('single-post', {
			post,
			comments,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// Redirect to edit form
router.get('/post/edit/:id', withAuth, async (req, res) => {
	try {
		const postData = await Post.findByPk(req.params.id);
		const post = postData.get({ plain: true });
		res.render('edit-post', { post, logged_in: req.session.logged_in });
	} catch (err) {
		res.status(500).json(err);
	}
});

// Redirect to login
router.get('/login', (req, res) => {
	if (req.session.logged_in) {
		res.redirect('/dashboard');
		return;
	}

	res.render('login');
});

// Redirect to sign up
router.get('/signup', (req, res) => {
	res.render('signup');
});

// Redirect to dashboard
router.get('/dashboard', withAuth, async (req, res) => {
	try {
		const userData = await User.findByPk(req.session.user_id, {
			attributes: { exclude: ['password'] },
			include: [{ model: Post }],
		});

		const user = userData.get({ plain: true });

		res.render('dashboard', {
			...user,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;

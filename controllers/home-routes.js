const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// get all posts with user data
router.get('/', async (req, res) => {
	try {
		const postData = await Post.findAll({
			include: [{ model: User }],
		});

		// Serialize data
		const posts = postData.map((post) => post.get({ plain: true }));

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
			res.status(404).json({ message: 'No post by that id!' });
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

router.get('/post/edit/:id', withAuth, async (req, res) => {
	try {
		const postData = await Post.findByPk(req.params.id);
		const post = postData.get({ plain: true });
		res.render('edit-post', { post });
	} catch (err) {
		res.status(500).json(err);
	}
});

// redirect to login
router.get('/login', (req, res) => {
	if (req.session.logged_in) {
		res.redirect('/dashboard');
		return;
	}

	res.render('login');
});

// redirect to sign up
router.get('/signup', (req, res) => {
	res.render('signup');
});

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

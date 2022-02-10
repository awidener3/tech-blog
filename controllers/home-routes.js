const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// get all posts with user data
router.get('/', async (req, res) => {
	try {
		const postData = await Post.findAll({
			include: {
				model: User,
				attributes: ['username'],
			},
		});

		// Serialize data
		const posts = postData.map((post) => post.get({ plain: true }));

		res.render('all-posts', {
			posts,
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
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// redirect to login
router.get('/login', (req, res) => {
	// TODO: add this back in later
	// if (req.session.logged_in) {
	// 	res.redirect('/dashboard');
	// 	return;
	// }

	res.render('login');
});

// TODO: redirect to sign up
router.get('/signup', (req, res) => {
	res.render('signup');
});

router.get('/dashboard', (req, res) => {
	res.render('dashboard');
});

module.exports = router;

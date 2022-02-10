const router = require('express').Router();
//Require the correct files from the models and authorizations
const { Comment, User } = require('../models');

router.get('/', withAuth, async (req, res) => {
	// Create the correct asychronous get route for this function
	try {
		const postData = await Post.findAll({
			include: [{ model: User }, { model: Comment }],
		});

		const posts = postData.map((post) => post.toJSON());

		res.render('all-posts', {
			posts,
			layout: 'dashboard',
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/new', withAuth, (req, res) => {
	// Create the correct get route
	try {
		res.render('new-post', { layout: 'dashboard' });
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/edit/:id', withAuth, async (req, res) => {
	// Create the correct get route functionality using an asychronous function
	try {
		const postData = await Post.findByPk(req.params.id);

		const post = postData.get({ plain: true });

		res.render('edit-post', { post });
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;

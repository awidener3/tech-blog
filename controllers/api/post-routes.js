const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// * /api/post endpoint

// Get posts
router.get('/', async (req, res) => {
	const postData = await Post.findAll();

	res.status(200).json(postData);
});

// Create a post
router.post('/', withAuth, async (req, res) => {
	try {
		const newPost = await Post.create({
			...req.body,
			user_id: req.session.user_id,
		});

		res.status(200).json(newPost);
	} catch (err) {
		res.status(400).json(err);
	}
});

// Update a post
router.put('/:id', withAuth, async (req, res) => {
	try {
		let updatedPost = await Post.update(req.body, {
			where: {
				id: req.params.id,
				user_id: req.session.user_id,
			},
		});

		if (!updatedPost) {
			res.status(404).json({ message: 'No post found with that ID' });
			return;
		}

		res.status(200).json(updatedPost);
	} catch (err) {
		res.status(500).json(err);
	}
});

// Delete a post
router.delete('/:id', withAuth, async (req, res) => {
	try {
		const postData = await Post.destroy({
			where: {
				id: req.params.id,
				user_id: req.session.user_id,
			},
		});

		if (!postData) {
			res.status(404).json({ message: 'No post found with that ID' });
			return;
		}

		res.status(200).json(postData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;

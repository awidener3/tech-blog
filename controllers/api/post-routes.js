const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// * /api/post

router.post('/', withAuth, async (req, res) => {
	//Complete the asychronous function with error handling
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

router.put('/:id', withAuth, async (req, res) => {
	//Complete the asychronous function with error handling
});

router.delete('/:id', withAuth, async (req, res) => {
	//Complete the asychronous function with error handling
});

module.exports = router;

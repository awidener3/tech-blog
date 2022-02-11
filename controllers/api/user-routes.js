const router = require('express').Router();
const { User } = require('../../models');

// * /api/user endpoint

// Create a user
router.post('/', async (req, res) => {
	try {
		const userData = await User.create({
			username: req.body.username,
			password: req.body.password,
		});

		req.session.save(() => {
			req.session.user_id = userData.id;
			req.session.logged_in = true;
		});

		res.status(200).json(userData);
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}
});

// Handle login
router.post('/login', async (req, res) => {
	try {
		const userData = await User.findOne({
			where: { username: req.body.username },
		});

		if (!userData) {
			res.status(400).json({
				message: 'Incorrect username or password, please try again',
			});
		}

		const validPassword = await userData.checkPassword(req.body.password);

		if (!validPassword) {
			res.status(400).json({
				message: 'Incorrect username or password, please try again',
			});
		}

		req.session.save(() => {
			req.session.user_id = userData.id;
			req.session.logged_in = true;

			res.json({ user: userData, message: 'You are logged in' });
		});
	} catch (err) {
		res.status(400).json(err);
	}
});

// Handle logout
router.post('/logout', (req, res) => {
	try {
		if (req.session.logged_in) {
			req.session.destroy(() => {
				res.status(204).end();
			});
		} else {
			res.status(404).end();
		}
	} catch (err) {
		res.status(404).end();
	}
});

module.exports = router;

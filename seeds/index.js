const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const postData = require('./postData');
const commentData = require('./commentData');
const userData = require('./userData');

const seedAll = async () => {
	await sequelize.sync({ force: true });

	const users = await User.bulkCreate(userData, {
		individualHooks: true,
		returning: true,
	});

	const posts = await Post.bulkCreate(postData, {
		individualHooks: true,
		returning: true,
	});

	const comments = await Comment.bulkCreate(commentData, {
		individualHooks: true,
		returning: true,
	});

	process.exit(0);
};

seedAll();

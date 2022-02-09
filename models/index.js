const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

User.hasMany(Post, {
	foreignKey: 'user_id',
});

Post.belongsTo(User, {
	foreignKey: 'user_id',
});

// TODO: User has many comments, Comment belongs to user
User.hasMany(Comment, {
	foreignKey: 'user_id',
});

Comment.belongsTo(User, {
	foreignKey: 'user_id',
});

// TODO: Post has many comments, comment belongs to post
Post.hasMany(Comment, {
	foreignKey: 'post_id',
});

Comment.belongsTo(Post, {
	foreignKey: 'post_id',
});

module.exports = {
	User,
	Comment,
	Post,
};

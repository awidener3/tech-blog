const { Comment } = require('../models');

const commentdata = [
	{
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar porta risus sit amet varius. Ut euismod commodo sem, ac gravida quam porttitor vitae.',
		user_id: 1,
		post_id: 1,
	},
	{
		text: 'Cras quis mi condimentum, dapibus nisl sit amet, porttitor ante.',
		user_id: 1,
		post_id: 1,
	},
	{
		text: 'Vivamus vel nunc sit amet sapien sagittis tempus.',
		user_id: 1,
		post_id: 2,
	},
	{
		text: 'Mauris eget viverra urna, sed fermentum lorem. Suspendisse mollis massa justo, id porta arcu gravida non. Sed nec erat ac quam convallis iaculis.',
		user_id: 1,
		post_id: 2,
	},
	{
		text: 'Cras ut pellentesque erat, vitae pellentesque orci. Ut et venenatis leo, et interdum dolor.',
		user_id: 1,
		post_id: 3,
	},
	{
		text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
		user_id: 1,
		post_id: 5,
	},
	{
		text: 'Nulla id gravida ipsum. Suspendisse facilisis tempor mauris, eu fermentum leo efficitur vitae. Duis maximus convallis massa sit amet mollis. Proin est lorem, interdum in elit eget, blandit consequat odio.',
		user_id: 1,
		post_id: 5,
	},
];

const seedComments = () => Comment.bulkCreate(commentdata);
module.exports = seedComments;

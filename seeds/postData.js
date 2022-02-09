const { Post } = require('../models');

const postdata = [
	{
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris laoreet, ultrices massa vel, posuere enim. Aenean ullamcorper nunc in nisl imperdiet, quis efficitur quam imperdiet. Donec eleifend dignissim velit sit amet commodo. Suspendisse interdum turpis nunc, at posuere dolor tincidunt eget. In vulputate rhoncus suscipit.',
		user_id: 1,
	},
	{
		text: 'In vel neque non mi luctus gravida ac et nisi. Sed ipsum magna, porttitor tincidunt congue id, pulvinar id arcu. Etiam laoreet orci in ipsum elementum, at facilisis ipsum commodo.',
		user_id: 1,
	},
	{
		text: 'Fusce cursus elit ut diam volutpat ultrices. Phasellus quis mattis tellus. Mauris dictum nisi non risus hendrerit, ac sodales nulla eleifend. Quisque convallis feugiat ipsum sit amet euismod. In tempus consequat lacinia. Quisque accumsan hendrerit urna ut ultrices. Nunc rutrum, tortor ac convallis convallis, massa arcu suscipit mauris, non finibus nisl nulla et ipsum.',
		user_id: 1,
	},
	{
		text: 'Vestibulum ac nisi non leo consectetur ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras sodales sit amet nisi nec sodales.',
		user_id: 1,
	},
	{
		text: 'In iaculis, lacus non suscipit consectetur, ligula lorem scelerisque elit, eget dictum diam diam sed massa. Maecenas id volutpat mauris. Praesent sit amet rutrum urna, vitae pharetra tortor. Nam rutrum viverra congue. Donec ac leo rhoncus, iaculis dolor a, varius metus. Ut venenatis sapien nec urna accumsan, vitae semper nibh convallis.',
		user_id: 1,
	},
];

const seedPosts = () => Post.bulkCreate(postdata);
module.exports = seedPosts;
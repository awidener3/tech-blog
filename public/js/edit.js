const postId = document.querySelector('input[name="post-id"]').value;

// Edit a post
const editFormHandler = async (event) => {
	event.preventDefault();

	const title = document.querySelector('input[name="post-title"]').value;
	const text = document.querySelector('textarea[name="post-body"]').value;

	await fetch(`/api/post/${postId}`, {
		method: 'PUT',
		body: JSON.stringify({
			title,
			text,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	document.location.replace('/dashboard');
};

// Delete a post
const deleteClickHandler = async () => {
	await fetch(`/api/post/${postId}`, {
		method: 'DELETE',
	});

	document.location.replace('/dashboard');
};

document
	.querySelector('#edit-post-form')
	.addEventListener('submit', editFormHandler);
document
	.querySelector('#delete-btn')
	.addEventListener('click', deleteClickHandler);

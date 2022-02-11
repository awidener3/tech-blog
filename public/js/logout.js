const logout = async () => {
	const response = await fetch('/api/user/logout', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
	});

	response.ok ? document.location.replace('/') : alert('Failed to log out');
};

document.querySelector('#logout-link').addEventListener('click', logout);

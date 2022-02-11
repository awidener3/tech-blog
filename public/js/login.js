const handleLogin = async (event) => {
	event.preventDefault();

	const usernameEl = document.querySelector('#username-input-login');
	const passwordEl = document.querySelector('#password-input-login');

	const response = await fetch('/api/user/login', {
		method: 'POST',
		body: JSON.stringify({
			username: usernameEl.value,
			password: passwordEl.value,
		}),
		headers: { 'Content-Type': 'application/json' },
	});

	response.ok
		? document.location.replace('/dashboard')
		: alert('Failed to login');
};

document.querySelector('#login-form').addEventListener('submit', handleLogin);

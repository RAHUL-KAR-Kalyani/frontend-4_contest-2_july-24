import React, { useState } from 'react';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleLogin = () => {
		fetch('https://dummyjson.com/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		})
			.then(res => res.json())
			.then(data => {
				if (data.token) {
					localStorage.setItem('user', JSON.stringify(data));
					window.location.href = '/profile';
				} else {
					setError(data.message);
				}
			})
			.catch(err => setError('An error occurred.'));
	};

	return (
		<div className='login '>
			<p className='heading fw-light fs-4'>Welcome back! 👋</p>
			<h2 className='fs-4'>Sign in to your account</h2>
			<label>Username</label>
			<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
			<label>Password</label>
			<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
			<button onClick={handleLogin}>CONTINUE</button>
			{error && <p className='text-center' style={{color:"red"}}>{error}</p>}
			<p className='forgotpwd text-center'>Forget your password?</p>


			<p className='signup text-center'>Don't have an account? <a href='' className='signuptitle'>Sign up</a></p>
		</div>
	);
}

export default Login;
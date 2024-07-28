import React, { useEffect, useState } from 'react';

function Profile() {
	const [user, setUser] = useState(null);
	const [error, setError] = useState('');

	useEffect(() => {
		const storedUser = JSON.parse(localStorage.getItem('user'));
		if (storedUser) {
			fetch(`https://dummyjson.com/users/${storedUser.id}`)
				.then(res => res.json())
				.then(data => setUser(data))
				.catch(err => setError('An error occurred.'));
		} else {
			setError('User not found.');
		}
	}, []);

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div>
			<p className='profile-heading'>Profile</p>
			{user ? (
				<div className='profile w-100'>
					<div class="">
					<p className='heading fw-light fs-5 text-center'>Welcome back! {user.firstName} 👋</p>
					</div>
					
					<p className='fw-light fs-5'>Name: {user.firstName} {user.lastName}</p>
					<p className='fw-light fs-5'>Age: {user.age}</p>
					<p className='fw-light fs-5'>Email: {user.email}</p>
					<p className='fw-light fs-5'>Gender: {user.gender}</p>
					<p className='fw-light fs-5'>Phone: {user.phone}</p>
				</div>
			) : (
				<p>Loading... </p>
			)}
		</div>
	);
}

export default Profile;

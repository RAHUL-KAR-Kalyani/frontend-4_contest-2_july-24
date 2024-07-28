import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Profile from './component/Profile';
import './App.css';

function App() {
	return (
		<Router> 
			<Routes>
				<Route path="/profile" element={<Profile />} />
				<Route path="/" element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;

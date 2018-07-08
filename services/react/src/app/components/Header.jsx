//Libs
import React, { Component } from 'react';
// Components
// styles
import '../../css/header.css';

const Header = () => {
	return (
		<div className='header'>
			<h1>Red Eye Photography</h1>
			<div className='nav'>
				<a href="/#"> Home </a>
				<a href="/#"> About </a>
				<a href="/#"> Gallery </a>
				<a href="/#"> Contact </a>
			</div>
		</div>
	);
};

export default Header;
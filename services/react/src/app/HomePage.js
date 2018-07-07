//Libs
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// Components
// styles

const HomePage = () => {
	return (
		<div className='homepage'>
			<div className='header'>
				<h1>Red Eye Photography</h1>
			</div>
			<div className='nav'>
			<ul>
				<a href="/"><li>Home</li></a>
				<a href="/"><li>About</li></a>
				<a href="/"><li>Gallery</li></a>
				<a href="/"><li>Contact</li></a>
			</ul>
			</div>
			<div className='row'>
				<img alt='' src={require('../img/p1.jpg')} className="img-responsive" />
				<img alt='' src={require('../img/p2.jpg')} className="img-responsive" />
				<img alt='' src={require('../img/p3.jpg')} className="img-responsive" />
			</div>
			<div className='row'>
				<img alt='' src={require('../img/p4.jpg')} className="img-responsive" />
				<img alt='' src={require('../img/p5.jpg')} className="img-responsive" />
				<img alt='' src={require('../img/p6.jpg')} className="img-responsive" />
			</div>
			<div className='footer'> Photography by Matthew Wiebe </div>
		</div>
	);
};

export default HomePage;
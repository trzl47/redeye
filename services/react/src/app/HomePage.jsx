//Libs
import React, { Component } from 'react';
// Components
import Header from './components/Header.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import Footer from './components/Footer.jsx';
// styles

const HomePage = () => {
	return (
		<div className='homepage'>
			<Header />
			<FeatureGrid />
			<Footer />
		</div>
	);
};

export default HomePage;
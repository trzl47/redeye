//Libs
import React, { Component } from 'react';
// Components
// styles
import '../../css/featuregrid.css';

const FeatureGrid = () => {
	return (
		<div className='featuregrid'>
			<div className='img-responsive'
			style={{
				'backgroundImage': `url(${require('../../img/p1.jpg')})`,
				'backgroundSize': 'cover',
			}} >
			</div>
			<div className='img-responsive'
			style={{
				'backgroundImage': `url(${require('../../img/p2.jpg')})`,
				'backgroundSize': 'cover',
			}} >
			</div>
			<div className='img-responsive'
			style={{
				'backgroundImage': `url(${require('../../img/p3.jpg')})`,
				'backgroundSize': 'cover',
			}} >
			</div>
			<div className='img-responsive'
			style={{
				'backgroundImage': `url(${require('../../img/p4.jpg')})`,
				'backgroundSize': 'cover',
			}} >
			</div>
			<div className='img-responsive'
			style={{
				'backgroundImage': `url(${require('../../img/p5.jpg')})`,
				'backgroundSize': 'cover',
			}} >
			</div>
			<div className='img-responsive'
			style={{
				'backgroundImage': `url(${require('../../img/p6.jpg')})`,
				'backgroundSize': 'cover',
			}} >
			</div>
		</div>
	);
};

export default FeatureGrid;
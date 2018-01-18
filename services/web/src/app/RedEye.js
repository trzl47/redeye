//Libs
import React, { Component } from 'react';
// Components
// styles
import css from '../static/css/redeye.css';

class RedEye extends Component {
	render() {
		return(
			<div className={['redeye'].join(' ')}>
				<div className={['header'].join(' ')}>
					<h1>Red Eye Photography</h1>
				</div>
				<div className={['nav'].join(' ')}>
					<div className={['container'].join(' ')}>
						<ul>
							<a href="/"><li>Home</li></a>
							<a href="/"><li>About</li></a>
							<a href="/"><li>Gallery</li></a>
							<a href="/"><li>Contact</li></a>
						</ul>
					</div>
				</div>
				<div className={['container'].join(' ')}>
					<div className={['row','row'].join(' ')}>
						<div className="col-md-4">
							<img alt='' src={require('../static/img/p1.jpg')} className="img-responsive" />
						</div>
						<div className="col-md-4">
							<img alt='' src={require('../static/img/p2.jpg')} className="img-responsive" />
						</div>
						<div className="col-md-4">
							<img alt='' src={require('../static/img/p3.jpg')} className="img-responsive" />
						</div>
					</div>
					<div className={['row','row'].join(' ')}>
						<div className="col-md-4">
							<img alt='' src={require('../static/img/p4.jpg')} className="img-responsive" />
						</div>
						<div className="col-md-4">
							<img alt='' src={require('../static/img/p5.jpg')} className="img-responsive" />
						</div>
						<div className="col-md-4">
							<img alt='' src={require('../static/img/p6.jpg')} className="img-responsive" />
						</div>
					</div>
				</div>
				<div className={['footer'].join(' ')}> Photography by Matthew Wiebe </div>
			</div>
		);
	}
}

export default RedEye;

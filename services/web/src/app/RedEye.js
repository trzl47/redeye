//Libs
import React, { Component } from 'react';
// Components
// styles
import css from './redeye.css';

class RedEye extends Component {
	render() {
		return(
			<div className={[css.redeye].join(' ')}>
				<div className={[css.header].join(' ')}>
					<h1>Red Eye Photography</h1>
				</div>
				<div className={[css.nav].join(' ')}>
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
					<div className={['row',css.row].join(' ')}>
						<div className="col-md-4">
							<img alt='' src={require('./assets/p1.jpg')} className="img-responsive" />
						</div>
						<div className="col-md-4">
							<img alt='' src={require('./assets/p2.jpg')} className="img-responsive" />
						</div>
						<div className="col-md-4">
							<img alt='' src={require('./assets/p3.jpg')} className="img-responsive" />
						</div>
					</div>
					<div className={['row',css.row].join(' ')}>
						<div className="col-md-4">
							<img alt='' src={require('./assets/p4.jpg')} className="img-responsive" />
						</div>
						<div className="col-md-4">
							<img alt='' src={require('./assets/p5.jpg')} className="img-responsive" />
						</div>
						<div className="col-md-4">
							<img alt='' src={require('./assets/p6.jpg')} className="img-responsive" />
						</div>
					</div>
				</div>
				<div className={[css.footer].join(' ')}> Photography by Matthew Wiebe </div>
			</div>
		);
	}
}

export default RedEye;

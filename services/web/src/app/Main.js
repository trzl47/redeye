//Libs
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import RedEye from '../app/RedEye';
import NotFound from '../app/NotFound';

class Main extends Component {
  render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' render={({path}) =>
						<div>
							<RedEye />
						</div>
					} />
					<Route path='*' component={NotFound} />
				</Switch>
			</div>
    );
  }
}

export default Main;

// Components
import HomePage from '../app/HomePage.jsx';
import NotFound from '../app/NotFound.jsx';

export default {
	routes: [
		{
			path: '/',
			component: HomePage,
			exact: true
		},
		{
		path: '*',
		component: NotFound,
		exact: false
		}
	],
	redirects: [
		{
			// from: '/people',
			// to: '/user',
			// status: 301
		}
	]
};
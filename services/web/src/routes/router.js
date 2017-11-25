// Components
import RedEye from '../app/RedEye.js';
import NotFound from '../app/NotFound';

export default {
	routes: [
		{
			path: '/',
			component: RedEye,
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
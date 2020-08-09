import Vue from 'vue';
import VueRouter from 'vue-router';
import VHome from '../views/VHome.vue';
import About from '../views/About.vue';
import VProfile from '../views/VProfile.vue';
import VSingleEventPage from '../views/VSingleEventPage.vue';

import store from '../store';

Vue.use(VueRouter);

const ifNotAuthenticated = (to, from, next) => {
	if (!store.getters.getUser.loggedIn) {
		console.log('isNotAuthenticated');
		next();
		return;
	}
	console.log('isAuthenticated');
	next('/');
};

const checkJwtToken = (to, from, next) => {
	if (localStorage.getItem('jwtToken')) {
		next();
		return;
	}
	next('/');
};

const routes = [
	{
		path: '/',
		name: 'VHome',
		component: VHome,
		beforeEnter: checkJwtToken,
		meta: {},
	},
	{
		path: '/about',
		name: 'About',
		component: About,
		meta: {},
	},
	{
		path: '/profile',
		name: 'VProfile',
		beforeEnter: ifNotAuthenticated,
		component: VProfile,
		meta: {},
	},
	{
		path: '/singleEventPage/:categoryId/:eventId',
		name: 'VSingleEventPage',
		component: VSingleEventPage,
		meta: {},
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;

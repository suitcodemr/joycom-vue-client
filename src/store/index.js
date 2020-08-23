import Vue from 'vue';
import Vuex from 'vuex';
import globalContext from './modules/globalContext.js';
import authContext from './modules/authContext.js';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		globalContext,
		authContext,
	},
});

import Vue from 'vue';
import Vuex from 'vuex';
import globalContext from './modules/globalContext';
import authContext from './modules/authContext.js';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		globalContext,
		authContext,
	},
});

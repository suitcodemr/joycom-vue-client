const state = { loggedIn: false, user: null, token: null };

const getters = {
	getUser: (state) => state,
};

const actions = {
	login({ commit }, user) {
		commit('LOGIN', user);
	},
	register({ commit }, user) {
		commit('REGISTER', user);
	},
	logout({ commit }) {
		commit('LOGOUT');
	},
};

const mutations = {
	LOGIN: (state, user) => {
		state.loggedIn = true;
		state.user = user && user.data ? user.data.login : user;
		state.token = user && user.data ? user.data.login.token : localStorage.getItem('jwtToken');
		localStorage.setItem('jwtToken', state.token);
	},
	REGISTER: (state, user) => {
		state.loggedIn = true;
		state.user = user.data.register;
		state.token = user.data.register.token;
		localStorage.setItem('jwtToken', state.token);
	},
	LOGOUT: (state) => {
		state.loggedIn = false;
		state.user = null;
		state.token = null;
		localStorage.removeItem('jwtToken');
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};

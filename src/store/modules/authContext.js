const state = { loggedIn: false, user: null, token: null };

const getters = {
	getUser: (state) => state,
};

const actions = {
	login({ commit }, user) {
		commit('LOGIN', user);
	},
	logout({ commit }) {
		commit('LOGOUT');
	},
};

const mutations = {
	LOGIN: (state, user) => {
		state.loggedIn = true;
		state.user = user;
		state.token = user.data.login.token;
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

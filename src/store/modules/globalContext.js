const state = {
	selectedDate: null,
	selectedCategory: null,
};

const getters = {
	getSelectedDate: (state) => state.selectedDate,
	getSelectedCategory: (state) => state.selectedCategory,
};

const actions = {
	setDate({ commit }, date) {
		commit('SET_DATE', date);
	},
	setCategory({ commit }, category) {
		commit('SET_CATEGORY', category);
	},
};

const mutations = {
	SET_DATE: (state, date) => (state.selectedDate = date),
	SET_CATEGORY: (state, category) => (state.selectedCategory = category),
};

export default {
	state,
	getters,
	actions,
	mutations,
};

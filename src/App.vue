<template>
	<v-app>
		<v-content>
			<StartScreen />
			<!-- <SearchBar /> -->
			<!-- <SideBar /> -->
			<TopNavigation />
			<router-view />
			<Navigation />
		</v-content>
	</v-app>
</template>

<script>
import TopNavigation from './components/TopNavigation';
import Navigation from './components/Navigation';
import StartScreen from './components/StartScreen';
// import SearchBar from './components/SearchBar';
// import SideBar from '../components/SideBar';

import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
	name: 'App',

	components: {
		TopNavigation,
		Navigation,
		StartScreen,
		// SideBar,
	},

	data() {
		return {};
	},
};
</script>

<style>
@import './styles/additional.css';
</style>

<template>
	<v-app>
		<CTopNavigation />
		<v-main>
			<!-- <StartScreen /> -->
			<!-- <SearchBar /> -->
			<CSideBar :drawer="drawer"/>
			<router-view :drawer="drawer"/>
				
		</v-main>
		<Navigation :drawer="drawer"/>
	</v-app>
</template>

<script>

// Test Commit

import CTopNavigation from './components/CTopNavigation/CTopNavigation.vue';
import Navigation from './components/Navigation';
// import StartScreen from './components/StartScreen';
// import SearchBar from './components/SearchBar';
import CSideBar from './components/CSidebar/CSidebar.vue';

import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
	name: 'App',

	components: {
		CTopNavigation,
		Navigation,
		// StartScreen,
		CSideBar,
	},

	data() {
		return {
			drawer: false
		};
	},
    provide: function() {
        return {
            drawerCallback: this.drawerCallback,
        };
	},
    methods: {
        drawerCallback: function() {
			return (this.drawer = !this.drawer);
        },
	}

};
</script>

<style lang="scss" src='./scss/all.scss'/>

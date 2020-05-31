<template>
	<v-app>
		<v-content>
			<router-view />
			<Navigation />
		</v-content>
	</v-app>
</template>

<script>
import Navigation from './components/Navigation';

import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
	name: 'App',

	components: {
		Navigation,
	},

	data: () => ({
		//
	}),
};
</script>

<style>
@import './styles/additional.css';
</style>

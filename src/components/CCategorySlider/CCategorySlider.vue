<template lang="pug" src="./CCategorySlider.pug"/>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

import { mapActions } from 'vuex';

// Component
import CCategorySliderCard from './CCategorySliderCard/CCategorySliderCard.vue';

export default {
	name: 'CCategorySlider',
	components: { VueSlickCarousel, CCategorySliderCard },
	props: ['getCategories'],
	data() {
		return {
			slickCarouselSettings: {
				arrows: false,
				dots: false,
				cancelable: false,
				infinite: true,
				speed: 500,
				focusOnSelect: true,
				slidesToShow: 2,
				slidesToScroll: 1,
				initialSlide: 0,
			},
		};
	},
	methods: {
		...mapActions(['setCategory']),
	},
	beforeMount() {
		this.setCategory(this.getCategories[0]);
	},
};
</script>

<style></style>

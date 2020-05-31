<template>
	<div v-if="getCategories">
		<VueSlickCarousel v-bind="slickCarouselSettings" class="categorySlider">
			<CategorySliderCard
				v-for="(category, index) in getCategories"
				:key="index"
				:category="category"
			/>
		</VueSlickCarousel>
	</div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

import { mapActions } from 'vuex';

// Component
import CategorySliderCard from './CategorySliderCard';

export default {
	name: 'CategorySlider',
	components: { VueSlickCarousel, CategorySliderCard },
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

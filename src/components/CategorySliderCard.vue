<template>
	<div>
		<v-card
			class="category bg-dark text-white"
			:class="'category_' + category._id"
			@click="setCurrentCategory"
		>
			<img
				:src="
					require(`../assets/img/categoryThumbnail_${this.category._id}.jpg`)
				"
			/>
			<div v-if="category.eventCount >= 1">
				<div class="card-img-overlay">
					<div class="card-title h5">{{ category.name }}</div>
					<div class="card-link counter">Events: {{ category.eventCount }}</div>
					<div class="card-link arrow"></div>
				</div>
			</div>
		</v-card>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	name: 'CategorySliderCard',
	props: ['category'],
	data() {
		return {};
	},
	methods: {
		...mapActions(['setCategory']),
		setCurrentCategory() {
			this.setCategory(this.category);
		},
	},
};
</script>

<style></style>

<template lang="pug" src="./CCategorySliderCard.pug"/>

<script>
import { mapActions } from 'vuex';
export default {
	name: 'CCategorySliderCard',
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

<template>
	<v-card
		square="false"
		outlined
		:class="
			date.year === currentDayIndex.year &&
			date.month === currentDayIndex.month &&
			date.day === currentDayIndex.day
				? 'mr_selected'
				: ''
		"
		@click="setCurrentDate"
	>
		<v-card-title>{{ date.day }}</v-card-title>
		<v-card-text>{{ date.weekDay.substring(0, 2) + '.' }}</v-card-text>
	</v-card>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	name: 'CDateSliderCard',
	props: ['date', 'currentDayIndex'],
	methods: {
		...mapActions(['setDate']),
		setCurrentDate() {
			this.setDate(this.date);
		},
	},
};
</script>

<style></style>

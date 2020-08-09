<template>
	<div class="singleEventPage">
		<template>
			{{ currentEvent[0] }}
		</template>
	</div>
</template>

<script>
import { FETCH_CATEGORY_EVENTS_QUERY_CLIENT } from '../utils/graphql';

export default {
	name: 'VSingleEventPage',
	data() {
		return {};
	},
	apollo: {
		getEventsCategory: {
			query() {
				return FETCH_CATEGORY_EVENTS_QUERY_CLIENT;
			},
			variables() {
				return {
					categoryId: this.$route.params.categoryId,
				};
			},
		},
	},
	computed: {
		currentEvent: function() {
			return this.getEventsCategory.filter(
				(event) => event._id === this.$route.params.eventId
			);
		},
	},
};
</script>

<style></style>

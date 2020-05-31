<template>
	<div class="home">
		<v-container>
			<p class="mt-3">Was steht in deiner Umgebung an...</p>
			<DateSlider />
		</v-container>
		<v-divider></v-divider>
		<v-container>
			<p class="mt-3 mb-1">Kategorien</p>
			<template v-if="$apollo.queries.getCategories.loading"
				>Loading...</template
			>
			<template v-else>
				<CategorySlider :getCategories="getCategories" />
			</template>
		</v-container>
		<v-divider></v-divider>
		<v-container>
			<p class="mt-3 mb-1">Events</p>
			<template v-if="getEventsCategory.length > 0">
				<EventList :events="getEventsCategory" />
			</template>
		</v-container>
		<!-- {{ getCategories }} -->
		{{ getEventsCategory }}
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import {
	FETCH_CATEGORIES_QUERY,
	FETCH_CATEGORY_EVENTS_QUERY,
} from '../utils/graphql';

// Components
import DateSlider from '../components/DateSlider';
import CategorySlider from '../components/CategorySlider';
import EventList from '../components/EventList';

export default {
	name: 'Home',
	components: { DateSlider, CategorySlider, EventList },
	data() {
		return {
			getCategories: [],
			getEventsCategory: [],
		};
	},
	apollo: {
		getCategories: { query: FETCH_CATEGORIES_QUERY },
		getEventsCategory: {
			query() {
				if (this.getSelectedCategory() !== null) {
					return FETCH_CATEGORY_EVENTS_QUERY;
				}
			},
			variables() {
				return { categoryId: this.getSelectedCategory()._id };
			},
			skip() {
				return this.skipQuery;
			},
			data: () => ({
				skipQuery: true,
				type: 'a fine type of something',
			}),
		},
	},
	methods: {
		...mapGetters(['getSelectedCategory']),
		...mapActions(['setCategory']),
		triggerMyQuery() {
			this.$apollo.queries.getEventsCategory.skip = false;
			this.$apollo.queries.getEventsCategory.refetch();
		},
	},
	beforeCreate() {
		this.triggerMyQuery();
	},
};
</script>

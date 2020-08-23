<template>
	<div class="home">
		<v-container>
			<!-- <SearchBar /> -->
			<!-- <p class="mt-3">Was steht in deiner Umgebung an...</p> -->
			<CDateSlider />
		</v-container>
		<v-divider></v-divider>
		<v-container>
			<!-- <p class="mt-3 mb-3">Kategorien</p> -->
			<template v-if="$apollo.queries.getCategories.loading"
				>Loading...</template
			>
			<template v-else>
				<CCategorySlider :getCategories="getCategories" />
			</template>
		</v-container>
		<v-divider></v-divider>
		<v-container>
			<!-- <p class="mt-3 mb-1">Events</p> -->
			<template v-if="getEventsCategory.length > 0">
				<!-- <h2>{{ getSelectedCategory().name }}</h2> -->
				<EventList
					:events="getEventsCategory"
					:categoryId="getSelectedCategory()._id"
				/>
			</template>
		</v-container>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import {
	FETCH_CATEGORIES_QUERY,
	FETCH_CATEGORY_EVENTS_QUERY,
} from '../utils/graphql';

// Components
import CDateSlider from '@/components/CDateSlider/CDateSlider.vue';
import CCategorySlider from '@/components/CCategorySlider/CCategorySlider.vue';
import EventList from '@/components/EventList';
// import SearchBar from '../components/SearchBar';

export default {
	name: 'VHome',
	components: { CDateSlider, CCategorySlider, EventList },
	data() {
		return {
			getCategories: [],
			getEventsCategory: [],
		};
	},
	apollo: {
		getCategories: {
			query: FETCH_CATEGORIES_QUERY,
			result({ data }) {
				this.getCategories = data.getCategories;
			},
		},
		getEventsCategory: {
			query() {
				return FETCH_CATEGORY_EVENTS_QUERY;
			},
			variables() {
				return {
					categoryId: `${
						this.getSelectedCategory() === null
							? this.getCategories[0]._id
							: this.getSelectedCategory()._id
					}`,
				};
			},
			skip: true
		},
	},
	methods: {
		...mapGetters(['getSelectedCategory']),
		...mapActions(['setCategory']),
	},
	watch: {
		getCategories: function() {
			if(this.getCategories.length > 0){
				this.$apollo.queries.getEventsCategory.skip = false;
				this.$apollo.queries.getEventsCategory.refetch();
			}
		}
	}
};
</script>

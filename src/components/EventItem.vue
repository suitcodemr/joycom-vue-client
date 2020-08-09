<template>
	<v-card class="event">
		<div class="card-top">
			<v-card-title>{{ event.name }}</v-card-title>
			<div class="counter-wrapper">
				<!-- LikeBUtton -->
				<!-- CommentButton -->
			</div>
		</div>
		<v-card-actions class="card-action">
			<p class="creator">erstellt von {{ event.creator }}</p>
			<v-tooltip bottom>
				<template v-slot:activator="{ on }">
					<v-btn
						link
						:to="{
							path: `/singleEventPage/${categoryId}/${event._id}`,
						}"
						color="primary"
						dark
						v-on="on"
						>Infos</v-btn
					>
				</template>
				<span>mehr Informationen</span>
			</v-tooltip>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	name: 'EventItem',
	props: ['event', 'categoryId'],
	data: function() {
		return {};
	},
	computed: {
		eventPath: function() {
			return '/singleEventPage/' + this.categoryId + '/' + this.event._id;
		},
	},
};
</script>

<style></style>

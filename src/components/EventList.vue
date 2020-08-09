<template>
	<div>
		<template v-if="events.length < 1">
			loading...
		</template>
		<template v-else>
			<EventItem
				v-for="(event, index) in events"
				:key="index"
				:event="event"
				:categoryId="categoryId"
			/>
		</template>
	</div>
</template>

<script>
import EventItem from './EventItem';
export default {
	name: 'EventList',
	props: ['events', 'categoryId'],
	components: { EventItem },
	data() {
		return {};
	},
};
</script>

<style></style>

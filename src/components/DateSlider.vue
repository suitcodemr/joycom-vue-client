<template>
	<div v-if="this.dates.arrDates.length > 0">
		<VueSlickCarousel v-bind="slickCarouselSettings" class="dateSlider">
			<DateSliderCard
				v-for="(date, index) in dates.arrDates"
				:key="index"
				:date="date"
				:currentDayIndex="dates.currentDayIndex"
			/>
		</VueSlickCarousel>
	</div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

import { mapActions } from 'vuex';

// Component
import DateSliderCard from './DateSliderCard';

export default {
	name: 'DateSlider',
	components: { VueSlickCarousel, DateSliderCard },
	data() {
		return {
			dates: {
				arrDates: [],
				currentDayIndex: {},
			},
			slickCarouselSettings: {
				arrows: false,
				dots: false,
				cancelable: false,
				infinite: false,
				speed: 500,
				focusOnSelect: true,
				slidesToShow: 5,
				slidesToScroll: 2,
				initialSlide: 0,
			},
		};
	},
	methods: {
		...mapActions(['setDate']),
		getDateArray: function() {
			var arrDates = [];
			// var dt = new Date();
			// dt.setDate(dt.getDate() - 181);
			// var end = new Date();
			// end.setDate(end.getDate() + 183);
			var dt = new Date();
			dt.setDate(dt.getDate() - 6);
			var end = new Date();
			end.setDate(end.getDate() + 6);
			var days = [
				'Sonntag',
				'Montag',
				'Dienstag',
				'Mittwoch',
				'Donnerstag',
				'Freitag',
				'Samstag',
			];
			let currentDayIndex = {};
			let dayIndexCounter = 0;
			while (dt <= end) {
				var tempDate = {
					year: new Date(dt).toISOString().substring(0, 4),
					month: new Date(dt).toISOString().substring(5, 7),
					day: new Date(dt).toISOString().substring(8, 10),
					weekDay: days[new Date(dt).getDay()],
					dayIndex: dayIndexCounter,
				};

				if (
					tempDate.year === new Date().getFullYear().toString() &&
					tempDate.month === new Date().toISOString().substring(5, 7) &&
					tempDate.day === new Date().toISOString().substring(8, 10)
				) {
					currentDayIndex = tempDate;
				}
				arrDates.push(tempDate);
				dt.setDate(dt.getDate() + 1);
				dayIndexCounter++;
			}
			this.dates.arrDates = arrDates;
			this.dates.currentDayIndex = currentDayIndex;
			this.slickCarouselSettings.initialSlide = currentDayIndex.dayIndex;
		},
	},
	mounted() {
		this.getDateArray();
		this.setDate(this.dates.currentDayIndex);
	},
};
</script>

<style></style>

<template>
	<div class="top-navigation">
		<div class="logo-wrapper">
			<img :src="logo" alt="" />
		</div>
		<div class="searchbar" :class="[isSearchBarOpen ? 'open' : '']">
			<input type="text" v-model="search" />
			<div class="icon-search" @click="toggleSearchBar">
				<v-icon>{{ isSearchBarOpen ? 'mdi-plus' : 'mdi-magnify' }}</v-icon>
			</div>
			<div class="arrow" @click="submit">
				<v-icon color="white">mdi-chevron-right</v-icon>
			</div>
		</div>
		<div class="icon-container">
			<!-- <div class="icon-wrapper">
				<v-icon>mdi-magnify</v-icon>
			</div> -->
			<div class="icon-wrapper">
				<v-icon>mdi-bell-outline</v-icon>
				<span class="notification-counter">{{ notifications }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			logo: require('../assets/img/logo.png'),
			isSearchBarOpen: false,
			search: '',
			notifications: 3,
		};
	},
	methods: {
		toggleSearchBar: function() {
			return (this.isSearchBarOpen = !this.isSearchBarOpen);
		},
		submit: function() {
			console.log(this.search);
		},
	},
};
</script>

<style></style>

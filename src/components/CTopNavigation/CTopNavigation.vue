<template lang="pug" src="./CTopNavigation.pug"/>

<script>
export default {
	name: 'CTopNavigation',
	data() {
		return {
			logo: require('../../assets/img/logo.png'),
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

<style lang="scss" src="./CTopNavigation.scss"></style>

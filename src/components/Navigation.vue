<template>
	<div>
		<v-bottom-navigation fixed>
			<v-btn value="profil">
				<!-- <span>Profil</span> -->
				<v-icon>mdi-account</v-icon>
			</v-btn>
			<v-btn value="search">
				<!-- <span>Suchen</span> -->
				<v-icon>mdi-magnify</v-icon>
			</v-btn>
			<v-btn value="home" to="/">
				<!-- <span>Home</span> -->
				<v-icon>mdi-home</v-icon>
			</v-btn>
			<v-btn value="add">
				<!-- <span>Add</span> -->
				<v-icon>mdi-plus-box-outline</v-icon>
			</v-btn>
			<v-btn value="favorites">
				<!-- <span>Favorites</span> -->
				<v-icon>mdi-heart</v-icon>
			</v-btn>
		</v-bottom-navigation>
	</div>
</template>

<script>
export default {
	name: 'Navigation',
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.v-bottom-navigation {
	align-items: center;
	justify-content: space-around !important;
	.v-btn {
		min-height: 100%;
	}
}
</style>

<template>
	<v-bottom-navigation fixed>
		<v-btn value="profil" @click.stop="drawerCallback()">
			<!-- <span>Profil</span> -->
			<v-icon>mdi-account</v-icon>
		</v-btn>
		<v-btn value="add">
			<!-- <span>Suchen</span> -->
			<v-icon>mdi-plus-box-outline</v-icon>
		</v-btn>
		<v-btn value="home" to="/" @click.stop="drawer ? drawerCallback() : null">
			<!-- <span>Home</span> -->
			<v-icon>mdi-home</v-icon>
		</v-btn>
		<v-btn value="message">
			<!-- <span>Add</span> -->
			<v-icon>mdi-message-outline</v-icon>
		</v-btn>
		<v-btn value="radar">
			<!-- <span>Favorites</span> -->
			<v-icon>mdi-radar</v-icon>
		</v-btn>
	</v-bottom-navigation>
</template>

<script>
export default {
	name: 'Navigation',
	props: ["drawer"],
	data() {
		return {};
	},
	inject: ['drawerCallback'],
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

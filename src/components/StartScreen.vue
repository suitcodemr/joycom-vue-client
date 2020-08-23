<template>
	<div class="startscreen">
		<h1>joijner</h1>
	</div>
</template>

<script>
export default {
	name: 'StartScreen',
	methods: {
		close: function() {
			var v = this;
			setTimeout(function() {
            v.$destroy();
            v.$el.parentNode.removeChild(v.$el);
			}, 2000);
		},
	},
	mounted() {
		this.close();
	},
};
</script>

<style></style>

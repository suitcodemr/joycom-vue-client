<template lang="pug" src="./CSidebar.pug"></template>

<script>

// Internal dependencies
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "CSidebar",
    props: ["drawer"],
    data() {
        return {
            items: [
                { title: "Dashboard", icon: "mdi-view-dashboard" },
                { title: "Photos", icon: "mdi-image" },
                { title: "About", icon: "mdi-help-box" },
            ],
        };
    },
    inject: ["drawerCallback"],
	methods: {
        ...mapGetters(['getUser']),
        ...mapActions(['login', 'logout']),
	},
    beforeMount: function() {
        // console.log(this.getUser().loggedIn);
    }

};
</script>

<style lang="scss" src='./CSidebar.scss'></style>

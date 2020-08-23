<template>
    <div class="VProfile">
        <template
            v-if="currentView === 'register'"
            :changeCurrentProfileView="changeCurrentProfileView"
        >
            <CRegisterForm />
        </template>
        <template
            v-if="currentView === 'login'"
            :changeCurrentProfileView="changeCurrentProfileView"
        >
            <CLoginForm />
        </template>
    </div>
</template>

<script>
// Components
import CLoginForm from "../components/CLoginForm";
import CRegisterForm from "../components/CRegisterForm";

// Mixins
import helpersMixin from "../utils/helpersMixins";

export default {
    name: "VProfile",
    components: { CRegisterForm, CLoginForm },
    props: ['drawer'],
    data: function() {
        return {
			currentView: ""
        };
    },
    mixins: [helpersMixin],
    beforeMount: function() {
        this.currentView = this.getValueFromUrlParam("view");
    },
    provide: function() {
        return {
            changeCurrentProfileView: this.changeCurrentProfileView,
        };
    },
    methods: {
        changeCurrentProfileView: function(value) {
            return (this.currentView = value);
        },
    },
    watch: {
        drawer: function() {
            this.currentView = this.getValueFromUrlParam("view");
        }
    }
};
</script>

<style></style>

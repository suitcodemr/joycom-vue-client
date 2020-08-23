
export default {
    methods: {
        getValueFromUrlParam(value) {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const paramView = urlParams.get(value);
            return paramView;
        }
    }
};
import moment from 'moment';

const Helpers = {};

Helpers.install = (Vue) => {
    Vue.prototype.$helpers = {

        formatDate(value) {
            return moment(value).format('DD/MM/YYYY');
        },

        formatTime(value) {
            return moment(value).format('HH:mm A');
        }
    };
};

export default Helpers;

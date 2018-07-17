import Vue from 'nativescript-vue';

import router from './router';

import store from './store';

import './styles.scss';

// import Vuetify from 'vuetify';
// Vue.use(Vuetify);

import Auth from './plugins/auth.js';
Vue.use(Auth);

import Helpers from './plugins/helpers.js';
Vue.use(Helpers);

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({
    router,
    store,
}).$start();

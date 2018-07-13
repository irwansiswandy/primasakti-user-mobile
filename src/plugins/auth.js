import axios from 'axios';

const Auth = {};

Auth.install = (Vue) => {
    Vue.prototype.$auth = {
        // There will be functions for authentication here.
    };
};

export default Auth;

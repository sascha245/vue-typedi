import 'reflect-metadata';

import Vue from 'vue';

import VueTypedi from '../src';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueTypedi);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');

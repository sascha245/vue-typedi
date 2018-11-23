import 'reflect-metadata';

import Vue from 'vue';

import VueTypedi, { Container } from '../src';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueTypedi);

Container.set('token', 'myToken');

new Vue({
  render: h => h(App),
  router
}).$mount('#app');

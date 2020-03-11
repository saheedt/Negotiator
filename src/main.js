import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;
const storeInstance = store();
new Vue({
  store: storeInstance,
  render: (h) => h(App),
}).$mount('#app');

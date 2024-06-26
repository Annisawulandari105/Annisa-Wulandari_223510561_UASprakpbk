import Vue from 'vue';
import App from './store/App.vue';
import router from '../router';
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.min.css';
import '@quasar/extras/material-icons/material-icons.css';

Vue.config.productionTip = false;

Vue.use(Quasar, {
  config: {},
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');


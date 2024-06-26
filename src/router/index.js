import Vue from 'vue';
import Router from 'vue-router';
import Task1 from '../components/Task1.vue';
import Task2 from '../components/Task2.vue';
// Import other tasks similarly

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/task1', component: Task1 },
    { path: '/task2', component: Task2 },
    // Define other routes similarly
  ],
});

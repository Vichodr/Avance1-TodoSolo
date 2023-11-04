import Vue from 'vue';
import Router from 'vue-router';

const routerOptions = [
  { path: '/', component: 'Landing' },
  { path: '/login', component: 'Login' },
  { path: '/registrate', component: 'Registrate' },
  { path: '/crearproducto', component: 'CrearProducto' },
  { path: '/productos', component: 'Productos', meta: { requiresAuth: true } },
  { path: '*', component: 'NotFound' },
];

const routes = routerOptions.map(route => ({
  ...route,
  component: () => import(`../components/${route.component}.vue`),
}));

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes,
});

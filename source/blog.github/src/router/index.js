import Vue from "vue";
import Router from "vue-router";
function _import(component) {
  return () => import(`@/components/${component}.vue`);
}
const Home = _import("Home");
const Layout = _import("Layout");
const Map = _import("Map");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      alias:'/',
      component: Layout,
      redirect: "/home/map",
      children: [
        {
          path: "main",
          name:'main',
          component:Home
        }
      ]
    },
    // {
    //   path: '/',
    //   redirect: '/map'
    // },
    {
      path: '/map',
      component: Map,
    }
  ]
});

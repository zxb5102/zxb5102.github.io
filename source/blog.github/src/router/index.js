import Vue from "vue";
import Router from "vue-router";
function _import(component) {
  return () => import(`@/components/${component}.vue`);
}
const Home = _import("Home");
const Layout = _import("Layout");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      alias:'/',
      component: Layout,
      redirect: "/home/main",
      children: [
        {
          path: "main",
          name:'main',
          component:Home
        }
      ]
    }
  ]
});

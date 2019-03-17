import Vue from "vue";
import Router from "vue-router";
function _import(component) {
  return () => import(`@/components/${component}.vue`);
}
const Home = _import("Home");
const Layout = _import("Layout");
const Map = _import("Map");
const User = _import("User")

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: "/home",
    //   alias:'/',
    //   component: Layout,
    //   redirect: "/map",
    //   children: [
    //     {
    //       path: "main",
    //       name:'main',
    //       component:Home
    //     }
    //   ]
    // },
    // {
    //   path: '/',
    //   redirect: '/map'
    // },
    {
      alias: "/",
      path: "/user",
      component:User 
    }
  ]
});

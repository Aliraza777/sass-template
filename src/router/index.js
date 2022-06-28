import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
// import DishesView from "../views/DishesView.vue";
// import app from "../App.vue";
// import navBar from "../components/NavBar.vue";
import orderplacement from "../components/OrderPlacement.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/home",
  //   name: "navbar",
  //   component: navBar,
  // },
  {
    path: "/#order-form",
    name: "orderplacement",
    component: orderplacement,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

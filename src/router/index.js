import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
// import DishesView from "../views/DishesView.vue";
// import app from "../App.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/dishes",
  //   name: "dishes",
  //   component: app,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dishes: [],
    featured: [],
  },
  getters: {
    allDishes: (state) => state.dishes,
    allfeatured: (state) => state.featured,
  },
  mutations: {
    setDishes: (state, payload) => {
      state.dishes = payload;
    },
    setFeatured: (state, payload) => {
      state.featured = payload;
    },
  },
  actions: {
    async fetchDishes({ commit }) {
      const response = await axios.get("http://localhost:3000/dishes");
      // console.log(response.data);
      commit("setDishes", response.data);
    },
    async fetchFeatured({ commit }) {
      const response = await axios.get("http://localhost:3000/featured");
      // console.log(response.data);
      commit("setFeatured", response.data);
    },
  },
  modules: {},
});

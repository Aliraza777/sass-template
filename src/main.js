import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

Vue.config.productionTip = false;
library.add(faPhone, faBars, faEnvelope);
Vue.component("font-awesome-icon", FontAwesomeIcon);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

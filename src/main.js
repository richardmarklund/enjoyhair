import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import vueinstagram from "./plugins/instagram";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  vueinstagram,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import vueinstagram from "./plugins/instagram";
import VueRouter from "vue-router";
import alopeciperuk from "./alopeci-peruk";
import StartPage from "./StartPage";
import goTo from "vuetify/es5/services/goto";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",

  scrollBehavior: (to, from, savedPosition) => {
    scrollTo = 0;
    Vue.nextTick(function() {
      if (to.hash) {
        scrollTo = to.hash;
      }
      if (from.path == "/") {
        return goTo(scrollTo, { offset: 100 });
      }
      setTimeout(() => {
        return goTo(scrollTo, { offset: 100 });
      }, 900);
    });
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: StartPage
    },
    {
      path: "/alopeci-peruk",
      name: "alopeci-peruk",
      component: alopeciperuk
    }
  ]
});

new Vue({
  router,
  vuetify,
  vueinstagram,
  render: h => h(App)
}).$mount("#app");

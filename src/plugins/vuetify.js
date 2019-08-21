import Vue from "vue";
import Vuetify from "vuetify/lib";

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#64a6bd",
        secondary: "#a9f1df",
        third: "#d7d4cc"
      }
    }
  },
  icons: {
    iconfont: "mdi"
  }
});
export default vuetify;

Vue.use(Vuetify);

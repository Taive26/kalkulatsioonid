import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#F9F696",
        secondary: "#009688",
        accent: "#e91e63",
        error: "#f44336"
      }
    }
  }
});

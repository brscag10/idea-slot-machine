import Vue from "vue";
import components from "components/**/*.vue";
import consola from "consola";
import pages from "pages/**/*.vue";

consola.info("Idea Slot Machine 🎰 by D@nielLaCos.se");

new Vue({
  components,
  render: h => h(pages.Main)
}).$mount("main");

import Vue from "vue";
import { createRenderer } from "vue-server-renderer";

/**
 * create an html string from a Vue Component for testing purposes
 *
 * @export
 * @param {VueComponent} VueComponent the vue component we wish to render
 * @returns {Promise<string>} the rendered component string
 */
export default async function renderComponentToString(VueComponent) {
  const renderer = createRenderer();
  const v = new Vue({
    el: document.createElement("div"),
    render: h => h(VueComponent)
  });

  return new Promise((resolve, reject) => {
    renderer.renderToString(v, (error, result) => {
      if (error) {
        reject(error);
      }

      resolve(result);
    });
  });
}

import SlotWheel from "../SlotWheel.vue";
import centered from "@storybook/addon-centered";
// import results from "../../../dist/.jest-test-results.json";
import { storiesOf } from "@storybook/vue";
// import { withTests } from "@storybook/addon-jest";

storiesOf("SlotWheel", module)
  .addDecorator(centered)
  // .addDecorator(
  //   withTests({
  //     results
  //   })
  // )
  .add(
    "default",
    (): {} => ({
      components: { SlotWheel },
      template: `<slot-wheel></slot-wheel>`
    }),
    {
      jest: ["SlotWheel.test.js"]
    }
  );

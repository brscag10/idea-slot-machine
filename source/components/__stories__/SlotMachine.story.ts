import SlotMachine from "../SlotMachine.vue";
import centered from "@storybook/addon-centered";
// import results from "../../../dist/.jest-test-results.json";
import { storiesOf } from "@storybook/vue";
// import { withTests } from "@storybook/addon-jest";

storiesOf("SlotMachine", module)
  .addDecorator(centered)
  // .addDecorator(
  //   withTests({
  //     results
  //   })
  // )
  .add(
    "default",
    (): {} => ({
      components: { SlotMachine },
      template: `<slot-machine></slot-machine>`
    }),
    {
      jest: ["SlotMachine.test.js"]
    }
  );

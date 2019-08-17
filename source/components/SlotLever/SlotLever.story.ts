import SlotLever from "./SlotLever.vue";
import centered from "@storybook/addon-centered";
// import results from "../../../dist/.jest-test-results.json";
import { storiesOf } from "@storybook/vue";
// import { withTests } from "@storybook/addon-jest";

storiesOf("SlotLever", module)
  .addDecorator(centered)
  // .addDecorator(
  //   withTests({
  //     results
  //   })
  // )
  .add(
    "default",
    (): {} => ({
      components: { SlotLever },
      template: `<slot-lever></slot-lever>`
    }),
    {
      jest: ["SlotLever.test.js"]
    }
  );

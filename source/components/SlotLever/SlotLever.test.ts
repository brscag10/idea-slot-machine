import SlotLever from "./SlotLever.vue";
import renderComponentToString from "utilities/renderComponentToString";

it("passes a smoke test", async (): Promise<void> => {
  const result = await renderComponentToString(SlotLever);

  expect(result).toMatchSnapshot();
});

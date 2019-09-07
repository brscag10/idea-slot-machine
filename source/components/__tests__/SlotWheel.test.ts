import SlotWheel from "../SlotWheel.vue";
import renderComponentToString from "../../../utilities/renderComponentToString";

it("passes a smoke test", async (): Promise<void> => {
  const result = await renderComponentToString(SlotWheel);

  expect(result).toMatchSnapshot();
});

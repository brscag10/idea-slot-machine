import SlotMachine from "../SlotMachine.vue";
import renderComponentToString from "../../../utilities/renderComponentToString";

it("passes a smoke test", async (): Promise<void> => {
  const result = await renderComponentToString(SlotMachine);

  expect(result).toMatchSnapshot();
});

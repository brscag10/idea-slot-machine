import ShuffleQueue from "../ShuffleQueue";

test.concurrent("constructor", async (): Promise<void> => {
  expect(new ShuffleQueue()).toBeTruthy();
});

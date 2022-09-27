import { createGrid } from "./grid.utils";

describe("grid.utils", () => {
  it("should return new grid instance", () => {
    expect(createGrid()).toEqual({
      id: Date.now(),
      values: [],
      bonuses: [],
    });
  });
});

import { createGrid } from "./grid.utils";

describe("grid.utils", () => {
  it("should return new grid instance", () => {
    expect(createGrid()).toEqual({
      id: Date.now(),
      total: 0,
      values: [],
      bonuses: [],
    });
  });
});

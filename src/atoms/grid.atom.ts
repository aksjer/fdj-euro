import { atom } from "jotai";
import { sum } from "lodash";
import { Euromillions } from "../models/euromillions.model";
import { createGrid, getGridMultiple } from "../utils/grid.utils";

export const gridsAtom = atom([createGrid()]);

export const euromillionsAtom = atom({} as Euromillions);

export const gridsTotalAtom = atom((get) => {
  const grids = get(gridsAtom);
  const euromillions = get(euromillionsAtom);
  const values = grids.map((g) => {
    const m = getGridMultiple(g, euromillions);
    if (m) return m.cost.value / 100;
    return 0;
  });
  return sum(values);
});

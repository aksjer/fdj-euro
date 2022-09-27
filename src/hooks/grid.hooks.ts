import { useAtomValue } from "jotai";
import { euromillionsAtom } from "../atoms/grid.atom";
import { Grid } from "../models/grid.model";
import { getGridMultiple, getGridMultipleLabel } from "../utils/grid.utils";

export const useGridCost = (grid: Grid) => {
  const euromillions = useAtomValue(euromillionsAtom);
  const m = getGridMultiple(grid, euromillions);
  return getGridMultipleLabel(m);
};

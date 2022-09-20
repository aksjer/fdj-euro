import { useAtomValue } from "jotai";
import { isEqual } from "lodash";
import { euromillionsAtom } from "../atoms/grid.atom";
import { Grid } from "../models/grid.model";

export const useGridCost = (grid: Grid) => {
  const euromillions = useAtomValue(euromillionsAtom);
  const m = euromillions.multiples.find((m) =>
    isEqual(m.pattern, [grid.values.length, grid.bonuses.length])
  );
  if (!m) return "0";
  return `${m.cost.value / 100} ${m.cost.currency}`;
};

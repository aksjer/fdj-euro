import { isEqual } from "lodash";
import { Euromillions } from "../models/euromillions.model";
import { Grid } from "../models/grid.model";
import { Multiple } from "../models/multiple/multiple.model";

export const createGrid = (): Grid => ({
  id: Date.now(),
  values: [],
  bonuses: [],
});

export const getGridMultiple = (grid: Grid, euromillions: Euromillions) =>
  euromillions.multiples.find((m) =>
    isEqual(m.pattern, [grid.values.length, grid.bonuses.length])
  );

export const getGridMultipleLabel = (m: Multiple | undefined) =>
  m ? `${m.cost.value / 100} ${m.cost.currency}` : "0";

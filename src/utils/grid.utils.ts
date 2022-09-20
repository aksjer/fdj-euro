import { Grid } from "../models/grid.model";

export const createGrid = (): Grid => ({
  id: Date.now(),
  total: 0,
  values: [],
  bonuses: [],
});

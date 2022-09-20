import { atom } from "jotai";
import { Euromillions } from "../models/euromillions.model";
import { createGrid } from "../utils/grid.utils";

export const gridsAtom = atom([createGrid()]);

export const euromillionsAtom = atom({} as Euromillions);

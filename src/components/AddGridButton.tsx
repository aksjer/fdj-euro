import { useSetAtom } from "jotai";
import { FC } from "react";
import { gridsAtom } from "../atoms/grid.atom";
import { createGrid } from "../utils/grid.utils";

export const AddGridButton: FC = () => {
  const setGrids = useSetAtom(gridsAtom);

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => setGrids((grids) => [...grids, createGrid()])}
    >
      Add
    </button>
  );
};

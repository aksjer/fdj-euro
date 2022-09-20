import { useSetAtom } from "jotai";
import { FC } from "react";
import { gridsAtom } from "../atoms/grid.atom";
import { GridProps } from "../models/grid-props.model";

export const RemoveGridButton: FC<GridProps> = ({ grid }) => {
  const setGrids = useSetAtom(gridsAtom);

  return (
    <button
      type="button"
      className="btn btn-danger ml-3"
      onClick={() => setGrids((grids) => grids.filter((g) => g.id !== grid.id))}
    >
      Remove
    </button>
  );
};

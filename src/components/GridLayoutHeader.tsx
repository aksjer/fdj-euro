import { FC } from "react";
import { GridProps } from "../models/grid-props.model";
import { RemoveGridButton } from "./RemoveGridButton";
import { TotalCost } from "./TotalCost";

interface Props extends GridProps {
  position: number;
}

export const GridLayoutHeader: FC<Props> = ({ grid, position }) => (
  <div className="row">
    <div className="col-9">
      <div className="d-flex align-items-center mb-3">
        <div className="mx-3">Grille {position}</div>
        <RemoveGridButton grid={grid} />
      </div>
    </div>
    <div className="col-3">
      <TotalCost grid={grid} />
    </div>
  </div>
);

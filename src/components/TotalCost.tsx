import { FC } from "react";
import { useGridCost } from "../hooks/grid.hooks";
import { GridProps } from "../models/grid-props.model";

export const TotalCost: FC<GridProps> = ({ grid }) => {
  const cost = useGridCost(grid);

  return <div className="border p-1">Mise totale {cost}</div>;
};

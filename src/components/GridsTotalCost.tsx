import { useAtomValue } from "jotai";
import { FC } from "react";
import { gridsTotalAtom } from "../atoms/grid.atom";

export const GridsTotalCost: FC = () => {
  const value = useAtomValue(gridsTotalAtom);

  return (
    <div className="d-flex">
      <h6 className="text-primary">Totale {value}</h6>
    </div>
  );
};

import { useAtom } from "jotai";
import { xor } from "lodash";
import { FC } from "react";
import { gridsAtom } from "../atoms/grid.atom";
import { GridProps } from "../models/grid-props.model";
import { Grid } from "../models/grid.model";
import { BonusGrid } from "./BonusGrid";
import { GridLayoutHeader } from "./GridLayoutHeader";
import { MainGrid } from "./MainGrid";

interface Props extends GridProps {
  position: number;
}

export const GridLayout: FC<Props> = ({ grid, position }) => {
  const [grids, setGrids] = useAtom(gridsAtom);

  const handleSelect =
    (field: Extract<keyof Grid, "values" | "bonuses">) => (value: number) => {
      const g = grids.find((g) => g.id === grid.id);
      if (g) {
        g[field] = xor(g[field], [value]);
        setGrids([...grids]);
      }
    };

  return (
    <div className="mb-3">
      <GridLayoutHeader grid={grid} position={position} />
      <div className="row">
        <div className="col-9">
          <MainGrid grid={grid} handleSelect={handleSelect("values")} />
        </div>
        <div className="col-3">
          <BonusGrid grid={grid} handleSelect={handleSelect("bonuses")} />
        </div>
      </div>
    </div>
  );
};

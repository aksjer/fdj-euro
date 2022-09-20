import { useAtomValue } from "jotai";
import { FC } from "react";
import { gridsAtom } from "../atoms/grid.atom";
import { AddGridButton } from "../components/AddGridButton";
import { GridLayout } from "../components/GridLayout";

export const MainPage: FC = () => {
  const grids = useAtomValue(gridsAtom);

  return (
    <div className="container my-3">
      {grids.map((g, i) => (
        <GridLayout key={g.id} position={i + 1} grid={g} />
      ))}
      <div className="mt-3 d-flex flex-column align-items-center">
        {!grids.length && <div className="mb-3">Please add new grid</div>}
        <div>
          <AddGridButton />
        </div>
      </div>
    </div>
  );
};

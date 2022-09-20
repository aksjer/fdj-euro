import { FC } from "react";
import { GridProps } from "../models/grid-props.model";
import { RoundButton } from "./RoundButton";

interface Props extends GridProps {
  handleSelect: (value: number) => void;
}

export const MainGrid: FC<Props> = ({ grid, handleSelect }) => (
  <div className="d-flex flex-wrap">
    {[...Array(50).keys()].map((e) => {
      const v = e + 1;
      return (
        <div key={v} className="mb-3" style={{ flex: "10%" }}>
          <RoundButton
            value={v}
            selected={grid.values.includes(v)}
            onClick={handleSelect}
          />
        </div>
      );
    })}
  </div>
);

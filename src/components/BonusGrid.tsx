import { FC } from "react";
import { GridProps } from "../models/grid-props.model";
import { RoundButton } from "./RoundButton";

interface Props extends GridProps {
  handleSelect: (value: number) => void;
}

export const BonusGrid: FC<Props> = ({ grid, handleSelect }) => (
  <div className="d-flex flex-wrap">
    {[...Array(12).keys()].map((e) => {
      const v = e + 1;
      return (
        <div key={v} className="mb-1" style={{ flex: "33%" }}>
          <RoundButton
            value={v}
            selected={grid.bonuses.includes(v)}
            onClick={handleSelect}
            color="warning"
          />
        </div>
      );
    })}
  </div>
);

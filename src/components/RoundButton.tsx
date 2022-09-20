import { FC } from "react";

interface Props {
  value: number;
  selected: boolean;
  onClick: (value: number) => void;
  color?: string;
}

export const RoundButton: FC<Props> = (props) => (
  <button
    type="button"
    className={`btn btn-${props.selected ? "" : "outline-"}${
      props.color || "primary"
    } rounded-circle`}
    style={{ height: "45px", width: "45px" }}
    onClick={() => props.onClick(props.value)}
  >
    {props.value}
  </button>
);

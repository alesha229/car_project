import React from "react";
import "./MainButton.scss";
interface Props {
  onClick: (paramerters: string) => void;
  label: string;
  arrow: boolean;
  btnStyle: string;
  link: string;
}
const MainButton: React.FC<Props> = ({
  onClick,
  label,
  arrow,
  btnStyle,
  link,
}) => {
  return (
    <button
      onClick={() => onClick(link)}
      className={"ButtonGeneral " + btnStyle}
    >
      {label}
      <div
        style={{ display: arrow ? "block" : "none" }}
        className="arrow"
      ></div>
    </button>
  );
};

export default MainButton;

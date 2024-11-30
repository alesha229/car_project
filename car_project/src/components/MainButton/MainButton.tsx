import React from "react";
import "./MainButton.scss";
import { Link } from "react-router-dom";
interface Props {
  action?: (paramerters: string) => void;
  label: string;
  arrow: boolean;
  btnStyle: string;
  link: string;
}
const MainButton: React.FC<Props> = ({
  action,
  label,
  arrow,
  btnStyle,
  link,
}) => {
  return (
    <Link to={link}>
      <button
        onClick={() => action && action(link)}
        className={"ButtonGeneral " + btnStyle}
      >
        {label}
        <div
          style={{ display: arrow ? "block" : "none" }}
          className="arrow"
        ></div>
      </button>
    </Link>
  );
};

export default MainButton;

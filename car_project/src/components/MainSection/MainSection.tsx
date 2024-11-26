// import { useState } from "react";
import "./MainSection.scss";
import MainButton from "../MainButton/MainButton.jsx";
import MainFind from "../MainFind/MainFind.js";

function MainSection() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">
        <div className="main-screen">
          <h1>
            Авто c салона
            <br />и c пробегом
          </h1>
          <MainButton
            onClick={() => console.log("You clicked on the pink circle!")}
            label="Подробнее"
            arrow={true}
            btnStyle="MainButton"
            link="any"
          />
        </div>
        <div className="down-arrow">
          <div></div>
        </div>
      </div>
      <MainFind />
    </>
  );
}

export default MainSection;

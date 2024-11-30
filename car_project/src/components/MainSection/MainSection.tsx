import { useEffect, useRef } from "react";
import "./MainSection.scss";
import MainButton from "../MainButton/MainButton.jsx";
import MainFind from "../MainFind/MainFind.js";
import mainScreenImg from './img/main-screen.png';
import arrowDownImg from './img/arrow-down.svg';

function MainSection() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      // Предварительно загружаем изображение
      const img = new Image();
      img.onload = () => {
        if (mainRef.current) {
          mainRef.current.style.backgroundImage = `url(${mainScreenImg})`;
        }
      };
      img.src = mainScreenImg;
    }
  }, []);

  return (
    <>
      <div className="main" ref={mainRef}>
        <div className="main-screen">
          <h1>
            Авто c салона
            <br />и c пробегом
          </h1>
          <MainButton
            action={() => console.log("You clicked on the pink circle!")}
            label="Подробнее"
            arrow={true}
            btnStyle="MainButton"
            link="any"
          />
        </div>
        <div className="down-arrow">
          <div style={{ backgroundImage: `url(${arrowDownImg})` }}></div>
        </div>
      </div>
      <MainFind />
    </>
  );
}

export default MainSection;

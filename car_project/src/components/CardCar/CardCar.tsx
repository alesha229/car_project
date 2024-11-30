import "./CardCar.scss";
import MainButton from "../MainButton/MainButton";
import { FC } from "react";
import { ICar } from "../../types";

interface ICardCarProps {
  carItem: ICar;
}

const CardCar: FC<ICardCarProps> = ({ carItem }) => {
  const car = carItem;

  const carImg: React.CSSProperties = {
    backgroundImage: `url(${car.img})`,
  };

  return (
    <>
      <div className="CardCar">
        <div className="CarImg" style={carImg}></div>
        <div className="CarOptions">
          <div className="CarFirstRow">
            <div className="CarName">{car.name}</div>

            <div className="SecondOptions">
              {car.liters}/{car.power} л.с/{car.engineType}
              <br />
              {car.transmissionType}
              <br />
              {car.carType}
            </div>
            <div className="Price">{car.price} ₽</div>
            <MainButton
              label="Купить"
              arrow={false}
              btnStyle="SmallButton"
              link="/"
            />
          </div>
          <div className="CarSecondRow">
            <div className="FirstOptions">
              {car.year} <br />
              {car.mileage} км
            </div>
            <div className="CarButtonStore">
              <div className="CarLike"></div>
              <div className="CarCompare"></div>
              <div className="CarWrite"></div>
              <div className="CarHide"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCar;

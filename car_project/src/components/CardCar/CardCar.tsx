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
          <div className="CarName">
            {car.brand} {car.model} <div className="Price">{car.price} ₽</div>
          </div>
          <div className="CarProperties">
            <div className="CarProperty">
              <span>{car.year}</span>
            </div>
            <div className="CarProperty">
              <span>{car.mileage} км</span>
            </div>
            <div className="CarProperty">
              <span>{car.engineType} {car.liters}л</span>
            </div>
            <div className="CarProperty">
              <span>{car.power} л.с</span>
            </div>
            <div className="CarProperty">
              <span>{car.transmissionType}</span>
            </div>
            <div className="CarProperty">
              <span>{car.carType}</span>
            </div>
          </div>
          <div className="CarBottom">
          <MainButton
              label="Купить"
              arrow={false}
              btnStyle="SmallButton"
              link={`/car/${car.id}`}
            />
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

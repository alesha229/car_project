import "./Menu.scss";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-logo">
        <Link to="/">REACT.AUTO</Link>
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <div className="menu-position-container">
        <div className="menu-link">
          <Link to="/">Главная</Link>
        </div>
        <div className="menu-link">
          <Link to="/searchcar">Объявления</Link>
        </div>
        <div className="menu-link">
          <Link to="/search">Поиск</Link>
        </div>
        <div className="menu-link">
          <Link to="/profile">Кабинет</Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;

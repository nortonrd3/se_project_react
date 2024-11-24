import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__date-container">
        <img src={logo} alt="WTWR logo" className="header__logo" />
        <p className="header__date-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__user-container">
        <ToggleSwitch />
        <button
          type="button"
          className="header__add-clothes-button"
          onClick={handleAddClick}
        >
          + Add clothes
        </button>
          <p className="header__username">Terrence Tegegne</p>
          <img
            src={avatar}
            alt="User profile image"
            className="header__avatar"
          />
        </div>
    </header>
  );
}

export default Header;

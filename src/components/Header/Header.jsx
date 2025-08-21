import "./Header.css";
import logo from "../../assets/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  handleLoginClick,
  handleRegisterClick,
  isLoggedIn,
}) {

  const currentUser = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  // Placeholder initial if user has no avatar
  const userName = currentUser?.name || "User";
  const userInitial = userName[0].toUpperCase();

  return (
    <header className="header">
      <div className="header__date-container">
        <Link to="/">
          <img src={logo} alt="WTWR logo" className="header__logo" />
        </Link>
        <p className="header__date-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__user-container">
        <ToggleSwitch />
       {isLoggedIn ? (
          <>
            <button
              type="button"
              className="header__add-clothes-button"
              onClick={handleAddClick}
            >
              + Add clothes
            </button>
            <Link to="/profile" className="header__user-link">
              <p className="header__username">{userName}</p>
              {currentUser?.avatar ? (
                <img
                  src={currentUser.avatar}
                  alt="User profile image"
                  className="header__avatar"
                />
              ) : (
                <div className="header__avatar-placeholder">
                  {userInitial}
                </div>
              )}
            </Link>
          </>
        ) : (
          <div className="header__auth-buttons">
            <button
              type="button"
              className="header__signup-button"
              onClick={handleRegisterClick}
            >
              Sign Up
            </button>
            <button
              type="button"
              className="header__login-button"
              onClick={handleLoginClick}
            >
              Log In
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

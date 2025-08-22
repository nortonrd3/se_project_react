import React from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = React.useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="toggleSwitch">
      <input
        type="checkbox"
        className="toggleSwitch__box"
        onChange={handleToggleSwitchChange}
        checked={currentTemperatureUnit === "C"}
      />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "toggleSwitch__slider toggleSwitch__slider-F"
            : "toggleSwitch__slider toggleSwitch__slider-C"
        }
      ></span>
      <p
        className={`toggleSwitch__temp-F ${
          currentTemperatureUnit === "F" && "toggleSwitch__active"
        }`}
      >
        F
      </p>
      <p
        className={`toggleSwitch__temp-C ${
          currentTemperatureUnit === "C" && "toggleSwitch__active"
        }`}
      >
        C
      </p>
    </label>
  );
};

export default ToggleSwitch;

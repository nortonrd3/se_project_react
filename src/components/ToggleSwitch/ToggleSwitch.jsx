import React from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  // const [currentTempUnit, handleToggleSwitchChange] = useState("C");

  // const handleToggle = () => {
  //   if (currentTempUnit === "C") {
  //     handleToggleSwitchChange("F");
  //   } else {
  //     handleToggleSwitchChange("C");
  //   }
  // };

  const {currentTemperatureUnit, handleToggleSwitchChange} = React.useContext(CurrentTemperatureUnitContext);
  // console.log(currentTemperatureUnit);
  return (
    <label className="toggleSwitch">
      <input
        type="checkbox"
        className="toggleSwitch__box"
        onChange={handleToggleSwitchChange}
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
      <p className={`toggleSwitch__temp-C ${
          currentTemperatureUnit === "C" && "toggleSwitch__active"
        }`}>C</p>
    </label>
  );
};

export default ToggleSwitch;

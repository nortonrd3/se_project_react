import React, { useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const [currentTempUnit, handleToggleSwitchChange] = useState("C");

  const handleToggle = () => {
    if (currentTempUnit === "C") {
      handleToggleSwitchChange("F");
    } else {
      handleToggleSwitchChange("C");
    }
  };
  console.log(currentTempUnit);
  return (
    <label className="toggleSwitch">
      <input
        type="checkbox"
        className="toggleSwitch__box"
        onChange={handleToggle}
      />
      <span
        className={
          currentTempUnit === "F"
            ? "toggleSwitch__slider toggleSwitch__slider-F"
            : "toggleSwitch__slider toggleSwitch__slider-C"
        }
      ></span>
      <p
        className={`toggleSwitch__temp-F ${
          currentTempUnit === "F" && "toggleSwitch__active"
        }`}
      >
        F
      </p>
      <p className={`toggleSwitch__temp-C ${
          currentTempUnit === "C" && "toggleSwitch__active"
        }`}>C</p>
    </label>
  );
};

export default ToggleSwitch;

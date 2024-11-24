import React from "react";

const CurrentTemperatureUnitContext = React.createContext({
  currentTemperatureUnit: "",
  setCurrentTemperatureUnit: () => {},
});

export { CurrentTemperatureUnitContext };

import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";
import "./Main.css";

function Main({ weatherData, handleCardClick }) {
  return (
    <main className="content">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {Math.round(weatherData.temp.F)}&deg; F / You may want to
          wear:
        </p>
        <ul className="cards__list">
          {defaultClothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
              />
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
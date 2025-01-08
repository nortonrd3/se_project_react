import "./ClothesSection.css";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection( { handleCardClick } ) {
  return (
    <div className="clothes">
      <div className="clothes__button-container">
        <p className="clothes__title">Your items</p>
        <button className="clothes__add-button">+ Add New</button>
      </div>
      <ul className="clothes__cards-list">
        {defaultClothingItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onCardClick={handleCardClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;

import "./ClothesSection.css";
// import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection( { handleCardClick, clothingItems, handleAddClick } ) {
  return (
    <div className="clothes">
      <div className="clothes__button-container">
        <p className="clothes__title">Your items</p>
        <button className="clothes__add-button" onClick={handleAddClick}>+ Add New</button>
      </div>
      <ul className="clothes__cards-list">
        {clothingItems.map((item) => (
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

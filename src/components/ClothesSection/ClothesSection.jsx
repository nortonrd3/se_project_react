import "./ClothesSection.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({
  handleCardClick,
  clothingItems,
  handleAddClick,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);

  // Add null check to prevent error
  if (!currentUser || !currentUser._id) {
    return (
      <div className="clothes">
        <div className="clothes__button-container">
          <p className="clothes__title">Your items</p>
          <button className="clothes__add-button" onClick={handleAddClick}>
            + Add New
          </button>
        </div>
        <ul className="clothes__cards-list">
          {/* Show empty list when user is not loaded */}
        </ul>
      </div>
    );
  }

  // Filter clothing items to show only items belonging to current user
  const userItems = clothingItems.filter(
    (item) => item.owner === currentUser._id
  );

  return (
    <div className="clothes">
      <div className="clothes__button-container">
        <p className="clothes__title">Your items</p>
        <button className="clothes__add-button" onClick={handleAddClick}>
          + Add New
        </button>
      </div>
      <ul className="clothes__cards-list">
        {userItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onCardClick={handleCardClick}
            onCardLike={onCardLike}
          />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;

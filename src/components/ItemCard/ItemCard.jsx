import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  function handleCardClick() {
    onCardClick(item);
  }

  return (
    <li className="card">
      <h2 className="card__title">{item.name}</h2>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;

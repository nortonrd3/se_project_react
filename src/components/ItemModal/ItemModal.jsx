import "../ModalWithForm/ModalWithForm.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ activeModal, card, closeActiveModal, handleDeleteItem }) {
  const currentUser = useContext(CurrentUserContext);

  // Add null checks
  const isOwn = currentUser && card && card.owner === currentUser._id;

  return (
    <div className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button
          type="button"
          className="modal__close"
          onClick={closeActiveModal}
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image"></img>
        <div className="modal__footer">
          <div className="modal__footer-container">
            <h2 className="modal__caption">{card.name}</h2>
            {isOwn && (
              <button
                type="button"
                className="modal__deleteBtn"
                onClick={() => handleDeleteItem(card._id)}
              >
                Delete item
              </button>
            )}
          </div>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

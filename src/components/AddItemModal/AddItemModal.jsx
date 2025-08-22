import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ closeActiveModal, handleAddItemSubmit, isOpen }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItemSubmit({ name, imageUrl, weather });
  };

  useEffect(() => {
    if (isOpen) {
      setName("");
      setImageUrl("");
      setWeather("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="add-item-name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="add-item-name"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
          required
        />
      </label>
      <label htmlFor="add-item-imageUrl" className="modal__label">
        Image{" "}
        <input
          type="url"
          className="modal__input"
          id="add-item-imageUrl"
          value={imageUrl}
          onChange={handleImageUrlChange}
          placeholder="Image URL"
          required
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <div className="modal__radio-option">
          <input
            id="add-item-hot"
            type="radio"
            className="modal__radio-input"
            name="weather"
            value="hot"
            checked={weather === "hot"}
            onChange={handleWeatherChange}
            required
          />
          <label
            htmlFor="add-item-hot"
            className="modal__label modal__label_type_radio"
          >
            Hot
          </label>
        </div>
        <div className="modal__radio-option">
          <input
            id="add-item-warm"
            type="radio"
            className="modal__radio-input"
            name="weather"
            value="warm"
            checked={weather === "warm"}
            onChange={handleWeatherChange}
            required
          />
          <label
            htmlFor="add-item-warm"
            className="modal__label modal__label_type_radio"
          >
            Warm
          </label>
        </div>
        <div className="modal__radio-option">
          <input
            id="add-item-cold"
            type="radio"
            className="modal__radio-input"
            name="weather"
            value="cold"
            checked={weather === "cold"}
            onChange={handleWeatherChange}
            required
          />
          <label
            htmlFor="add-item-cold"
            className="modal__label modal__label_type_radio"
          >
            Cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;

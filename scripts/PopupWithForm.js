import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  #formElement;

  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
    this.#formElement = this.popupElement.querySelector(".popup__form");
    this.inputList = this.popupElement.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    const formValues = {};
    this.inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  setEventListeners() {
    this.#formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this.handleFormSubmit(this._getInputValues());
    });

    super.setEventListeners();
  }

  close() {
    this.#formElement.reset();
    super.close();
  }
}

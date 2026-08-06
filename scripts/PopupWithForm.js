import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
    this.forElement = this.#popupSelector.querySelector("popup__form");
    this.inputList = this.formElement.querySelectorAll(".popup__input");
  }

  #getInputValues() {
    const formValues = {};
    this.inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }
}

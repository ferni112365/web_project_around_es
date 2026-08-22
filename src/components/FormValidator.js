export class FormValidator {
  constructor(configurationValidationForm, form) {
    this._configurationValidationForm = configurationValidationForm;
    this._form = form;
    this._inputList = this._form.querySelectorAll(
      this._configurationValidationForm.inputSelector,
    );
    this._submitButton = this._form.querySelector(
      this._configurationValidationForm.submitButton,
    );
  }

  _showInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(
      this._configurationValidationForm.popupInputError,
    );
    errorElement.classList.add(
      this._configurationValidationForm.formErrorActive,
    );
    errorElement.textContent = inputElement.validationMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(
      this._configurationValidationForm.popupInputError,
    );
    errorElement.classList.remove(
      this._configurationValidationForm.formErrorActive,
    );
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _toggleButtonState() {
    this._submitButton.disabled = !Array.from(this._inputList).every(
      (input) => input.validity.valid,
    );
  }

  setEventListeners() {
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
    this._toggleButtonState();
  }
}

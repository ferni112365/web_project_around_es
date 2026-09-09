export class Popup {
  #popupSelector;
  #handlePopupClose;
  #closeButton;
  #popupContent;
  #handleFormReset;
  #resetValidation;

  constructor(popupSelector, handleFormReset) {
    this.#popupSelector = document.querySelector(popupSelector);
    this.#handlePopupClose = this.#handleEscClose.bind(this);
    this.#closeButton = this.#popupSelector.querySelector(".popup__close");
    this.#popupContent = this.#popupSelector.querySelector(".popup__content");

    this.#handleFormReset = handleFormReset;
  }

  open() {
    this.#popupSelector.classList.add("popup_is-opened");
    document.addEventListener("keydown", this.#handlePopupClose);
  }

  close() {
    this.#popupSelector.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", this.#handlePopupClose);
    if (this.#handleFormReset !== undefined) {
      this.#handleFormReset();
    }
  }

  #handleEscClose(event) {
    if (event.key === "Escape") {
      const openedPopup =
        this.#popupSelector.classList.contains("popup_is-opened");
      if (openedPopup) {
        this.close();
      }
    }
  }

  setEventListeners() {
    this.#closeButton.addEventListener("click", (evt) => {
      this.close();
    });

    this.#popupSelector.addEventListener("click", (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    });
  }

  get popupElement() {
    return this.#popupSelector;
  }
}

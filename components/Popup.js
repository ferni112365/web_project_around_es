export class Popup {
  #popupSelector;
  #handlePopupClose;
  #closeButton;
  #popupContent;

  constructor(popupSelector) {
    this.#popupSelector = document.querySelector(popupSelector);
    this.#handlePopupClose = this.#handleEscClose.bind(this);
    this.#closeButton = this.#popupSelector.querySelector(".popup__close");
    this.#popupContent = this.#popupSelector.querySelector(".popup__content");

    // this.setEventListeners();
  }

  open() {
    this.#popupSelector.classList.add("popup_is-opened");
    document.addEventListener("keydown", this.#handlePopupClose);
  }

  close() {
    this.#popupSelector.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", this.#handlePopupClose);
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

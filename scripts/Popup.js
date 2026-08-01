class Popup {
  #popupSelector;
  #handlePopupClose;

  constructor(popupSelector) {
    this.#popupSelector = popupSelector;
    this.#handlePopupClose = this.#handleEscClose.bind(this);
    this.#closeButton = this.#popupSelector.querySelector(".popup__close");
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

  setEventListeners() {}
}

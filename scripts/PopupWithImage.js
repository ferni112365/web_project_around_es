class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.image = this.popupElement.querySelector(".popup__image");
    this.description = this.popupElement.querySelector(".popup__caption");
  }

  open(name, link) {
    this.image.src = link;
    this.image.alt = name;
    this.description.textContent = name;

    super.open();
  }
}

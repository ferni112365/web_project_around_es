class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    // aquí seleccionas los elementos internos del popup que necesitas,
    // por ejemplo la imagen y el texto de la descripción
    this.image = this.popupElement.querySelector(".popup__image");
    this.description = this.popupElement.querySelector(".popup__caption");
  }

  open(link, name) {
    // aquí defines qué hace este popup en particular al abrirse,
    // por ejemplo asignar el src y alt de la imagen
    super.open(); // para reutilizar la lógica de abrir el popup base
  }
}

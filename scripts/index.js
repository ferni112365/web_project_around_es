const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

initialCards.forEach(function (item) {
  console.log(item.name);
});

const profileEditBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-popup");
const profileCloseBtn = editProfileModal.querySelector(".popup__close");
const cardTemplate = document.querySelector("#card-template");

const popUpImage = document.querySelector("#image-popup");
const modalImage = popUpImage.querySelector(".popup__image");
const modalCaption = popUpImage.querySelector(".popup__caption");
const modalCloseBtn = popUpImage.querySelector(".popup__close");

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

profileEditBtn.addEventListener("click", function () {
  handleOpenEditModal();
});

profileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

modalCloseBtn.addEventListener("click", function () {
  closeModal(popUpImage);
});

function fillProfileForm() {
  const name = document.querySelector(".profile__title");
  const description = document.querySelector(".profile__description");
  let editName = document.querySelector(".popup__input_type_name");
  let editDescription = document.querySelector(
    ".popup__input_type_description",
  );
  editName.value = name.textContent;
  editDescription.value = description.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  openModal(editProfileModal);
}

let formElement = editProfileModal.querySelector("#edit-profile-form");
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  let nameInput = editProfileModal.querySelector(".popup__input_type_name");
  let jobInput = editProfileModal.querySelector(
    ".popup__input_type_description",
  );

  let newNameValue = nameInput.value;
  let newDescriptionValue = jobInput.value;

  let nameValue = document.querySelector(".profile__title");
  let descriptionValue = document.querySelector(".profile__description");

  nameValue.textContent = newNameValue;
  descriptionValue.textContent = newDescriptionValue;

  closeModal(editProfileModal);
}

formElement.addEventListener("submit", handleProfileFormSubmit);

// function getCardElement(name, link) {
//   const cardElement = cardTemplate.content.cloneNode(true);
//   const cardTitle = cardElement.querySelector(".card__title");
//   const cardImage = cardElement.querySelector(".card__image");

// cardImage.addEventListener("click", function () {
//   modalCaption.textContent = name;
//   modalImage.alt = name;
//   modalImage.src = link;
//   openModal(popUpImage);
// });

// cardImage.src = link;
// cardImage.alt = name;
// cardTitle.textContent = name;

//   const likeButtonCard = cardElement.querySelector(".card__like-button");
//   likeButtonCard.addEventListener("click", function () {
//     likeButtonCard.classList.toggle("card__like-button_is-active");
//   });

//   const deleteButtonCard = cardElement.querySelector(".card__delete-button");
//   deleteButtonCard.addEventListener("click", function () {
//     const cardToDelete = deleteButtonCard.closest(".card");
//     cardToDelete.remove();
//   });

//   return cardElement;
// }

// function renderCard(name, link, container) {
//   const cardElement = getCardElement(name, link);
//   container.prepend(cardElement);
// }

// const container = document.querySelector(".cards__list");
// initialCards.forEach((card) => {
//   renderCard(card.name, card.link, container);
// });

const openModalCard = document.querySelector(".profile__add-button");
const newCardPopup = document.querySelector("#new-card-popup");
const closeButtonCard = newCardPopup.querySelector(".popup__close");
console.log(closeButtonCard);

openModalCard.addEventListener("click", function () {
  openModal(newCardPopup);
});

closeButtonCard.addEventListener("click", function () {
  console.log("Botón de cerrar clickeado");
  closeModal(newCardPopup);
});

let newPlace = newCardPopup.querySelector("#new-card-form");
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  let namePlace = newCardPopup.querySelector(".popup__input_type_card-name");
  let placeholder = newCardPopup.querySelector(".popup__input_type_url");

  let newTitleValue = namePlace.value;
  let newlinkValue = placeholder.value;

  renderCard(newTitleValue, newlinkValue, container);
  closeModal(newCardPopup);
  newPlace.reset();
}

newPlace.addEventListener("submit", handleCardFormSubmit);

// formulario: editar perfil
const editProfilePopup = document.querySelector("#edit-popup");
const editForm = editProfilePopup.querySelector(".popup__form");
const nameInput = editForm.querySelector(".popup__input_type_name");
const aboutInput = editForm.querySelector(".popup__input_type_description");
const saveButton = editForm.querySelector(".popup__button");

function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
}

function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
}

function hasInvalidInput(inputList) {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
}

// otra opción de código más concisa podría ser:
// function hasInvalidInput(inputList) {
//   return inputList.some((input) => !input.validity.valid);
// }

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
  } else {
    buttonElement.disabled = false;
  }
}

const inputList = Array.from(editForm.querySelectorAll(".popup__input"));

inputList.forEach((input) => {
  input.addEventListener("input", function () {
    if (!input.validity.valid) {
      showInputError(editForm, input, input.validationMessage);
    } else {
      hideInputError(editForm, input);
    }
    toggleButtonState(inputList, saveButton);
  });
});

// formulario: nueva tarjeta
const editNewcardPopup = document.querySelector("#new-card-popup");
const formNewCard = editNewcardPopup.querySelector(".popup__form");
const nameForm = formNewCard.querySelector(".popup__input_type_card-name");
const linkForm = formNewCard.querySelector(".popup__input_type_url");
const submitButton = formNewCard.querySelector(".popup__button");
const nameInputError = formNewCard.querySelector("#place-name-input-error");
const linkInputError = formNewCard.querySelector("#link-input-error");

function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
}

function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
}

function hasInvalidInput(inputList) {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
  } else {
    buttonElement.disabled = false;
  }
}

const inputListNewCard = [nameForm, linkForm];

function enableValidation() {
  inputListNewCard.forEach((input) => {
    input.addEventListener("input", function () {
      if (!input.validity.valid) {
        showInputError(formNewCard, input, input.validationMessage);
      } else {
        hideInputError(formNewCard, input);
      }
      toggleButtonState(inputListNewCard, submitButton);
    });
  });
}

enableValidation();

const superposition = document.querySelectorAll(".popup");

superposition.forEach((windowPopup) => {
  windowPopup.addEventListener("click", function (event) {
    console.log(event.target);
    console.log(event.currentTarget);

    if (event.target === event.currentTarget) {
      closeModal(windowPopup);
    }
  });
});

const popups = document.querySelectorAll(".popup");

document.addEventListener("keydown", function (event) {
  console.log(event.target);
  console.log(event.currentTarget);

  if (event.key === "Escape")
    popups.forEach((popupWindow) => {
      popupWindow.classList.remove("popup_is-opened");
    });
});

// ejercicio 1
class Card {
  constructor(data, cardSelector, handleOpenPopup) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleOpenPopup = handleOpenPopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".card__image").style.backgroundImage =
      `url(${this._link})`;
    this._element.querySelector(".card__title").textContent = this._name;
    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeClick();
      });

    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteClick();
      });

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleOpenPopup(this._name, this._link);
      });
  }

  _handleLikeClick() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_is-active");
  }

  _handleDeleteClick() {
    this._element.remove();
  }
}

const popupImagen = document.querySelector("#image-popup");

initialCards.forEach((item) => {
  const card = new Card(item, "#card-template", (name, link) => {
    modalImage.src = link;
    modalCaption.textContent = name;
    openModal(popupImagen);
  });

  const cardElement = card.generateCard();
  document.querySelector(".cards__list").append(cardElement);
});

// Ejercicio2;
const configurationValidationForm = {
  inputSelector: ".popup__input",
  submitButton: ".popup__button",
  formErrorActive: "form__input-error_active",
  popupInputError: "popup__input_type_error",
};

class FormValidator {
  constructor() {}
}

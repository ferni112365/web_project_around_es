import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { openModal, closeModal } from "./utils.js";

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

const profileEditBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-popup");
const profileCloseBtn = editProfileModal.querySelector(".popup__close");
const cardTemplate = document.querySelector("#card-template");

const popUpImage = document.querySelector("#image-popup");
const modalImage = popUpImage.querySelector(".popup__image");
const modalCaption = popUpImage.querySelector(".popup__caption");
const modalCloseBtn = popUpImage.querySelector(".popup__close");

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

const cardsList = document.querySelector(".cards__list");

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

  const data = { name: newTitleValue, link: newlinkValue };
  const myCard = new Card(data, "#card-template", function (name, link) {
    modalCaption.textContent = name;
    modalImage.alt = name;
    modalImage.src = link;
    openModal(popUpImage);
  });
  const cardElement = myCard.generateCard();
  cardsList.append(cardElement);

  closeModal(newCardPopup);
  newPlace.reset();
}

newPlace.addEventListener("submit", handleCardFormSubmit);

const editProfilePopup = document.querySelector("#edit-popup");
const editForm = editProfilePopup.querySelector(".popup__form");
const nameInput = editForm.querySelector(".popup__input_type_name");
const aboutInput = editForm.querySelector(".popup__input_type_description");
const saveButton = editForm.querySelector(".popup__button");

const inputList = Array.from(editForm.querySelectorAll(".popup__input"));

const editNewcardPopup = document.querySelector("#new-card-popup");
const formNewCard = editNewcardPopup.querySelector(".popup__form");
const nameForm = formNewCard.querySelector(".popup__input_type_card-name");
const linkForm = formNewCard.querySelector(".popup__input_type_url");
const submitButton = formNewCard.querySelector(".popup__button");
const nameInputError = formNewCard.querySelector("#place-name-input-error");
const linkInputError = formNewCard.querySelector("#link-input-error");

const inputListNewCard = [nameForm, linkForm];

const superposition = document.querySelectorAll(".popup");

superposition.forEach((popupWindow) => {
  popupWindow.addEventListener("click", function (event) {
    if (event.target === event.currentTarget) {
      closeModal(popupWindow);
    }
  });
});

const popups = document.querySelectorAll(".popup");

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    popups.forEach((popupWindow) => {
      closeModal(popupWindow);
    });
  }
});

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

const configurationValidationForm = {
  inputSelector: ".popup__input",
  submitButton: ".popup__button",
  formErrorActive: "form__input-error_active",
  popupInputError: "popup__input_type_error",
};

const form = document.querySelector("#edit-profile-form");
const newCardForm = document.querySelector("#new-card-form");

const myforms = new FormValidator(configurationValidationForm, form);
const myNewCards = new FormValidator(configurationValidationForm, newCardForm);

myforms.setEventListeners();
myNewCards.setEventListeners();

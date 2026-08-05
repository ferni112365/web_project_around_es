import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { openModal, closeModal } from "./utils.js";
import { Popup } from "./Popup.js";

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

// openModalCard.addEventListener("click", function () {
//   openModal(newCardPopup);
// });

// closeButtonCard.addEventListener("click", function () {
//   closeModal(newCardPopup);
// });

// let newPlace = newCardPopup.querySelector("#new-card-form");

openModalCard.addEventListener("click", function () {
  newCardPopupInstance.open();
});

closeButtonCard.addEventListener("click", function () {
  newCardPopupInstance.close();
});

const newCardPopupInstance = new Popup("#new-card-popup");

function handleCardImageClick(name, link) {
  modalImage.src = link;
  modalImage.alt = name;
  modalCaption.textContent = name;
  openModal(popUpImage);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  let namePlace = newCardPopup.querySelector(".popup__input_type_card-name");
  let placeholder = newCardPopup.querySelector(".popup__input_type_url");

  let newTitleValue = namePlace.value;
  let newlinkValue = placeholder.value;

  const data = { name: newTitleValue, link: newlinkValue };
  const myCard = new Card(data, "#card-template", handleCardImageClick);
  const cardElement = myCard.generateCard();
  cardsList.append(cardElement);

  closeModal(newCardPopup);
  newPlace.reset();
}

newPlace.addEventListener("submit", handleCardFormSubmit);

const popupImagen = document.querySelector("#image-popup");

initialCards.forEach((item) => {
  const card = new Card(item, "#card-template", handleCardImageClick);

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

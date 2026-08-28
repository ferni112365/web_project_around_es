import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { openModal, closeModal } from "../components/utils.js";
import { Popup } from "../components/Popup.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import { Section } from "../components/Section.js";

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

profileEditBtn.addEventListener("click", function () {
  handleOpenEditModal();
});

profileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

//instancia UserInfo
const nameSelector = ".profile__title";
const jobSelector = ".profile__description";

const newUserInfoInstance = new UserInfo({ nameSelector, jobSelector });

function fillProfileForm() {
  let editName = document.querySelector(".popup__input_type_name");
  let editDescription = document.querySelector(
    ".popup__input_type_description",
  );

  editName.value = newUserInfoInstance.getUserInfo().name;
  editDescription.value = newUserInfoInstance.getUserInfo().job;
}

function handleOpenEditModal() {
  fillProfileForm();
  newEditProfilePopupInstance.open();
}

function handleProfileFormSubmit(formValues) {
  newUserInfoInstance.setUserInfo(formValues.name, formValues.description);
}

const cardsList = document.querySelector(".cards__list");

const openModalCard = document.querySelector(".profile__add-button");
const newCardPopup = document.querySelector("#new-card-popup");
const closeButtonCard = newCardPopup.querySelector(".popup__close");

openModalCard.addEventListener("click", function () {
  newCardPopupInstance.open();
});

closeButtonCard.addEventListener("click", function () {
  newCardPopupInstance.close();
});

//instancia formulario "nueva tarjeta"
const newCardPopupInstance = new PopupWithForm(
  "#new-card-popup",
  handleCardFormSubmit,
);

//instancia formulario "editar perfil"
const newEditProfilePopupInstance = new PopupWithForm(
  "#edit-popup",
  handleProfileFormSubmit,
);

//instancia popup de imagen
const newPopUpWithImageInstance = new PopupWithImage("#image-popup");
newPopUpWithImageInstance.setEventListeners();

function handleCardImageClick(name, link) {
  newPopUpWithImageInstance.open(name, link);
}

function handleCardFormSubmit(formValues) {
  console.log(formValues);
  const newTitleValue = formValues.name;
  const newLinkValue = formValues.link;

  const data = { name: newTitleValue, link: newLinkValue };
  const myCard = new Card(data, "#card-template", handleCardImageClick);
  const cardElement = myCard.generateCard();
  cardsList.append(cardElement);

  closeModal(newCardPopup);
  newCardForm.reset();
}

const popupImagen = document.querySelector("#image-popup");

//instancia Section
const newSectionInstance = new Section(
  { items: initialCards, renderer: createCard },
  ".cards__list",
);
newSectionInstance.renderItems();

function createCard(item) {
  const card = new Card(item, "#card-template", handleCardImageClick);
  const cardElement = card.generateCard();
  return cardElement;
}

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

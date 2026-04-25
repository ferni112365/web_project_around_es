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

function getCardElement(
  name = "Sin título",
  link = "./images/placeholder.jpg",
) {
  const cardElement = cardTemplate.content.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  const likeButtonCard = cardElement.querySelector(".card__like-button");
  likeButtonCard.addEventListener("click", function () {
    likeButtonCard.classList.toggle("card__like-button_is-active");
  });

  const deleteButtonCard = cardElement.querySelector(".card__delete-button");
  deleteButtonCard.addEventListener("click", function () {
    const cardToDelete = deleteButtonCard.closest(".card");
    cardToDelete.remove();
  });

  return cardElement;
}

function renderCard(name, link, container) {
  const cardElement = getCardElement(name, link);
  container.prepend(cardElement);
}

const container = document.querySelector(".cards__list");
initialCards.forEach((card) => {
  renderCard(card.name, card.link, container);
});

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

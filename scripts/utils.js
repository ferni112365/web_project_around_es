let handleKeydown = null;

export function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

export function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

// ejemplo
export function openModal(modal) {
  modal.classList.add("popup_is-opened");

  handleKeydown = (event) => {
    if (event.key === "Escape") {
      closeModal(modal);
    }
  };

  document.addEventListener("keydown", handleKeydown);
}

export function closeModal(modal) {
  modal.classList.remove("popup_is-opened");

  document.removeEventListener("keydown", handleKeydown);
}

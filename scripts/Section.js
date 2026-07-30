class Section {
  #items;
  #renderer;
  #container;

  constructor({ items, renderer }, containerSelector) {
    this.#items = items;
    this.#renderer = renderer;
    this.#container = document.querySelector(containerSelector);
  }

  rendererItems() {
    this.#items.forEach((element) => {
      this.#renderer(element);
    });
  }

  addItem() {}
}

export class Section {
  #items;
  #renderer;
  #containerSelector;

  constructor({ items, renderer }, containerSelector) {
    this.#items = items;
    this.#renderer = renderer;
    this.#containerSelector = document.querySelector(containerSelector);
  }

  renderItems() {
    this.#items.forEach((element) => {
      this.addItem(this.#renderer(element));
    });
  }

  addItem(element) {
    this.#containerSelector.append(element);
  }
}

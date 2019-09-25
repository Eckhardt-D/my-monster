export default class MenuController {
  constructor(menuSelector, togglerSelector) {
    this._menuElement = window.document.querySelector(menuSelector)
    this._menuToggler = window.document.querySelector(togglerSelector)
    this._onClick = this._onClick.bind(this)

    this._menuToggler.onclick = this._onClick
  }

  _onClick() {
    if (this._menuElement) {
      this._menuElement.classList.toggle("hide")
    }
  }
}

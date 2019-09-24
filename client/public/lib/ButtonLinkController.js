export default class ButtonLinkController {
  constructor(buttonSelector) {
    this._path = "#"
    this._button = window.document.querySelector(buttonSelector)
    this._onClick = this._onClick.bind(this)
    this._button.onclick = this._onClick
  }

  _onClick() {
    if (this._button.hasAttribute("to")) {
      this._path = this._button.getAttribute("to")
      location.replace(this._path)
    }
  }
}

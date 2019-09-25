export default class FormController {
  constructor(formSelector) {
    this._form = window.document.querySelector(formSelector)
    this._form.onsubmit = this._onSubmit

    this._onSubmit = this._onSubmit.bind(this)
  }

  _onSubmit(e) {
    e.preventDefault()
  }
}

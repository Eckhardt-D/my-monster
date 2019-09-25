let state = {}

class Model {
  constructor(initialState = {}) {
    if (Object.prototype.toString.call(initialState) !== "[object Object]") {
      return Error("intialState must be an object.")
    }
    state = initialState
    this._updateState = this._updateState.bind(this)
    this._getState = this._getState.bind(this)
  }

  _updateState(stateItem, update) {
    if (!state[stateItem]) {
      return Error("Key does not exist on state.")
    }

    state[stateItem] = update
  }

  _getState() {
    return JSON.parse(JSON.stringify(state))
  }
}

module.exports = Model

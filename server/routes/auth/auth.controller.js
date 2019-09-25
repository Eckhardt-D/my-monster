const model = require("./auth.model")

const controller = {
  changeType(type) {
    if (type !== "login" && type !== "signup") {
      return Error("Type must be either login or signup")
    }
    model._updateState("type", type)
  }
}

module.exports = Object.freeze(controller)

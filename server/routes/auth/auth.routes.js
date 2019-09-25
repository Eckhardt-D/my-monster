const Handler = require("../../plugins/RouteHandler")
const model = require("./auth.model")

module.exports = base => {
  let authHandler = new Handler(base)
  authHandler._addRoute("/signup", "index", model._getState())
  return authHandler._router
}

const Handler = require("../../plugins/RouteHandler")

module.exports = (base, app) => {
  let homeHandler = new Handler(base)
  return homeHandler._router
}

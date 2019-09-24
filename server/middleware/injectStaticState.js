const state = require("../modules/staticState")

module.exports = (req, res, next) => {
  req._staticState = state
  next()
}

const { join } = require("path")

module.exports = (req, res, next) => {
  let path = req.path

  if (req.path === "/") {
    path = "/home"
  }

  path = `/${path.split("/")[1]}`

  req.app.set("views", join(__dirname, "../routes", path, "views"))
  next()
}

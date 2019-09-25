const express = require("express")
const { join } = require("path")
module.exports = (req, res, next) => {
  let path = req.path

  if (req.path === "/") {
    path = "/home"
  }

  req.app.use(
    "/public",
    express.static(join(__dirname, "../routes", path, "public"))
  )
  next()
}

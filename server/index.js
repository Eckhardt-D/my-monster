const { reloadEmitter } = require("./plugins/reloadEmitter")
const { fileWatcher } = require("./plugins/fileWatcher")
const expressLayouts = require("express-ejs-layouts")
const process = require("process")
const PORT = process.env.PORT || 1234
const express = require("express")
const { join } = require("path")
const app = express()

process.once("SIGHUP", () => console.log("nodemon signal received"))

/*
 * Setting of views, view engine and static folder to be served
 */
app.use("/public", express.static(join(__dirname, "../client/public")))
app.set("views", join(__dirname, "../client/views"))
app.set("view engine", "ejs")
app.use(expressLayouts)

/*
 * Adding middlewares
 */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require("./middleware/injectMeta"))

/*
 * Handling different client routes
 */
app.use("/", require("./routes/home"))

app.listen(PORT, () => {
  console.log(`
  Client application serving on http://localhost:${PORT}
          ctrl + c to quit application
  `)

  if (process.env.NODE_ENV === "development") {
    reloadEmitter._serveEmitter()
    fileWatcher._feedEmitter(reloadEmitter)
  }
})

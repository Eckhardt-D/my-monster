const { join } = require("path")
const { reloadEmitter } = require("./plugins/reloadEmitter")
const { fileWatcher } = require("./plugins/fileWatcher")

const expressLayouts = require("express-ejs-layouts")
const setDynamicViews = require("./middleware/setDynamicViews")
const setDynamicPublic = require("./middleware/setDynamicPublic")
const injectMeta = require("./middleware/injectMeta")

const express = require("express")
const app = express()

/*
 * Setting of view engine
 */
app.use(expressLayouts)
app.set("view engine", "ejs")
app.set("layout", join(__dirname, "all-views/layout"))

/*
 * Adding middlewares
 */
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/public", express.static(join(__dirname, "static")))
app.use(setDynamicPublic)
app.use(setDynamicViews)
app.use(injectMeta)

/*
 * Handling routes with baseRoute only
 */
app.use("/", require("./routes/home/home.routes")("/"))
app.use("/auth", require("./routes/auth/auth.routes")("/auth"))

app.listen(process.env.PORT || 1234, () => {
  console.log(`
    Client server running on http://loclhost:1234
                ctrl + c to quit
    `)

  reloadEmitter._serveEmitter()
  fileWatcher._feedEmitter(reloadEmitter)
})

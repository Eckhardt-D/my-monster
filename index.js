const expressLayouts = require("express-ejs-layouts")
const express = require("express")
const app = express()
const port = 1234

app.set("view engine", "ejs")
app.use(expressLayouts)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require("./middleware/injectMeta"))

app.get("/", (req, res) => {
  res.render("index")
})

app.listen(port, () => console.log("serving"))

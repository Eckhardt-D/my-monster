const expressLayouts = require("express-ejs-layouts")
const express = require("express")
const { join } = require("path")
const app = express()
const PORT = process.env.PORT || 1234

app.use("/public", express.static(join(__dirname, "public")))

app.set("view engine", "ejs")
app.use(expressLayouts)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require("./middleware/injectMeta"))

app.listen(PORT, () =>
  console.log(`
  Client application serving on http://localhost:${PORT}
          ctrl + c to quit application
  `)
)

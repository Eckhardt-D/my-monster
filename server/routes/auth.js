const router = require("express").Router()

router.get("/login", (_, res) => {
  res.render("auth", { authType: "login" })
})

router.get("/signup", (_, res) => {
  res.render("auth", { authType: "signup" })
})

router.post("/login", (req, res) => {
  const { email, password } = req.body
  if (email == "eckhardt@mail.com" && password == "password") {
    return res.render("index")
  }

  res.status(401).json({ error: { message: "Could not authenticate." } })
})

router.post("/signup", (req, res) => {
  const { firstname, lastname, email, password } = req.body
  if (email == "eckhardt@mail.com" && password == "password") {
    return res.render("index")
  }

  res.status(401).json({ error: { message: "Could not authenticate." } })
})

module.exports = router

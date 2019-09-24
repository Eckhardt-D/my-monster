const router = require("express").Router()

router.get("/", (req, res) => {
  let state = req._staticState.index
  res.render("index", { state })
})

module.exports = router

const meta = require("../configuration/meta.json")

module.exports = (req, res, next) => {
  meta["currentRoute"] = req.path
  res.locals.meta = meta
  next()
}

const express = require("express")
const router = express.Router()

module.exports = class Handler {
  constructor(basePath) {
    this._router = router
    this._defaultView = "index"
    this._basePath = basePath

    this._setLocals = this._setLocals.bind(this)
    this._addRoute = this._addRoute.bind(this)
    this._changeDefaultView = this._changeDefaultView.bind(this)

    this._changeDefaultView(this._defaultView)
    this._setLocals(this._basePath)
  }

  _changeDefaultView(viewName) {
    this._defaultView = viewName
    this._router.get(this._basePath, (_, res) => res.render(this._defaultView))
  }

  _addRoute(route, view, model = {}, method = "get") {
    if (route == this._basePath) {
      throw Error(
        `Default route ${this._basePath} handles view. Please select another route.`
      )
    }

    if (!view || typeof view === "undefined") {
      view = "index"
    }

    this._router[method](route, (_, res) => res.render(view, model))
  }

  _setLocals(pathName) {
    this._router.use((req, res, next) => {
      res.locals.basePath = pathName
      next()
    })
  }
}

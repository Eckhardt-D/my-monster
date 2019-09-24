const app = require("express")()
const server = require("http").Server(app)
const io = require("socket.io")(server)

const { fileWatcher } = require("./fileWatcher.js")

class ReloadEmitter {
  constructor(emitter) {
    this._emitter = emitter
    this._hasConnects = false
    this._connectedSocket = null
    this._onConnection = this._onConnection.bind(this)

    this._emitter.on("connection", socket => {
      this._onConnection(socket)
    })
  }

  _onConnection(socket) {
    this._hasConnects = true
    this._connectedSocket = socket
    console.log("[DEV] socket connected")
    fileWatcher._watch()
  }

  _serveEmitter() {
    server.listen(9000)
  }

  _pushReload() {
    if (this._connectedSocket) {
      console.log("[HR] Reload Triggered")
      this._connectedSocket.emit("save")
    }
  }
}

exports.reloadEmitter = new ReloadEmitter(io)

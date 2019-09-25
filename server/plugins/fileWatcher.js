const { join } = require("path")
const glob = require("glob")
const fs = require("fs")
const directoryToWatch = join(__dirname, "../routes")

class FileWatcher {
  constructor(startDirectory) {
    this._topLevel = startDirectory
    this._isWatching = false
    this._filesToWatch = []
    this._lastUpdated = []
    this._currentFileSizes = []
    this._getFilesSync()
  }

  _feedEmitter(emitter) {
    this._reloadEmitter = emitter
  }

  _pushReloadEvent() {
    this._reloadEmitter._pushReload()
  }

  _getFilesSync() {
    glob(this._topLevel + "/**/*", (err, res) => {
      if (err) throw new Error("")
      this._filesToWatch = res.filter(file => fs.statSync(file).isFile)
    })
  }

  async _watch() {
    if (this._isWatching) {
      return console.error("Files not watchable. Already watching.")
    }

    if (!this._filesToWatch.length) {
      console.error("No files to watch. fetching..")
      this._getFilesSync()
    }

    setInterval(() => {
      this._currentFileSizes = this._filesToWatch.map(file => {
        let { size } = fs.statSync(file)
        return { file, size }
      })

      if (!this._lastUpdated.length) {
        this._lastUpdated = this._currentFileSizes
      }

      this._lastUpdated.forEach(last => {
        this._currentFileSizes.forEach(current => {
          if (last.file === current.file && last.size !== current.size) {
            return this._pushReloadEvent()
          }
        })
      })

      this._lastUpdated = this._currentFileSizes
    })
  }

  _stopWatch() {
    if (this._isWatching) {
      this._watching = false
      this._filesToWatch = []
      this._lastUpdated = []
      this._currentFileSizes = []
    }
  }
}

exports.fileWatcher = new FileWatcher(directoryToWatch)

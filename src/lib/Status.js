import fs from 'fs'
import path from 'path'
import os from 'os'
const Tail = require('tail').Tail

class Status {
  constructor (store) {
    this._store = store
    this._homeDir = os.homedir()
    this._savegameDir = '/Saved Games/Frontier Developments/Elite Dangerous'
    this._statusFileName = 'Status.json'
    this._statusFile = path.join(this._homeDir, this._savegameDir, this._statusFileName)

    this._statusFileOk = false
    this._checkStatusFile()

    this._statusTail = null
  }

  start () {
    if (this._statusFileOk === false) {
      return
    }

    this._readInitialStatus()
    this._tailOnStatusFile()
  }

  _readInitialStatus () {
    const data = fs.readFileSync(this._statusFile)
    this._dispatchUpdate(data)
  }

  _checkStatusFile () {
    if (fs.existsSync(this._statusFile)) {
      this._statusFileOk = true
      this._store.dispatch('global/statusFileOk')
    }
  }

  _tailOnStatusFile () {
    this._statusTail = new Tail(this._statusFile)
    this._statusTail.on('line', (data) => {
      this._dispatchUpdate(data)
    })
  }

  _dispatchUpdate (data) {
    const object = JSON.parse(data)
    this._store.dispatch('status/updateStatus', object)
  }
}

export default Status

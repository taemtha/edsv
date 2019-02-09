import fs from 'fs'
import path from 'path'
import os from 'os'

class Status {
  constructor () {
    this._homeDir = os.homedir()
    this._savegameDir = '/Saved Games/Frontier Developments/Elite Dangerous'
    this._statusFileName = 'Status.json'
    this._statusFile = path.join(this._homeDir, this._savegameDir, this._statusFileName)

    if (!fs.existsSync(this._statusFile)) {
      throw Error('Status File does not exists')
    }
  }

  getStatusFile () {
    return this._statusFile
  }
}

export default Status

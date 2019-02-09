import fs from 'fs'
import moment from 'moment'
import path from 'path'
import os from 'os'
class Journal {
  constructor () {
    this._homeDir = os.homedir()
    this._savegameDir = '/Saved Games/Frontier Developments/Elite Dangerous'
    this._journalFileName = `Journal.${moment().format('YYMMDD')}`
    this._journalFiles = []
    this._journalFilesPath = path.join(this._homeDir, this._savegameDir)

    if (!fs.existsSync(this._journalFilesPath)) {
      throw Error('Journal File Path does not exists')
    }
  }

  getJournalFiles () {
    const files = fs.readdirSync(this._journalFilesPath)
    for (let i = 0; i < files.length; i++) {
      const filename = path.join(this._journalFilesPath, files[i])
      const stat = fs.lstatSync(filename)

      if (!stat.isDirectory() && filename.indexOf(this._journalFileName) >= 0) {
        this._journalFiles.push(filename)
      }
    }

    this._journalFiles.sort()
    return this._journalFiles
  }
}

export default Journal

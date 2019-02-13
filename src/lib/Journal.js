import fs from 'fs'
import moment from 'moment'
import path from 'path'
import os from 'os'
const Tail = require('tail').Tail

class Journal {
  constructor (store) {
    this._store = store
    this._homeDir = os.homedir()
    this._savegameDir = '/Saved Games/Frontier Developments/Elite Dangerous'
    this._journalFileName = `Journal.${moment().format('YYMMDD')}`
    this._journalFiles = []
    this._journalFilesPath = path.join(this._homeDir, this._savegameDir)
    this._journalFilesOk = false
    this._checkJournalFiles()
    this._journalTail = null
  }

  start () {
    if (this._journalFilesOk === false) {
      return
    }

    const journalFiles = this._getJournalFiles()

    if (journalFiles.length === 0) {
      return
    }

    this._journalTail = new Tail(journalFiles[journalFiles.length - 1])
    this._journalTail.on('line', (data) => {
      const object = JSON.parse(data)

      switch (object.event) {
        // Scan
        case 'Scan':
          this._store.dispatch('scan/Scan', object)
          break
        case 'FSSDiscoveryScan':
          this._store.dispatch('scan/FSSDiscoveryScan', object)
          break
        case 'FSSAllBodiesFound':
          this._store.dispatch('scan/FSSAllBodiesFound', object)
          break

        // FSD Jump
        case 'StartJump':
          this._store.dispatch('fsd/StartJump', object)
          break
        case 'FSDTarget':
          this._store.dispatch('fsd/FSDTarget', object)
          break
        case 'FSDJump':
          this._store.dispatch('fsd/FSDJump', object)
          break

        // ignored events
        case 'Music':
        case 'ReceiveText':
          break

        // not handled events
        default:
          console.error('not handled event: ' + object.event)
          console.log(object)
      }
    })
  }

  _getJournalFiles () {
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

  _checkJournalFiles () {
    if (fs.existsSync(this._journalFilesPath)) {
      this._journalFilesOk = true
      this._store.dispatch('global/journalFilesOk')
    }
  }
}

export default Journal

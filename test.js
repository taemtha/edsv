'use strict'
// C:\Users\mmatzka\Saved Games\Frontier Developments\Elite Dangerous
const homeDir = require('os').homedir()
const path = require('path')
const Tail = require('tail').Tail
const moment = require('moment')
const fs = require('fs')

// const journalFilesPath = path.join(homeDir, savegameDir, journalFiles)
// console.log(journalFilesPath)
// const journalFile = path.join(homeDir, savegameDir, 'Journal.190115210549.01.log')
// const statusFile = path.join(homeDir, savegameDir, 'Status.json')
// console.log(journalFile)

// const journalTail = new Tail(journalFile)
// const statusTail = new Tail(statusFile)

// journalTail.on('line', function (data) {
//   const object = JSON.parse(data)
//   console.dir(object, { depth: null, colors: true })
// })

// statusTail.on('line', function (data) {
//   const object = JSON.parse(data)
//   console.dir(object, { depth: null, colors: true })
// })

function getJournalFiles () {
  const savegameDir = '/Saved Games/Frontier Developments/Elite Dangerous'
  const journalFileName = `Journal.${moment().format('YYMMDD')}`
  const journalFiles = []
  const journalFilesPath = path.join(homeDir, savegameDir)

  if (!fs.existsSync(journalFilesPath)) {
    console.log('no dir ', journalFilesPath)
  }

  const files = fs.readdirSync(journalFilesPath)
  for (let i = 0; i < files.length; i++) {
    const filename = path.join(journalFilesPath, files[i])
    const stat = fs.lstatSync(filename)

    if (!stat.isDirectory() && filename.indexOf(journalFileName) >= 0) {
      journalFiles.push(filename)
      console.log('-- found: ', filename)
    }
  }

  journalFiles.sort()
  return journalFiles
}

const journalFiles = getJournalFiles()

const journalTail = new Tail(journalFiles[journalFiles.length - 1])
journalTail.on('line', function (data) {
  const object = JSON.parse(data)
  console.dir(object, { depth: null, colors: true })
})

'use strict'
// C:\Users\mmatzka\Saved Games\Frontier Developments\Elite Dangerous
const homeDir = require('os').homedir()
const path = require('path')
const Tail = require('tail').Tail

const savegameDir = '/Saved Games/Frontier Developments/Elite Dangerous'

const journalFile = path.join(homeDir, savegameDir, 'Journal.190115210549.01.log')
const statusFile = path.join(homeDir, savegameDir, 'Status.json')
console.log(journalFile)
const journalTail = new Tail(journalFile)
const statusTail = new Tail(statusFile)

journalTail.on('line', function (data) {
  const object = JSON.parse(data)
  console.dir(object, { depth: null, colors: true })
})

statusTail.on('line', function (data) {
  const object = JSON.parse(data)
  console.dir(object, { depth: null, colors: true })
})

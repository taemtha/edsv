'use strict'
const homeDir = require('os').homedir()
const path = require('path')
const readline = require('readline')
const moment = require('moment')
const fs = require('fs')
let jumpcount = 0;

(async () => {
  const savegameDir = '/Saved Games/Frontier Developments/Elite Dangerous'
  // const journalFileName = `Journal.${moment().format('YYMMDD')}`
  const journalFileName = `Journal.`
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
      await readFile(filename)
    }
  }

  console.log(jumpcount)
})()

async function readFile (filename) {
  return new Promise((resolve, reject) => {
    let linecount = 0
    console.log('start')
    const rl = readline.createInterface({
      input: fs.createReadStream(filename),
      crlfDelay: Infinity
    })

    rl.on('line', (line) => {
      const parsedLine = JSON.parse(line)

      switch (parsedLine.event) {
        case 'Location':
          //    console.log('Location', line)
          break
        case 'FSDJump':
          jumpcount++
          //   console.log('FSDJump', line)
          break
      }
    })

    rl.on('close', function () {
      console.log('done')
      rl.close()
      resolve()
    })
  })
}

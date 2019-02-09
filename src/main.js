import Vue from 'vue'
import './plugins/vuetify'
import VueElectron from 'vue-electron'
import App from './App.vue'
import router from './router'
import store from './store'
import './filter'
import Journal from './lib/Journal'
import Status from './lib/Status'

const HID = require('node-hid')
const devices = HID.devices()

console.log(devices)

Vue.config.productionTip = false

Vue.use(VueElectron)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

process.on('unhandledRejection', error => {
  console.error(error)
})

const journal = new Journal()
const journalFiles = journal.getJournalFiles()

const Tail = require('tail').Tail

const journalTail = new Tail(journalFiles[journalFiles.length - 1])
journalTail.on('line', function (data) {
  const object = JSON.parse(data)

  switch (object.event) {
    // Scan
    case 'Scan':
      store.dispatch('scan/Scan', object)
      break
    case 'FSSDiscoveryScan':
      store.dispatch('scan/FSSDiscoveryScan', object)
      break
    case 'FSSAllBodiesFound':
      store.dispatch('scan/FSSAllBodiesFound', object)
      break

    // FSD Jump
    case 'StartJump':
      store.dispatch('fsd/StartJump', object)
      break
    case 'FSDTarget':
      store.dispatch('fsd/FSDTarget', object)
      break
    case 'FSDJump':
      store.dispatch('fsd/FSDJump', object)
      break

    // ignored events
    case 'Music':
    case 'ReceiveText':
      break

    // not handled events
    default:
      console.dir('not handled event: ' + object.event)
  }
})

const status = new Status()
const statusFile = status.getStatusFile()
const statusTail = new Tail(statusFile)

statusTail.on('line', function (data) {
  const object = JSON.parse(data)
  store.dispatch('status/updateStatus', object)
})

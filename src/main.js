import Vue from 'vue'
import VueElectron from 'vue-electron'
import App from './App.vue'
import router from './router'
import store from './store'

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

const homeDir = require('os').homedir()
const path = require('path')
const Tail = require('tail').Tail

const savegameDir = '/Saved Games/Frontier Developments/Elite Dangerous'

// const journalFile = path.join(homeDir, savegameDir, 'Journal.190115210549.01.log')
// const journalTail = new Tail(journalFile)
// journalTail.on('line', function (data) {
//   const object = JSON.parse(data)
//   console.dir(object, { depth: null, colors: true })
// })

const statusFile = path.join(homeDir, savegameDir, 'Status.json')
const statusTail = new Tail(statusFile)

statusTail.on('line', function (data) {
  const object = JSON.parse(data)
  store.dispatch('status/updateStatus', object)
})

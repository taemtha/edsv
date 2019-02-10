import Vue from 'vue'
import './plugins/vuetify'
import VueElectron from 'vue-electron'
import App from './App.vue'
import router from './router'
import store from './store'
import './filter'
import Journal from './lib/Journal'
import Status from './lib/Status'
import './assets/scss/main.scss'

Vue.config.productionTip = false

Vue.use(VueElectron)

new Vue({
  router,
  store,
  render: h => h(App),
  mounted () {
    // Prevent blank screen in Electron builds
    this.$router.push('/')
  }
}).$mount('#app')

process.on('unhandledRejection', error => {
  console.error(error)
})

const journal = new Journal(store)
journal.start()

const status = new Status(store)
status.start()

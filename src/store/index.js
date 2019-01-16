import Vue from 'vue'
import Vuex from 'vuex'
import status from './modules/status'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    status
  },
  strict: debug
})

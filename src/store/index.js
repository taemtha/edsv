import Vue from 'vue'
import Vuex from 'vuex'
import status from './modules/status'
import scan from './modules/scan'
import fsd from './modules/fsd'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    status,
    scan,
    fsd
  },
  strict: debug
})

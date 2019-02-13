const state = {
  statusFileOk: false,
  journalFilesOk: false
}

// getters
const getters = { }

// actions
const actions = {
  statusFileOk ({ commit }) {
    commit('statusFileOk', true)
  },
  journalFilesOk ({ commit }) {
    commit('journalFilesOk', true)
  }
}

// mutations
const mutations = {
  statusFileOk (state, statusFileOk) {
    state.statusFileOk = statusFileOk
  },
  journalFilesOk (state, journalFilesOk) {
    state.journalFilesOk = journalFilesOk
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

const state = {

}

// getters
const getters = { }

// actions
const actions = {
  Scan ({ commit }, scanEvent) {
    console.log(scanEvent)
  },
  FSSDiscoveryScan ({ commit }, fSSDiscoveryScanEvent) {
    console.log(fSSDiscoveryScanEvent)
  },
  FSSAllBodiesFound ({ commit }, fSSDiscoveryScanEvent) {
    console.log(fSSDiscoveryScanEvent)
  }
}

// mutations
const mutations = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

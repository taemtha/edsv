const state = {

}

// getters
const getters = { }

// actions
const actions = {
  StartJump ({ commit }, startJumpEvent) {
    console.log(startJumpEvent)
  },
  FSDTarget ({ commit }, fSDTargetEvent) {
    console.log(fSDTargetEvent)
  },
  FSDJump ({ commit }, fSDJumpEvent) {
    console.log(fSDJumpEvent)
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

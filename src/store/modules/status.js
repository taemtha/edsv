const state = {
  docked: false, // 0 1 0000 0001 Docked, (on a landing pad)
  // 1 2 0000 0002 Landed, (on planet surface)
  // 2 4 0000 0004 Landing Gear Down
  // 3 8 0000 0008 Shields Up
  supercruise: false, // 4 16 0000 0010 Supercruise
  // 5 32 0000 0020 FlightAssist Off
  // 6 64 0000 0040 Hardpoints Deployed
  // 7 128 0000 0080 In Wing
  // 8 256 0000 0100 LightsOn
  cargoScoopDeployed: false, // 9 512 0000 0200 Cargo Scoop Deployed
  // 10 1024 0000 0400 Silent Running,
  // 11 2048 0000 0800 Scooping Fuel
  // 12 4096 0000 1000 Srv Handbrake
  // 13 8192 0000 2000 Srv using Turret view
  // 14 16384 0000 4000 Srv Turret retracted (close to ship)
  // 15 32768 0000 8000 Srv DriveAssist
  // 16 65536 0001 0000 Fsd MassLocked
  fsdCharging: false, // 17 131072 0002 0000 Fsd Charging
  fsdCooldown: false, // 18 262144 0004 0000 Fsd Cooldown
  // 19 524288 0008 0000 Low Fuel ( < 25% )
  // 20 1048576 0010 0000 Over Heating ( > 100% )
  // 21 2097152 0020 0000 Has Lat Long
  // 22 4194304 0040 0000 IsInDanger
  // 23 8388608 0080 0000 Being Interdicted
  // 24 16777216 0100 0000 In MainShip
  // 25 33554432 0200 0000 In Fighter
  // 26 67108864 0400 0000 In SRV
  analysisMode: false, // 27 134217728 0800 0000 Hud in Analysis mode
  // 28 268435456 1000 0000 Night Vision

  fuel: 0

}

// getters
const getters = { }

// actions
const actions = {
  updateStatus ({ commit }, edStatus) {
    const docked = ((edStatus.Flags & 1 << 0) !== 0)
    commit('setDocked', docked)

    const supercruise = ((edStatus.Flags & 1 << 4) !== 0)
    commit('setSupercruise', supercruise)

    const cargoScoopDeployed = ((edStatus.Flags & 1 << 9) !== 0)
    commit('setCargoScoopDeployed', cargoScoopDeployed)

    const fsdCharging = ((edStatus.Flags & 1 << 17) !== 0)
    commit('setFsdCharging', fsdCharging)

    const fsdCooldown = ((edStatus.Flags & 1 << 18) !== 0)
    commit('setFsdCooldown', fsdCooldown)

    const analysisMode = ((edStatus.Flags & 1 << 27) !== 0)
    commit('setAnalysisMode', analysisMode)

    commit('setFuel', edStatus.Fuel)
  }

}

// mutations
const mutations = {
  setDocked (state, docked) {
    state.docked = docked
  },
  setSupercruise (state, supercruise) {
    state.supercruise = supercruise
  },
  setCargoScoopDeployed (state, cargoScoopDeployed) {
    state.cargoScoopDeployed = cargoScoopDeployed
  },
  setFsdCharging (state, isCharging) {
    state.fsdCharging = isCharging
  },
  setFsdCooldown (state, fsdCooldown) {
    state.fsdCooldown = fsdCooldown
  },
  setAnalysisMode (state, analysisMode) {
    state.analysisMode = analysisMode
  },
  setFuel (state, fuel) {
    state.fuel = fuel
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

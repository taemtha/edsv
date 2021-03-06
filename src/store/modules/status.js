const state = {
  docked: false, // 0 1 0000 0001 Docked, (on a landing pad)
  landed: false, // 1 2 0000 0002 Landed, (on planet surface)
  landingGearDown: false, // 2 4 0000 0004 Landing Gear Down
  shieldsUp: false, // 3 8 0000 0008 Shields Up
  supercruise: false, // 4 16 0000 0010 Supercruise
  flightAssistOff: false, // 5 32 0000 0020 FlightAssist Off
  hardpointsDeployed: false, // 6 64 0000 0040 Hardpoints Deployed
  inWing: false, // 7 128 0000 0080 In Wing
  lightsOn: false, // 8 256 0000 0100 LightsOn
  cargoScoopDeployed: false, // 9 512 0000 0200 Cargo Scoop Deployed
  silentRunning: false, // 10 1024 0000 0400 Silent Running,
  scoopingFuel: false, // 11 2048 0000 0800 Scooping Fuel
  // 12 4096 0000 1000 Srv Handbrake
  // 13 8192 0000 2000 Srv using Turret view
  // 14 16384 0000 4000 Srv Turret retracted (close to ship)
  // 15 32768 0000 8000 Srv DriveAssist
  massLocked: false, // 16 65536 0001 0000 Fsd MassLocked
  fsdCharging: false, // 17 131072 0002 0000 Fsd Charging
  fsdCooldown: false, // 18 262144 0004 0000 Fsd Cooldown
  lowFuel: false, // 19 524288 0008 0000 Low Fuel ( < 25% )
  overHeating: false, // 20 1048576 0010 0000 Over Heating ( > 100% )
  // 21 2097152 0020 0000 Has Lat Long
  // 22 4194304 0040 0000 IsInDanger
  // 23 8388608 0080 0000 Being Interdicted
  // 24 16777216 0100 0000 In MainShip
  // 25 33554432 0200 0000 In Fighter
  // 26 67108864 0400 0000 In SRV
  analysisMode: false, // 27 134217728 0800 0000 Hud in Analysis mode
  nightVision: false, // 28 268435456 1000 0000 Night Vision

  fuelMain: 0,
  fuelMainMax: 32,

  fuelReservoir: 0,
  fuelReservoirMax: 0.63,

  pipSystem: 0,
  pipEngine: 0,
  pipWeapon: 0,

  fireGroup: 0,

  guiFocus: 0,

  cargo: 0

}

// getters
const getters = {

}

// actions
const actions = {
  updateStatus ({ commit }, edStatus) {
    if (edStatus.Flags !== undefined) {
      const docked = ((edStatus.Flags & 1 << 0) !== 0)
      commit('setDocked', docked)

      const landed = ((edStatus.Flags & 1 << 1) !== 0)
      commit('setLanded', landed)

      const landingGearDown = ((edStatus.Flags & 1 << 2) !== 0)
      commit('setLandingGearDown', landingGearDown)

      const shieldsUp = ((edStatus.Flags & 1 << 3) !== 0)
      commit('setShieldsUp', shieldsUp)

      const supercruise = ((edStatus.Flags & 1 << 4) !== 0)
      commit('setSupercruise', supercruise)

      const flightAssistOff = ((edStatus.Flags & 1 << 5) !== 0)
      commit('setFlightAssistOff', flightAssistOff)

      const hardpointsDeployed = ((edStatus.Flags & 1 << 6) !== 0)
      commit('setHardpointsDeployed', hardpointsDeployed)

      const inWing = ((edStatus.Flags & 1 << 7) !== 0)
      commit('setInWing', inWing)

      const lightsOn = ((edStatus.Flags & 1 << 8) !== 0)
      commit('setLightsOn', lightsOn)

      const cargoScoopDeployed = ((edStatus.Flags & 1 << 9) !== 0)
      commit('setCargoScoopDeployed', cargoScoopDeployed)

      const silentRunning = ((edStatus.Flags & 1 << 10) !== 0)
      commit('setSilentRunning', silentRunning)

      const scoopingFuel = ((edStatus.Flags & 1 << 11) !== 0)
      commit('setScoopingFuel', scoopingFuel)

      const massLocked = ((edStatus.Flags & 1 << 16) !== 0)
      commit('setMassLocked', massLocked)

      const fsdCharging = ((edStatus.Flags & 1 << 17) !== 0)
      commit('setFsdCharging', fsdCharging)

      const fsdCooldown = ((edStatus.Flags & 1 << 18) !== 0)
      commit('setFsdCooldown', fsdCooldown)

      const lowFuel = ((edStatus.Flags & 1 << 19) !== 0)
      commit('setLowFuel', lowFuel)

      const overHeating = ((edStatus.Flags & 1 << 20) !== 0)
      commit('setOverHeating', overHeating)

      const analysisMode = ((edStatus.Flags & 1 << 27) !== 0)
      commit('setAnalysisMode', analysisMode)

      const nightVision = ((edStatus.Flags & 1 << 28) !== 0)
      commit('setNightVision', nightVision)
    }

    if (edStatus.Fuel !== undefined) {
      commit('setFuel', edStatus.Fuel)
    }

    if (edStatus.Pips) {
      commit('setPips', edStatus.Pips)
    }

    if (edStatus.FireGroup) {
      commit('setFireGroup', edStatus.FireGroup)
    }

    if (edStatus.GuiFocus) {
      commit('setGuiFocus', edStatus.GuiFocus)
    }

    if (edStatus.Cargo) {
      commit('setCargo', edStatus.Cargo)
    }
  }

}

// mutations
const mutations = {
  setDocked (state, docked) {
    state.docked = docked
  },
  setLanded (state, landed) {
    state.landed = landed
  },
  setLandingGearDown (state, landingGearDown) {
    state.landingGearDown = landingGearDown
  },
  setShieldsUp (state, shieldsUp) {
    state.shieldsUp = shieldsUp
  },
  setSupercruise (state, supercruise) {
    state.supercruise = supercruise
  },
  setFlightAssistOff (state, flightAssistOff) {
    state.flightAssistOff = flightAssistOff
  },
  setHardpointsDeployed (state, hardpointsDeployed) {
    state.hardpointsDeployed = hardpointsDeployed
  },
  setInWing (state, inWing) {
    state.lightsOn = inWing
  },
  setLightsOn (state, lightsOn) {
    state.lightsOn = lightsOn
  },
  setCargoScoopDeployed (state, cargoScoopDeployed) {
    state.cargoScoopDeployed = cargoScoopDeployed
  },
  setSilentRunning (state, silentRunning) {
    state.silentRunning = silentRunning
  },
  setScoopingFuel (state, scoopingFuel) {
    state.scoopingFuel = scoopingFuel
  },
  setMassLocked (state, massLocked) {
    state.massLocked = massLocked
  },
  setFsdCharging (state, isCharging) {
    state.fsdCharging = isCharging
  },
  setLowFuel (state, lowFuel) {
    state.lowFuel = lowFuel
  },
  setOverHeating (state, overHeating) {
    state.overHeating = overHeating
  },
  setFsdCooldown (state, fsdCooldown) {
    state.fsdCooldown = fsdCooldown
  },
  setAnalysisMode (state, analysisMode) {
    state.analysisMode = analysisMode
  },
  setNightVision (state, nightVision) {
    state.nightVision = nightVision
  },
  setFuel (state, fuel) {
    state.fuelMain = fuel.FuelMain
    state.fuelReservoir = fuel.FuelReservoir
  },
  setPips (state, pips) {
    state.pipSystem = pips[0]
    state.pipEngine = pips[1]
    state.pipWeapon = pips[2]
  },
  setFireGroup (state, fireGroup) {
    state.fireGroup = fireGroup
  },
  setGuiFocus (state, guiFocus) {
    state.guiFocus = guiFocus
  },
  setCargo (state, cargo) {
    state.cargo = cargo
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

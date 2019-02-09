<template>
  <div>
    <h1>Status</h1>
    <h2>Ship</h2>
      <indicator title="Docked" statusField="docked"></indicator>
      <indicator title="Landing Gear" statusField="landingGearDown"></indicator>
      <indicator title="Cargo Scoop" statusField="cargoScoopDeployed"></indicator>
      <indicator title="analysisMode" statusField="analysisMode"></indicator>
    <h2>Shields</h2>
      <indicator title="Shields" statusField="shieldsUp"></indicator>
      <indicator title="Silent Running" statusField="silentRunning" warn></indicator>
    <h2>FSD</h2>
      <indicator title="Supercruise" statusField="supercruise"></indicator>
      <indicator title="FSD Charging" statusField="fsdCharging" warn></indicator>
      <indicator title="FSD Cooldown" statusField="fsdCooldown" warn></indicator>
      <indicator title="Mass Locked" statusField="massLocked" warn></indicator>
    <h2>Fuel</h2>
      <indicator title="Scooping Fuel" statusField="scoopingFuel"></indicator>
      <fuel></fuel>

  </div>
</template>

<script>
import Indicator from '@/components/Indicator'
import Fuel from '@/components/Fuel'

export default {
  name: 'StatusView',
  components: {
    Indicator,
    Fuel
  }
}
</script>

<style scoped lang="scss">

</style>

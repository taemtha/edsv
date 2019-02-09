<template>
  <div>
    <h1>Status</h1>
    <indicator title="Docked" statusField="docked"></indicator>
    <indicator title="Supercruise" statusField="supercruise"></indicator>
    <indicator title="Cargo Scoop" statusField="cargoScoopDeployed"></indicator>
    <indicator title="Scooping Fuel" statusField="scoopingFuel"></indicator>
    <indicator title="FSD Charging" statusField="fsdCharging" warn></indicator>
    <indicator title="FSD Cooldown" statusField="fsdCooldown" warn></indicator>
    <indicator title="analysisMode" statusField="analysisMode"></indicator>
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

<template>
  <div>
    <h2>Ship</h2>
    <indicator title="Docked" statusField="docked"></indicator>
    <indicator title="Landing Gear" statusField="landingGearDown"></indicator>
    <indicator title="Cargo Scoop" statusField="cargoScoopDeployed"></indicator>
    <indicator title="analysisMode" statusField="analysisMode"></indicator>
  </div>
</template>

<script>
import Indicator from '@/components/Indicator'

export default {
  name: 'Ship',
  components: {
    Indicator
  }
}
</script>

<style scoped lang="scss">

</style>

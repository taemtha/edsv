<template>
  <div>
    <text-header text="Ship"></text-header>
    <ship-mode />
    <indicator title="Docked" statusField="docked"></indicator>
    <indicator title="Landing Gear" statusField="landingGearDown"></indicator>
    <indicator title="Cargo Scoop" statusField="cargoScoopDeployed"></indicator>
    <indicator title="Hardpoints" statusField="hardpointsDeployed"></indicator>
    <indicator title="Mass Locked" statusField="massLocked" warn></indicator>
  </div>
</template>

<script>
import Indicator from '@/components/Indicator'
import ShipMode from '@/components/ShipMode'
import TextHeader from '@/components/TextHeader'

export default {
  name: 'Ship',
  components: {
    Indicator,
    ShipMode,
    TextHeader
  }
}
</script>

<style scoped lang="scss">

</style>

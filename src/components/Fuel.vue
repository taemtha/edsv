<template>
  <div>
    <text-header text="Fuel" />
    <indicator title="Scooping Fuel" statusField="scoopingFuel"></indicator>
    <fuel-indicator
      text="Main"
      :value="fuelMain"
      :max="fuelMainMax">
    </fuel-indicator>
    <fuel-indicator
      text="Reservoir"
      :value="fuelReservoir"
      :max="fuelReservoirMax">
    </fuel-indicator>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import FuelIndicator from '@/components/FuelIndicator'
import Indicator from '@/components/Indicator'
import TextHeader from '@/components/TextHeader'

export default {
  name: 'Fuel',

  components: {
    Indicator,
    FuelIndicator,
    TextHeader
  },

  computed: {
    ...mapState('status', [
      'fuelMain',
      'fuelMainMax',
      'fuelReservoir',
      'fuelReservoirMax'
    ])
  }
}
</script>

<style scoped lang="scss">

</style>

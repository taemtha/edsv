<template>
  <div>
     <h2>Fuel</h2>
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

export default {
  name: 'Fuel',

  components: {
    Indicator,
    FuelIndicator
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

<template>
  <div>
    <p>Main: {{ fuel.FuelMain | decimal }}</p>
    <p>Reservoir: {{ fuel.FuelReservoir | decimal }}</p>
  </div>
</template>

<script>

export default {
  name: 'Fuel',
  computed: {
    fuel () {
      return this.$store.state.status.fuel
    }
  }
}
</script>

<style scoped lang="scss">

</style>

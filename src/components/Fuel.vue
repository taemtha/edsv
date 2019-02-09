<template>
  <div>
    <p>Main: {{ fuel.FuelMain }}</p>
    <p>Reservoir: {{ fuel.FuelReservoir }}</p>
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

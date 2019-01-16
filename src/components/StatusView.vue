<template>
  <div>
    <h1>Status</h1>
    <dl>
        <dt>docked</dt>
        <dd>{{ docked }}</dd>
        <dt>supercruise</dt>
        <dd>{{ supercruise }}</dd>
        <dt>cargoScoopDeployed</dt>
        <dd>{{ cargoScoopDeployed }}</dd>
        <dt>fsdCharging</dt>
        <dd>{{ fsdCharging }}</dd>
        <dt>fsdCooldown</dt>
        <dd>{{ fsdCooldown }}</dd>
        <dt>analysisMode</dt>
        <dd>{{ analysisMode }}</dd>
    </dl>
    <p>Fuel: {{ fuel }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'StatusView',
  computed: {
    ...mapState('status', [
      'docked',
      'supercruise',
      'cargoScoopDeployed',
      'fsdCharging',
      'fsdCooldown',
      'analysisMode',
      'fuel'
    ])
  }
}
</script>

<style scoped lang="scss">

</style>

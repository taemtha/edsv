<template>
  <div>
    <h2>Shields</h2>
      <indicator title="Shields" statusField="shieldsUp"></indicator>
      <indicator title="Silent Running" statusField="silentRunning" warn></indicator>
  </div>
</template>

<script>
import Indicator from '@/components/Indicator'

export default {
  name: 'Shields',
  components: {
    Indicator
  }
}
</script>

<style scoped lang="scss">

</style>

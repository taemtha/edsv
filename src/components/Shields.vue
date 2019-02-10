<template>
  <div>
    <text-header text="Shields"></text-header>
    <indicator title="Shields" statusField="shieldsUp"></indicator>
    <indicator title="Silent Running" statusField="silentRunning" warn></indicator>
  </div>
</template>

<script>
import Indicator from '@/components/Indicator'
import TextHeader from '@/components/TextHeader'

export default {
  name: 'Shields',
  components: {
    Indicator,
    TextHeader
  }
}
</script>

<style scoped lang="scss">

</style>

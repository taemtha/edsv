<template>
  <div>
    <text-header text="FSD" />
    <indicator title="Supercruise" statusField="supercruise"></indicator>
    <indicator title="FSD Charging" statusField="fsdCharging" warn></indicator>
    <indicator title="FSD Cooldown" statusField="fsdCooldown" warn></indicator>
  </div>
</template>

<script>
import Indicator from '@/components/Indicator'
import TextHeader from '@/components/TextHeader'

export default {
  name: 'Fsd',
  components: {
    Indicator,
    TextHeader
  }
}
</script>

<style scoped lang="scss">

</style>

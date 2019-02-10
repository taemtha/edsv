<template>
  <div>
    <h2>FSD</h2>
    <indicator title="Supercruise" statusField="supercruise"></indicator>
    <indicator title="FSD Charging" statusField="fsdCharging" warn></indicator>
    <indicator title="FSD Cooldown" statusField="fsdCooldown" warn></indicator>
    <indicator title="Mass Locked" statusField="massLocked" warn></indicator>
  </div>
</template>

<script>
import Indicator from '@/components/Indicator'
export default {
  name: 'Fsd',
  components: {
    Indicator
  }
}
</script>

<style scoped lang="scss">

</style>

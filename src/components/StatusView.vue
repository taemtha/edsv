<template>
  <div class="status-view">
    <ship />
    <shields />
    <fsd />
    <fuel />
  </div>
</template>

<script>
import Fuel from '@/components/Fuel'
import Fsd from '@/components/Fsd'
import Shields from '@/components/Shields'
import Ship from '@/components/Ship'

export default {
  name: 'StatusView',
  components: {
    Fuel,
    Fsd,
    Shields,
    Ship
  }
}

</script>

<style scoped lang="scss">

</style>

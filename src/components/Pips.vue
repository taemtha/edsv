<template>
  <div>
      <text-header text="Pips"></text-header>
      <div>
        <pip-indicator :value="pipSystem" pipName="Sys" />
        <pip-indicator :value="pipEngine" pipName="Eng" />
        <pip-indicator :value="pipWeapon" pipName="Wep" />
      </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import TextHeader from '@/components/TextHeader'
import PipIndicator from '@/components/PipIndicator'
export default {
  name: 'Pips',
  components: {
    TextHeader,
    PipIndicator
  },
  computed: {
    ...mapState('status', [ 'pipSystem', 'pipEngine', 'pipWeapon' ])
  }
}
</script>

<style scoped lang="scss">
div {
    display: inline;
}
</style>

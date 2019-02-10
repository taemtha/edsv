<template>
  <div>
   Ship Mode: {{ mode }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ShipMode',
  components: {

  },
  computed: {
    ...mapState('status', [ 'analysisMode' ]),
    mode () {
      return this.analysisMode ? 'Analysis' : 'Combat'
    },
    classObject: function () {
      return {
        active: this.$store.state.status[this.statusField],
        warning: this.$store.state.status[this.statusField] && this.warn
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>

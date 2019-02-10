<template>
  <div class="indicator" :class="classObject">
      {{ mode }}
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
        analysis: this.analysisMode
      }
    }
  }
}
</script>

<style scoped lang="scss">
.indicator {
    border-radius: 2px;
    margin: 5px 0 5px 0;
    text-align: center;
    text-transform: uppercase;
    background: $orangeNormal;
    border:2px $orangeDark solid;
    color: $orangeDarker;
}
.analysis {
  border:2px $blueDark solid;
  background: $blueNormal;
  color: $blueDarker;
}
</style>

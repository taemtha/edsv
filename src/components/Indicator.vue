<template>
  <div class="indicator" :class="classObject">
      {{ title }}
  </div>
</template>

<script>

export default {
  name: 'Indicator',
  props: {
    title: String,
    statusField: String,
    warn: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    enabled () {
      return this.$store.state.status[this.statusField]
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

$orangeLight: darken(orange,25);
$orangeDark: darken(orangered,30);
$orangeNormal: orange;

.indicator {
    border-radius: 2px;
    margin: 5px 0 5px 0;
    text-align: center;
    background-color: $orangeDark;
    border:2px $orangeLight solid;
    color: $orangeNormal;
    text-transform: uppercase;
}
.active {
    background: $orangeNormal;
    border:2px $orangeLight solid;
    color: $orangeDark;

}
.warning {
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0% {
        background-color: $orangeDark;
        border-color: $orangeNormal;
        color: $orangeNormal;
    }
    50% {
        background-color: $orangeNormal;
        border-color: $orangeDark;
        color: $orangeDark;
    }

    100% {
        background-color: $orangeDark;
        border-color: $orangeNormal;
        color: $orangeNormal;
    }
}

</style>

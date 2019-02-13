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

.indicator {
    border-radius: 2px;
    margin: 5px 0 5px 0;
    text-align: center;
    background-color: $orangeDarker;
    border:2px $orangeDark solid;
    color: $orangeNormal;
    text-transform: uppercase;
}
.active {
    background: $orangeNormal;
    border:2px $orangeDark solid;
    color: $orangeDarker;

}
.warning {
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0% {
        background-color: $orangeDarker;
        border-color: $orangeNormal;
        color: $orangeNormal;
    }
    50% {
        background-color: $orangeNormal;
        border-color: $orangeDarker;
        color: $orangeDarker;
    }

    100% {
        background-color: $orangeDarker;
        border-color: $orangeNormal;
        color: $orangeNormal;
    }
}

</style>

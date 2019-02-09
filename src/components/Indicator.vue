<template>
  <div class="indicator" v-bind:class="classObject">
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
.indicator {
    border-radius: 10px;
    margin: 5px;
    padding: 5px;
    text-align: center;
    background-color: orangered;
    border:2px orange solid
}
.active {
    background: orange;
    border:2px orangered solid;

}
.warning {
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0% {
        background-color: orangered;
        border-color: orange;
    }
    50% {
        background-color: orange;
        border-color: orangered;
    }

    100% {
        background-color: orangered;
        border-color: orange;
    }
}

</style>

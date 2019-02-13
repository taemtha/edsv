<template>
<div class="pipIndicator">
    <div>
        <div v-if="pipCount>0"  class="pip"></div>
        <div v-if="pipCount>1" class="pip"></div>
        <div v-if="pipCount>2" class="pip"></div>
        <div v-if="pipCount>3" class="pip"></div>
        <div v-if="showHalfPip" class="pip halfPip"></div>
        <div v-if="pipOffCount>0"  class="pip pipOff"></div>
        <div v-if="pipOffCount>1" class="pip pipOff"></div>
        <div v-if="pipOffCount>2" class="pip pipOff"></div>
        <div v-if="pipOffCount>3" class="pip pipOff"></div>
    </div>
    <div class="pipName">{{ pipName }}</div>
</div>

</template>

<script>

export default {
  name: 'PipIndicator',
  props: ['value', 'pipName'],
  computed: {
    showHalfPip: function () {
      return ((this.value & 1 << 0) !== 0)
    },
    pipCount: function () {
      return Math.floor(this.value / 2)
    },
    pipOffCount: function () {
      let amount = 4
      amount = amount - Math.floor(this.value / 2)
      if (this.value & 1 << 0) {
        amount--
      }
      return amount
    }
  }
}
</script>

<style scoped lang="scss">
div {

    .pipIndicator {
        display: inline-block;
        padding-right: 10px;
    }

    .pip {
        border-radius: 2px;
        padding: 5px;
        margin: 2px;
        display: inline-block;
        background-color: $orangeNormal;

    }

    .pipOff {
        background-color: $orangeDarker;
    }

    .halfPip {
        background-color: $orangeDark;
    }

    .pipName {
        color: $orangeNormal;
        text-transform: uppercase;
        text-align: center;
    }
}
</style>

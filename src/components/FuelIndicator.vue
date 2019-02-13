<template>
  <div>
    <p>{{ text }}: {{ value | decimal }}</p>
    <svg width='100%' height='40px'>
      <svg preserveAspectRatio="none" viewBox='0 0 100 65'>
        <rect class='bg' width='100%' height='10'></rect>
        <rect class='data' :style="barStyle"  height='10'></rect>
        <g class='markers'>
          <line x1="0.25" y1="0" x2="0.25" y2="15"></line>
          <line x1="25%" y1="0" x2="25%" y2="15"></line>
          <line x1="50%" y1="0" x2="50%" y2="15"></line>
          <line x1="75%" y1="0" x2="75%" y2="15"></line>
          <line x1="99.75" y1="0" x2="99.75" y2="15"></line>
        </g>
      </svg>
      <g text-anchor='middle'>
        <text text-anchor='start'  x='0' y='30'>0%</text>
        <text  x='25%' y='30'>25%</text>
        <text  x='50%' y='30'>50%</text>
        <text  x='75%' y='30'>75%</text>
        <text text-anchor='end'  x='100%' y='30'>100%</text>
      </g>
    </svg>
  </div>
</template>

<script>

export default {
  name: 'FuelIndicator',
  props: ['text', 'value', 'max'],

  computed: {
    barStyle: function () {
      return {
        width: ((100 / this.max) * this.value) + '%'
      }
    }
  }

}
</script>

<style lang="scss">

p {
  color: $orangeNormal;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 5px;
}

svg {

  rect.bg {
    fill: $orangeDark;
  }

  rect.data {
    fill: $orangeNormal;
    transition-timing-function: ease;
    transition: width .5s
  }

  line {
    stroke: $orangeDarker;
    stroke-width: 0.5;
  }

  text {
    fill: $orangeNormal;
  }
}

</style>

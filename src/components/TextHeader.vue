<template>
 <h2>{{text}}</h2>
</template>

<script>

export default {
  name: 'TextHeader',
  props: ['text']
}
</script>

<style scoped lang="scss">

$orangeLight: darken(orange,25);
$orangeDark: darken(orangered,30);
$orangeNormal: orange;

h2 {
  text-transform: uppercase;
  color: $orangeNormal;
}
</style>

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

h2 {
  text-transform: uppercase;
  color: $orangeNormal;
}
</style>

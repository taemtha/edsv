<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs6>
        <ship />
        <fuel />

      </v-flex>
      <v-flex xs6>
        <shields />
        <fsd />
        <pips />
      </v-flex>
      <v-flex xs12>
        Test Text
      </v-flex>
    </v-layout>
  </v-container>
 </template>

<script>
import Fuel from '@/components/Fuel'
import Fsd from '@/components/Fsd'
import Shields from '@/components/Shields'
import Ship from '@/components/Ship'
import Pips from '@/components/Pips'

export default {
  name: 'StatusView',
  components: {
    Fuel,
    Fsd,
    Shields,
    Ship,
    Pips
  }
}

</script>

<style scoped lang="scss">

</style>

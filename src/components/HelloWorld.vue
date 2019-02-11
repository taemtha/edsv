<template>
  <v-container>
    <v-layout
      text-xs-left
      wrap
    >
    <StatusView />

    </v-layout>
  </v-container>
</template>

<script>
import StatusView from '@/components/StatusView'

export default {
  components: {
    StatusView
  }
}
</script>

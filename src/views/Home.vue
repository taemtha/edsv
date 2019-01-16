<template>
  <div class="home">
    <StatusView />
  </div>
</template>

<script>
// @ is an alias to /src
import StatusView from '@/components/StatusView.vue'

export default {
  name: 'home',
  components: {
    StatusView
  }
}
</script>

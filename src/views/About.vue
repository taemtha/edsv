<template>
  <div class="about">
    <h1>This is an about page 3</h1>
    <p>{{ getName() }}</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    getName () {
      return this.$electron.remote.app.getPath('userData')
    }
  }
}
</script>

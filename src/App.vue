<template>
  <the-header />
  <dashboard />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import Dashboard from '@/components/Dashboard.vue'
export default {
  name: 'App',
  components: { TheHeader, Dashboard }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100vh;
}
</style>

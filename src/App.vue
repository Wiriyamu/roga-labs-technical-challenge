<template>
  <the-header />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
export default {
  name: 'App',
  components: { TheHeader }
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

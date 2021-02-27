<template>
  <the-footer />
</template>

<script>
import TheFooter from '@/components/TheFooter.vue'
export default {
  name: 'App',
  components: { TheFooter }
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

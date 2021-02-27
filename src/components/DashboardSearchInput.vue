<template>
  <input
    type="text"
    class="form-control search"
    placeholder="Busque por nomes ou emails"
    aria-label="Username"
    aria-describedby="basic-addon1"
  />
</template>

<script>
export default {
  name: 'DashboardSearchInput'
}
</script>

<style lang="scss" scoped>
.search {
  max-width: 300px;
}
</style>

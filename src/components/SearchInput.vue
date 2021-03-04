<template>
  <input
    @input="searchValue"
    type="text"
    class="form-control search"
    placeholder="Busque por nomes ou emails"
    aria-label="Username"
    aria-describedby="basic-addon1"
  />
</template>

<script>
export default {
  name: 'SearchInput',
  emits: ['search-value'],
  setup(_, { emit }) {
    const searchValue = ({ target: { value } }) => emit('search-value', value)

    return { searchValue }
  }
}
</script>

<style lang="scss" scoped></style>

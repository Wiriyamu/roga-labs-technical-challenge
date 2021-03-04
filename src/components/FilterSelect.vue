<template>
  <div>
    <label class="mr-2"><strong>Filtros:</strong></label>
    <select @input="selectValue">
      <option disabled value="">Estudantes</option>
      <option>Todos</option>
      <option>Ativos</option>
      <option>Inativos</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'FilterSelect',
  emits: ['select-value'],
  setup(_, { emit }) {
    const selectValue = ({ target: { value } }) => emit('select-value', value)

    return { selectValue }
  }
}
</script>

<style lang="scss" scoped></style>

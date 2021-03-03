<template>
  <button
    @click="emitDeleteMessage(student)"
    type="button"
    class="btn btn-danger ml-2"
    :disabled="student.active == false"
  >
    Excluir
  </button>
</template>

<script>
export default {
  name: 'DeleteStudent',
  emits: ['student-id'],
  props: {
    student: {
      type: Object,
      required: true
    }
  },
  setup(_, { emit }) {
    const emitDeleteMessage = ({ id }) => emit('student-id', id)
    return { emitDeleteMessage }
  }
}
</script>

<style lang="scss" scoped></style>

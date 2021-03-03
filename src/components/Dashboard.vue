<template>
  <list-students />
</template>

<script>
import ListStudents from './ListStudents.vue'
import { reactive } from 'vue'
export default {
  components: { ListStudents },
  name: 'Dashboard',
  setup() {
    const state = reactive({
      search: '',
      student: {
        name: '',
        email: '',
        age: null,
        phone: null,
        assessment: '12/02/2021',
        active: true
      }
    })

    return { state }
  }
}
</script>

<style lang="scss" scoped>
.search {
  width: 300px;
}
</style>

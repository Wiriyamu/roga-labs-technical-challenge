<template>
  <button
    type="button"
    class="btn btn-danger mr-5"
    data-toggle="modal"
    data-target="#createModal"
  >
    Novo Aluno
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="createModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Cadastrar Aluno</h5>
          <button
            @click="clearForm"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div
            v-if="state.postSuccess"
            class="alert alert-success"
            role="alert"
          >
            Estudante criado com sucesso!
          </div>
          <div v-if="state.formIsEmpty" class="alert alert-danger" role="alert">
            O formulário possui campos vazios! Preencha-o corretamente e tente
            novamente.
          </div>
          <div class="form-group">
            <label>Name</label>
            <input
              v-model.trim="state.student.name"
              type="text"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input
              v-model.trim="state.student.email"
              type="email"
              class="form-control"
            />
          </div>

          <div class="form-group">
            <label>Idade</label>
            <input
              v-model.number="state.student.age"
              type="number"
              class="form-control"
            />
          </div>

          <div class="form-group">
            <label>Telefone</label>
            <input
              v-model.number="state.student.phone"
              type="number"
              class="form-control"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            @click="clearForm"
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
          >
            Cancelar
          </button>
          <button @click="newStudentSave" type="button" class="btn btn-primary">
            Salvar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from '@/services/api.js'
import { reactive } from 'vue'
export default {
  name: 'NewStudent',
  emits: ['new-student-created'],
  setup(_, { emit }) {
    const state = reactive({
      student: {
        name: '',
        email: '',
        age: null,
        phone: null,
        assessment: '12/02/2021',
        active: true
      },
      formIsEmpty: false,
      postSuccess: false
    })

    const clearForm = () => {
      state.student.name = ''
      state.student.email = ''
      state.student.age = null
      state.student.phone = null
    }

    const showEmptyAlert = () => {
      const MILISECONDS = 5000
      state.formIsEmpty = true
      setTimeout(() => {
        state.formIsEmpty = false
      }, MILISECONDS)
    }

    const changePostSuccess = () => {
      state.postSuccess = true
      setTimeout(() => {
        state.postSuccess = false
      }, 2000)
    }

    const createStudent = async () => {
      await api.post('/students', state.student)
      clearForm()
      changePostSuccess()
      emit('new-student-created')
    }

    const newStudentSave = () => {
      const name = state.student.name === ''
      const email = state.student.email === ''
      const age = state.student.age === null
      const phone = state.student.phone === null

      name || email || age || phone ? showEmptyAlert() : createStudent()
    }

    return { state, clearForm, newStudentSave }
  }
}
</script>

<style lang="scss" scoped></style>

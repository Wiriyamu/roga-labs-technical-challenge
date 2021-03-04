<template>
  <section
    class="ml-5 mt-5 d-flex flex-sm-wrap justify-content-between align-items-center"
  >
    <search-input @search-value="updateSearch" />
    <filter-select @select-value="updateFilter" />
    <new-student @new-student-created="fetchNewStudents" />
  </section>

  <section v-if="state.students.length" class="my-4 mx-4 py-4">
    <ul v-if="filteredStudents.length" class="cards">
      <li v-for="student in filteredStudents" :key="student.id" class="card">
        <div class="d-flex">
          <h3>{{ student.name }}</h3>
          <div
            class="active"
            :class="{ inactive: student.active == false }"
          ></div>
        </div>

        <p><strong>Última avaliação: </strong> {{ student.assessment }}</p>
        <p>{{ student.email }}</p>

        <div class="d-flex align-items-center">
          <p>{{ student.age }} anos</p>
          <p class="ml-2">{{ student.phone }}</p>
        </div>

        <div>
          <button
            @click="infoStudent(student)"
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#editModal"
            :disabled="student.active == false"
          >
            Editar
          </button>

          <div
            class="modal fade"
            id="editModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Editar Estudante
                  </h5>
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
                    v-if="state.putSuccess"
                    class="alert alert-success"
                    role="alert"
                  >
                    Estudante editado com sucesso!
                  </div>
                  <div
                    v-if="state.formIsEmpty"
                    class="alert alert-danger"
                    role="alert"
                  >
                    O formulário possui campos vazios! Preencha-o corretamente e
                    tente novamente.
                  </div>
                  <div class="form-group">
                    <label>Name</label>
                    <input
                      v-model.trim="state.student.name"
                      type="text"
                      class="form-control"
                      aria-describedby="emailHelp"
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
                  <button
                    @click="editStudentSave"
                    type="button"
                    class="btn btn-primary"
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            @click="deleteStudent(student)"
            type="button"
            class="btn btn-danger ml-2"
            :disabled="student.active == false"
          >
            Excluir
          </button>
        </div>
      </li>
    </ul>
    <h1 v-else class="mt-5 ml-4">
      Não há usuários com os critérios de busca utilizados 😢
    </h1>
  </section>
  <h1 v-else class="mt-5 ml-4">Não há usuários cadastrados 😢</h1>
</template>

<script>
import { reactive, computed } from 'vue'
import { api } from '@/services/api.js'
import SearchInput from './SearchInput.vue'
import FilterSelect from './FilterSelect'
import NewStudent from './NewStudent'

export default {
  components: { SearchInput, FilterSelect, NewStudent },
  name: 'ListStudents',
  setup() {
    const state = reactive({
      search: '',
      filter: '',
      studentId: null,
      student: {
        name: '',
        email: '',
        age: null,
        phone: null,
        assessment: '12/02/2021',
        active: true
      },
      formIsEmpty: false,
      putSuccess: false,
      students: []
    })

    const getStudents = async () => {
      const { data } = await api.get('/students')
      state.students = data
    }
    getStudents()

    const updateSearch = value => (state.search = value)
    const updateFilter = value => (state.filter = value)
    const fetchNewStudents = () => getStudents()
    const infoStudent = ({ id }) => (state.studentId = id)

    const clearForm = () => {
      state.student.name = ''
      state.student.email = ''
      state.student.age = null
      state.student.phone = null
    }

    const showEmptyAlert = () => {
      state.formIsEmpty = true
      setTimeout(() => {
        state.formIsEmpty = false
      }, 5000)
    }

    const changePutSuccess = () => {
      state.putSuccess = true
      setTimeout(() => {
        state.putSuccess = false
      }, 2000)
    }

    const editStudent = async () => {
      await api.put(`/students/${state.studentId}`, state.student)
      clearForm()
      changePutSuccess()
      getStudents()
    }

    const formIsEmpty = () => {
      const name = state.student.name === ''
      const email = state.student.email === ''
      const age = state.student.age === null
      const phone = state.student.phone === null

      name || email || age || phone ? showEmptyAlert() : editStudent()
    }

    const editStudentSave = () => formIsEmpty()

    const deleteStudent = async ({ id }) => {
      await api.delete(`/students/${id}`)
      getStudents()
    }

    const nameOrEmail = () => {
      const students = state.students
      const search = state.search

      return students.filter(student => {
        return (
          student.name.toLowerCase().includes(search.toLowerCase()) ||
          student.email.toLowerCase().includes(search.toLowerCase())
        )
      })
    }

    const activeOrInactive = () => {
      const filter = state.filter
      const active = student => student.active === true
      const inactive = student => student.active === false
      const students = state.students

      if (filter === 'Ativos') return students.filter(active)
      else if (filter === 'Inativos') return students.filter(inactive)
      return nameOrEmail()
    }

    const filteredStudents = computed(() => activeOrInactive())

    return {
      state,
      updateSearch,
      updateFilter,
      fetchNewStudents,
      infoStudent,
      clearForm,
      editStudentSave,
      deleteStudent,
      filteredStudents
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  width: 300px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  border: none;
  margin: 0 10px;
}

.card {
  margin: 10px 10px;
  padding: 20px 20px;
  border: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
}

.active,
.inactive {
  width: 10px;
  height: 10px;
  margin: 5px 0 0 20px;
  border-radius: 10px;
}
.active {
  background-color: green;
}
.inactive {
  background-color: red;
}
</style>

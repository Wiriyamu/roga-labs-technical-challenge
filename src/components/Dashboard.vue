<template>
  <main class="dashboard mt-4">
    <div class="d-flex justify-content-between align-itens-center ml-5 mr-5">
      <dashboard-search-input />
      <dashboard-filter-dropdown />
      <dashboard-new-student-button />
    </div>
    <div class="ml-5 mr-5">
      <dashboard-students-list />
    </div>
  </main>
</template>

<script>
import DashboardSearchInput from '@/components/DashboardSearchInput'
import DashboardFilterDropdown from '@/components/DashboardFilterDropdown'
import DashboardNewStudentButton from '@/components/DashboardNewStudentButton'
import DashboardStudentsList from '@/components/DashboardStudentsList'

export default {
  name: 'Dashboard',
  components: {
    DashboardSearchInput,
    DashboardFilterDropdown,
    DashboardNewStudentButton,
    DashboardStudentsList
  }
}
</script>

<style lang="scss" scoped></style>

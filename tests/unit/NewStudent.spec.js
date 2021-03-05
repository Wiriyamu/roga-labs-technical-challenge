import NewStudent from '@/components/NewStudent.vue'
import { mount } from '@vue/test-utils'

describe('NewStudent.vue', () => {
  it('should render default state correctly', () => {
    const wrapper = mount(NewStudent)

    expect(wrapper.vm.state.student.name).toBe('')
    expect(wrapper.vm.state.student.email).toBe('')
    expect(wrapper.vm.state.student.age).toBe(null)
    expect(wrapper.vm.state.student.phone).toBe(null)
    expect(wrapper.vm.state.student.assessment).toBe('12/02/2021')
    expect(wrapper.vm.state.student.active).toBe(true)
    expect(wrapper.vm.state.formIsEmpty).toBe(false)
    expect(wrapper.vm.state.postSuccess).toBe(false)
  })

  it('should clear the form by clicking on the cancel button', async () => {
    const wrapper = mount(NewStudent)

    wrapper.vm.state.student.name = 'Willian'
    wrapper.vm.state.student.age = 22

    await wrapper.get('[data-test="cancel"]').trigger('click')

    expect(wrapper.vm.state.student.name).toBe('')
    expect(wrapper.vm.state.student.age).toBe(null)
  })

  it('should clear the form by clicking on the modal close button', async () => {
    const wrapper = mount(NewStudent)

    wrapper.vm.state.student.name = 'Willian'
    wrapper.vm.state.student.age = 22

    await wrapper.get('[data-test="close"]').trigger('click')

    expect(wrapper.vm.state.student.name).toBe('')
    expect(wrapper.vm.state.student.age).toBe(null)
  })

  it('should show an error when trying to create a new student if any form fields are empty', async () => {
    const wrapper = mount(NewStudent)

    await wrapper.get('[data-test="new-student-save"]').trigger('click')

    expect(wrapper.html()).toContain('O formulário possui campos vazios!')
  })
})

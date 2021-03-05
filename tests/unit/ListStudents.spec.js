import ListStudents from '@/components/ListStudents.vue'
import { mount } from '@vue/test-utils'

describe('ListStudents.vue', () => {
  it('should render default state correctly', () => {
    const wrapper = mount(ListStudents)

    expect(wrapper.vm.state.search).toBe('')
    expect(wrapper.vm.state.filter).toBe('')
    expect(wrapper.vm.state.student.name).toBe('')
    expect(wrapper.vm.state.student.email).toBe('')
    expect(wrapper.vm.state.student.age).toBe(null)
    expect(wrapper.vm.state.student.phone).toBe(null)
    expect(wrapper.vm.state.student.assessment).toBe('12/02/2021')
    expect(wrapper.vm.state.student.active).toBe(true)
    expect(wrapper.vm.state.formIsEmpty).toBe(false)
    expect(wrapper.vm.state.putSuccess).toBe(false)
    expect(wrapper.vm.state.students).toEqual([])
  })
})

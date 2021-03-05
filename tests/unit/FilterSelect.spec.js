import FilterSelect from '@/components/FilterSelect'
import { mount } from '@vue/test-utils'

describe('FilterSelect.vue', () => {
  it('should select a value correctly', async () => {
    const wrapper = mount(FilterSelect)

    const select = wrapper.find('select')
    const active = wrapper.get('[data-test="active"]')
    await active.setValue('Ativos')
    expect(select.element.value).toBe('Ativos')
  })
})

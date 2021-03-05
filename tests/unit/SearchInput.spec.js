import SearchInput from '@/components/SearchInput.vue'
import { mount } from '@vue/test-utils'

describe(SearchInput.vue, () => {
  it('should emit input value correctly', async () => {
    const wrapper = mount(SearchInput)

    await wrapper.get('[data-test="search-input"]').setValue('Willian')

    const searchValue = wrapper.emitted('search-value')

    expect(searchValue[0]).toHaveLength(1)
    expect(searchValue[0]).toEqual(['Willian'])
  })
})

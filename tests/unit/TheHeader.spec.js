import TheHeader from '@/components/TheHeader.vue'
import { mount } from '@vue/test-utils'

describe('TheHeader.vue', () => {
  it('should render TheHeader correctly', () => {
    const wrapper = mount(TheHeader)

    expect(wrapper.html()).toMatchSnapshot()
  })
})

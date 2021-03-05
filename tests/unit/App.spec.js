import App from '@/App.vue'
import Dashboard from '@/components/Dashboard.vue'
import TheHeader from '@/components/TheHeader.vue'
import { mount } from '@vue/test-utils'

describe('App.vue', () => {
  it('should render TheHeader.vue e Dashboard.vue correctly', () => {
    const wrapper = mount(App)

    expect(wrapper.findComponent(TheHeader).exists()).toBe(true)
    expect(wrapper.findComponent(Dashboard).exists()).toBe(true)
  })
})

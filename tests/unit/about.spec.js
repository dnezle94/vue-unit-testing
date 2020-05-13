import { mount } from '@vue/test-utils'
import About from '../../src/views/About.vue'

describe('About.vue', () => {
    it('renders h1', () => {
        const wrapper = mount(About)
        expect(wrapper.get('h1'))
    })
})
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders a div', () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.get('div'))
  })

  it('expects msg prop', () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData:{
        msg: 'hello'
      }
    })
    expect(wrapper.props().msg).toBe('hello');
  })
})


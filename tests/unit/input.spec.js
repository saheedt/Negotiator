import { shallowMount, createLocalVue } from '@vue/test-utils';
import Input from '@/components/Input.vue';

const localVue = createLocalVue();
describe('Input component', () => {
  it('emits correct value when input event occurs', () => {
    let value = null;
    const newValue = 12.12;
    const wrapper = shallowMount(Input, {
      localVue,
      propsData: { value, type: 'number' },
      listeners: {
        input: (event) => { value = Number.parseFloat(event); }
      }
    });
    const input = wrapper.find('input');
    input.element.value = newValue
    input.trigger('input');
    expect(value).toEqual(newValue);
  });

  it('renders to correct place holder passed via props', () => {
    const placeHolder = 'lol';
    const wrapper = shallowMount(Input, {
      localVue,
      propsData: { type: 'number', placeholder: placeHolder },
    });
    const input = wrapper.find('input');
    expect(input.element.placeholder).toBe(placeHolder);
  });
});

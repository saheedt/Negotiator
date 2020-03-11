import { shallowMount, createLocalVue } from '@vue/test-utils';
import Button from '@/components/Button.vue';

const localVue = createLocalVue();
describe('Button component', () => {
  it('renders correct slot value when passed', () => {
    const buttonLabel = 'test button';
    const wrapper = shallowMount(Button, {
      localVue,
      slots: {
        default: buttonLabel
      }
    });
    expect(wrapper.text()).toMatch(buttonLabel);
  });
  it('triggers supplied function passed as props on button click', () => {
    let count = 0;
    const countUp = () => { count++ };
    const wrapper = shallowMount(Button, {
      localVue,
      propsData: {
        handleClick: countUp
      }
    });
    wrapper.find('button').trigger('click');
    expect(count).toEqual(1);
  });
});

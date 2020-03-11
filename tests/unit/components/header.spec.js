import { shallowMount, createLocalVue } from '@vue/test-utils';
import Header from '@/components/Header.vue';

const localVue = createLocalVue();
describe('Header component', () => {
  it('renders props.title when passed', () => {
    const title = 'new title';
    const wrapper = shallowMount(Header, {
      localVue,
      propsData: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});

import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import Employee from '@/components/Employee.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);
describe('Employee component', () => {
  let store, state;

  beforeEach(() => {
    state = {
      minSalary: null
    }
    store = new Vuex.Store({
      state
    });
  });
  it('renders correctly', () => {
    const wrapper = shallowMount(Employee, {
      store,
      localVue,
    });
    expect(wrapper.find('.employee-holder').isVisible()).toBe(true);
    expect(wrapper.find('.salary-submit-btn-holder').isVisible()).toBe(true);
  });

  it('renders the correct amount of children components', () => {
    const wrapper = mount(Employee, {
      store,
      localVue,
    });
    const input = wrapper.findAll('input');
    expect(input.length).toEqual(2);
  });

  it('renders Error component when error condition is met', () => {
    const wrapper = mount(Employee, {
      store,
      localVue,
      data: () => ({ foundInvalidInput: true }),
    });
    expect(wrapper.find('.error-msg-box').isVisible()).toBe(true);
  });
 });

import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import Employer from '@/components/Employer.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);
describe('Employee component', () => {
  let store, state;

  beforeEach(() => {
    state = {
      maxOffer: null
    }
    store = new Vuex.Store({
      state
    });
  });
  it('renders correctly', () => {
    const wrapper = shallowMount(Employer, {
      store,
      localVue,
    });
    expect(wrapper.find('.employer-holder').isVisible()).toBe(true);
    expect(wrapper.find('.salary-submit-btn-holder').isVisible()).toBe(true);
  });

  it('renders the correct amount of children components', () => {
    const wrapper = mount(Employer, {
      store,
      localVue,
    });
    const input = wrapper.findAll('input');
    expect(input.length).toEqual(2);
  });

  it('renders Error component when error condition is met', () => {
    const wrapper = mount(Employer, {
      store,
      localVue,
      data: () => ({ foundInvalidInput: true }),
    });
    expect(wrapper.find('.error-msg-box').isVisible()).toBe(true);
  });
});

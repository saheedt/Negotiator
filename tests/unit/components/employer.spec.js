import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import Employer from '@/components/Employer.vue';
import Vuex from 'vuex';

import util from '@/utils/util';

const localVue = createLocalVue();
localVue.use(Vuex);
describe('Employee component', () => {
  let store;
  const { mutations } = util;

  beforeEach(() => {
    const state = {
      maxOffer: null
    };
    const storeMutations = {
      [mutations.SET_MAX_OFFER](state, value) {
        state.maxOffer = value;
      },
    };
    store = new Vuex.Store({
      state,
      mutations: storeMutations,
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

  it('should call setLocalOffer method on input event', () => {
    const wrapper = mount(Employer, {
      store,
      localVue,
    });
    wrapper.vm.setLocalOffer = jest.fn();
    const minSalaryInput = wrapper.find('input[type=number]');
    minSalaryInput.trigger('input');
    expect(wrapper.vm.setLocalOffer).toBeCalled();
  });

  it('should set localEmployerOffer state on input event', () => {
    const maxOffer = 100.19;
    const wrapper = mount(Employer, {
      store,
      localVue,
    });
    const maxOfferInput = wrapper.find('input[type=number]');
    maxOfferInput.element.value = maxOffer;
    maxOfferInput.trigger('input');
    expect(wrapper.vm.$data.localEmployerOffer).toEqual(`${maxOffer}`);
  });

  it('should call submitOffer on maxOffer submit', () => {
    const spy = jest.spyOn(Employer.methods, 'submitOffer');
    const maxOffer = 500.19;
    const wrapper = mount(Employer, {
      store,
      localVue,
    });
    const maxOfferInput = wrapper.find('input[type=number]');
    maxOfferInput.element.value = maxOffer;
    maxOfferInput.trigger('input');
    wrapper.find('.employer-holder').trigger('submit');
    expect(spy).toBeCalled();
  });

  it('should call handleKeyPress on keypress event', () => {
    const spy = jest.spyOn(Employer.methods, 'handleKeyPress');
    const wrapper = mount(Employer, {
      store,
      localVue,
    });
    const maxOfferInput = wrapper.find('input[type=number]');
    maxOfferInput.trigger('keypress');
    maxOfferInput.trigger('keypress', { key: 'E' });
    expect(spy).toBeCalledTimes(2);
  });

  it('should call handlePaste on paste event', () => {
    const spy = jest.spyOn(Employer.methods, 'handlePaste');
    const wrapper = mount(Employer, {
      store,
      localVue,
    });
    const fakerClipboard = {
      dataType: 'text/plain',
      data: 'E',
      getData: () => (fakerClipboard.data)
    }
    const maxOfferInput = wrapper.find('input[type=number]');
    maxOfferInput.trigger('paste', { clipboardData: fakerClipboard });
    fakerClipboard.data = 101;
    maxOfferInput.trigger('paste', { clipboardData: fakerClipboard });
    expect(spy).toBeCalledTimes(2);
  });
});

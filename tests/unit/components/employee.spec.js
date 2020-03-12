import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import Employee from '@/components/Employee.vue';
import Vuex from 'vuex';

import util from '@/utils/util';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Employee component', () => {
  let store;
  const { mutations } = util;
  
  beforeEach(() => {
    const state = {
      minSalary: null
    };
    const storeMutations = {
      [mutations.SET_MIN_SALARY](state, value) {
        state.minSalary = value;
      },
    };
    store = new Vuex.Store({
      state,
      mutations: storeMutations,
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

  it('should call setLocalSalary method on input event', () => {
    const wrapper = mount(Employee, {
      store,
      localVue,
    });
    wrapper.vm.setLocalSalary = jest.fn();
    const minSalaryInput = wrapper.find('input[type=number]');
    minSalaryInput.trigger('input');
    expect(wrapper.vm.setLocalSalary).toBeCalled();
  });

  it('should set localEmployeeSalary state on input event', () => {
    const minSalary = 100.19;
    const wrapper = mount(Employee, {
      store,
      localVue,
    });
    const minSalaryInput = wrapper.find('input[type=number]');
    minSalaryInput.element.value = minSalary;
    minSalaryInput.trigger('input');
    expect(wrapper.vm.$data.localEmployeeSalary).toEqual(`${minSalary}`);
  });

  it('should call submitSalary on minSalary submit', () => {
    const spy = jest.spyOn(Employee.methods, 'submitSalary');
    const minSalary = 300.19;
    const wrapper = mount(Employee, {
      store,
      localVue,
    });
    const minSalaryInput = wrapper.find('input[type=number]');
    minSalaryInput.element.value = minSalary;
    minSalaryInput.trigger('input');
    wrapper.find('.employee-holder').trigger('submit');
    expect(spy).toBeCalled();
  });

  it('should call handleKeyPress on keypress event', () => {
    const spy = jest.spyOn(Employee.methods, 'handleKeyPress');
    const wrapper = mount(Employee, {
      store,
      localVue,
    });
    const minSalaryInput = wrapper.find('input[type=number]');
    minSalaryInput.trigger('keypress');
    minSalaryInput.trigger('keypress', { key: 'e' });
    expect(spy).toBeCalledTimes(2);
  });

  it('should call handlePaste on paste event', () => {
    const spy = jest.spyOn(Employee.methods, 'handlePaste');
    const wrapper = mount(Employee, {
      store,
      localVue,
    });
    const fakerClipboard = {
      dataType: 'text/plain',
      data: 'e',
      getData: () => (fakerClipboard.data)
    }
    const minSalaryInput = wrapper.find('input[type=number]');
    minSalaryInput.trigger('paste', { clipboardData: fakerClipboard });
    fakerClipboard.data = '1';
    minSalaryInput.trigger('paste', { clipboardData: fakerClipboard });
    expect(spy).toBeCalledTimes(2);
  });

 });

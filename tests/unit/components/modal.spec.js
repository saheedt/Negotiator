import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import Modal from '@/components/Modal.vue';

const localVue = createLocalVue();
describe('Modal component', () => {
  it('renders slot contents correctly', () => {
    const headerContent = 'Header slot content';
    const bodyContent = 'Body slot content';
    const footerContent = 'Footer slot content';
    const fetchWeatherMock = jest.fn()
    const wrapper = shallowMount(Modal, {
      localVue,
      slots: {
        header: `<div>${headerContent}</div>`,
        body: `<div>${bodyContent}</div>`,
        footer: `<div>${footerContent}</div>`
      },
      propsData: { fetchWeather: fetchWeatherMock },
    });

    const header = wrapper.find('.modal-header');
    const body = wrapper.find('.modal-body');
    const footer = wrapper.find('.modal-footer');

    expect(header.text().trim()).toBe(headerContent);
    expect(body.text().trim()).toBe(bodyContent);
    expect(footer.text().trim()).toBe(footerContent);
  });

  it('should call handleClose prop when close button is clicked', () => {
    const fetchWeatherMock = jest.fn();
    const handleCloseMock = jest.fn();
    const wrapper = mount(Modal, {
      localVue,
      propsData: { fetchWeather: fetchWeatherMock, handleClose: handleCloseMock },
    });
    wrapper.find('button').trigger('click');
    expect(handleCloseMock.mock.calls.length).toEqual(1);
  });

  it('should call fetchWeather prop on mount', () => {
    const fetchWeatherMock = jest.fn();
    shallowMount(Modal, {
      localVue,
      propsData: { fetchWeather: fetchWeatherMock },
    });

    expect(fetchWeatherMock.mock.calls.length).toEqual(1);
  });
});

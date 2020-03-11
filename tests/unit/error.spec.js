import { shallowMount, createLocalVue } from '@vue/test-utils';
import Error from '@/components/Error.vue';

const localVue = createLocalVue();
describe('Error component', () => {
  it('should render error message correctly', () => {
    const errorMsg = 'No way!';
    const wrapper = shallowMount(Error, {
      localVue,
      slots: {
        default: errorMsg
      }
    });
    const renderedErrorMessagetext = wrapper.find('.error-msg-box').text().trim();
    // we expect a duplicate because of the aria-live implementation in the error component
    const expected = `Error!  ${errorMsg} Error!  ${errorMsg}`.trim();
    expect(renderedErrorMessagetext).toBe(expected);
  });
});

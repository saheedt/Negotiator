import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import store from '@/store';
import util from '@/utils/util';

const { mutations } = util;
const localVue = createLocalVue();
localVue.use(Vuex);
describe('store', () => {
  it('should set minSalary value when setMinSalary is committed', () => {
    const minSalary = 120.01;
    const storeInstance = store();
    expect(storeInstance.state.minSalary).toBe(null);
    storeInstance.commit(mutations.SET_MIN_SALARY, minSalary);
    expect(storeInstance.state.minSalary).toBe(minSalary);
  });

  it('should set maxOffer, value when setMaxOffer is committed', () => {
    const maxOffer = 200.30;
    const storeInstance = store();
    expect(storeInstance.state.maxOffer).toBe(null);
    storeInstance.commit(mutations.SET_MAX_OFFER, maxOffer);
    expect(storeInstance.state.maxOffer).toBe(maxOffer);
  });
});

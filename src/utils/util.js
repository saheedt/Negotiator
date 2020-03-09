const util = {
  pasteHasExponential: (event) => {
    const pasted = (event.originaleventvent || event).clipboardData.getData('text/plain');
    const stringified = JSON.stringify(pasted);
    if (stringified.indexOf(util.invalidInputCharacters[0]) > -1
      || stringified.indexOf(util.invalidInputCharacters[1]) > -1) {
      return true;
    }
    return false;
  },
  keyPressHasExponential: (key) => {
    if (util.invalidInputCharacters.includes(key)) {
      return true;
    }
    return false;
  },
  invalidInputCharacters: ['e', 'E'],
  invalidInputMessage: 'Invalid character(s) detected and removed.',
  mutations: {
    SET_MIN_SALARY: 'setMinSalary',
    SET_MAX_OFFER: 'setMaxOffer',
  },
  negotitationStatus: {
    SUCCESS: 'Success',
    FAILURE: 'Failure',
  },
};
export default util;

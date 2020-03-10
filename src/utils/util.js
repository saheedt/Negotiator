const util = {
  validations: {
    pasteHasExponential: (event) => {
      const pasted = (event.originaleventvent || event).clipboardData.getData('text/plain');
      const stringified = JSON.stringify(pasted);
      if (stringified.indexOf(util.validations.invalidInputCharacters[0]) > -1
        || stringified.indexOf(util.validations.invalidInputCharacters[1]) > -1) {
        return true;
      }
      return false;
    },
    keyPressHasExponential: (key) => {
      if (util.validations.invalidInputCharacters.includes(key)) {
        return true;
      }
      return false;
    },
    invalidInputCharacters: ['e', 'E'],
  },
  messages: {
    invalidInputMessage: 'Invalid character(s) detected and removed.',
  },
  mutations: {
    SET_MIN_SALARY: 'setMinSalary',
    SET_MAX_OFFER: 'setMaxOffer',
  },
  statuses: {
    negotitationStatus: {
      SUCCESS: 'Success',
      FAILURE: 'Failure',
    },
  },
  crud: {
    fetch: async (url, options = {}) => {
      const response = await fetch(url, options);
      return response.json();
    },
  },
  weather: {
    city: 'london',
    units: 'metric',
  },
};
export default util;

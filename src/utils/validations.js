export default {
  hasExponential: (salary) => {
    const invalidCharacters = ["e", "E"];
    return invalidCharacters.includes(salary);
  },
};
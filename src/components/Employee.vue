<template>
  <form class="employee-holder" @submit="submitSalary">
    <Error v-if="foundInvalidInput">{{invalidInputMsg}}</Error>
    <div class="salary-input-holder">
      <Input
        label="Employee minimum salary"
        placeholder="Enter minimum salary"
        type="number"
        v-on:input="setLocalSalary($event)"
        :styleClass="['salary-input']"
        :required='true'
        :handleKeyPress="handleKeyPress"
        :handlePaste="handlePaste"
        :value="localEmployeeSalary"
        v-if="!minSalary"
      />
    </div>
    <div class="salary-submit-btn-holder">
      <Input
        type="submit"
        :styleClass="['submit-button']"
        :disable="disableSubmitButton"
      />
    </div>
  </form>
</template>
<script>
import Input from './Input.vue';
import Error from './Error.vue';
import util from '../utils/util';

const {
  validations: {
    keyPressHasExponential,
    pasteHasExponential,
  },
  messages: {
    invalidInputMessage,
  },
  mutations,
} = util;

export default {
  name: 'Employee',
  components: {
    Input,
    Error,
  },
  data: () => ({
    localEmployeeSalary: null,
    foundInvalidInput: false,
    invalidInputMsg: invalidInputMessage,
  }),
  methods: {
    setLocalSalary(salary) {
      this.localEmployeeSalary = salary;
    },
    submitSalary(event) {
      event.preventDefault();
      this.$store.commit(mutations.SET_MIN_SALARY, this.localEmployeeSalary);
      this.localEmployeeSalary = null;
    },
    handleKeyPress(event) {
      if (keyPressHasExponential(event.key)) {
        event.preventDefault();
        this.foundInvalidInput = true;
        return;
      }
      this.foundInvalidInput = false;
    },
    handlePaste(event) {
      if (pasteHasExponential(event)) {
        event.preventDefault();
        this.foundInvalidInput = true;
      }
    },
  },
  computed: {
    minSalary() {
      return this.$store.state.minSalary;
    },
    disableSubmitButton() {
      return !!this.$store.state.minSalary;
    },
  },
};
</script>
<style scoped lang="scss">
  .employee-holder {
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: $component-background;
  }
</style>

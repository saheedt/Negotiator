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
      />
    </div>
    <div class="salary-submit-btn-holder">
      <Input
        type="submit"
        :styleClass="['submit-button']"
      />
    </div>
  </form>
</template>
<script>
import Input from './Input.vue';
import Error from './Error.vue';
import util from '../utils/util';

export default {
  name: 'Employee',
  components: {
    Input,
    Error,
  },
  data: () => ({
    localEmployeeSalary: null,
    foundInvalidInput: false,
    invalidInputMsg: util.invalidInputMessage,
  }),
  methods: {
    setLocalSalary(salary) {
      this.localEmployeeSalary = salary;
      console.log('employee salary: ', this.localEmployeeSalary);
    },
    submitSalary(event) {
      event.preventDefault();
    },
    handleKeyPress(event) {
      const { keyPressHasExponential } = util;
      if (keyPressHasExponential(event.key)) {
        event.preventDefault();
        this.foundInvalidInput = true;
        return;
      }
      this.foundInvalidInput = false;
    },
    handlePaste(event) {
      const { pasteHasExponential } = util;
      if (pasteHasExponential(event)) {
        event.preventDefault();
        this.foundInvalidInput = true;
      }
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

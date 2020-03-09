<template>
  <form class="employer-holder" @submit="submitOffer">
    <Error v-if="foundInvalidInput">{{invalidInputMsg}}</Error>
    <div class="salary-input-holder">
      <Input
        label="Employer salary offer"
        placeholder="Enter maximum offer"
        type="number"
        v-on:input="setLocalOffer($event)"
        :styleClass="['salary-input']"
        :required='true'
        :handleKeyPress="handleKeyPress"
        :handlePaste="handlePaste"
        :value="employerOffer"
      />
    </div>
    <div class="salary-submit-btn-holder">
      <!-- implement an error notifier -->
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
  name: 'Employer',
  components: {
    Input,
    Error,
  },
  data: () => ({
    employerOffer: null,
    foundInvalidInput: false,
    invalidInputMsg: util.invalidInputMessage,
  }),
  methods: {
    setLocalOffer(offer) {
      this.employerOffer = offer;
      console.log('employer offer: ', this.employerOffer);
    },
    submitOffer(event) {
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
  .employer-holder {
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: $component-background;
  }
</style>

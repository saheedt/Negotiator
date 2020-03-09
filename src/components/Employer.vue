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
        :value="localEmployerOffer"
        v-if="!maxOffer"
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

export default {
  name: 'Employer',
  components: {
    Input,
    Error,
  },
  data: () => ({
    localEmployerOffer: null,
    foundInvalidInput: false,
    invalidInputMsg: util.invalidInputMessage,
  }),
  methods: {
    setLocalOffer(offer) {
      this.localEmployerOffer = offer;
      console.log('employer offer: ', this.localEmployerOffer);
    },
    submitOffer(event) {
      event.preventDefault();
      this.$store.commit('setMaxOffer', this.localEmployerOffer);
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
  computed: {
    maxOffer() {
      return this.$store.state.maxOffer;
    },
    disableSubmitButton() {
      return !!this.$store.state.maxOffer;
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

<template>
  <form class="employer-holder" @submit="submitOffer">
    <div class="salary-input-holder">
      <Input
        label="Employer salary offer"
        placeholder="Enter maximum offer"
        type="number"
        v-on:input="setLocalOffer($event)"
        :styleClass="['salary-input']"
        :required='true'
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

export default {
  name: 'Employer',
  components: {
    Input,
  },
  data: () => ({
    localEmployerOffer: null,
  }),
  methods: {
    setLocalOffer(offer) {
      console.log('incoming offer: ', offer);
      console.log('string Parse: ', JSON.parse(JSON.stringify(offer)));
      this.localEmployerOffer = offer;
      console.log('local offer: ', this.localEmployerOffer);
    },
    submitOffer(event) {
      // implement/style error notification component
      event.preventDefault();
      console.log('submiting...');
      console.log('is nan? : ', Number.isNaN(this.localEmployerOffer));
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

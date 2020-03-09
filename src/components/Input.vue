<template>
  <input
    :aria-label="label"
    :placeholder="placeholder"
    :type="type"
    :value="localValue"
    v-on:input="handleInput"
    v-on:paste="handlePaste"
    v-on:keypress="handleKeyPress"
    :required="required"
    :class="styleClass"
    min="1"
    step="any"
  />
</template>
<script>
export default {
  name: 'Input',
  props: {
    label: String,
    placeholder: String,
    required: Boolean,
    type: String,
    styleClass: Array,
  },
  data: () => ({
    localValue: null,
  }),
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value);
    },
    handleKeyPress(event) {
      const invalid = ['e', 'E'];
      if (invalid.includes(event.key)) {
        event.preventDefault();
      }
    },
    handlePaste(event) {
      const text = (event.originaleventvent || event).clipboardData.getData('text/plain');
      const stringified = JSON.stringify(text);
      if (stringified.indexOf('e') > -1 || stringified.indexOf('E') > -1) {
        console.log('should stop..');
        event.preventDefault();
      }
    },
  },
};
</script>
<style lang="scss">
</style>

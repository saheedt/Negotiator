<template>
  <input
    :aria-label="label"
    :placeholder="placeholder"
    :type="type"
    :value="value"
    v-on:input="handleInput"
    v-on:paste="handlePaste"
    v-on:keypress="handleKeyPress"
    :required="required"
    :class="styleClass"
    min="1"
    step="any"
    :disabled="disable"
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
    handleKeyPress: {
      type: Function,
      default: () => false,
    },
    handlePaste: {
      type: Function,
      default: () => false,
    },
    value: {
      type: [Number, String],
      default: null,
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>
<style lang="scss">
</style>

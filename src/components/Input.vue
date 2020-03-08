<template>
  <input
    :aria-label="label"
    :placeholder="placeholder"
    :type="type"
    :value="localValue"
    v-on:input="$emit('input', $event.target.value)"
    :required="required"
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
  },
  data: () =>({
      localValue: null
  }),
};
</script>
<style lang="scss">
  input {
    height: 5rem;
  	width: 80%;
	}
</style>

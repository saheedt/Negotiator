<template>
  <button @click="handleCLick()" :class="styleClass">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    styleClass: Array,
    handleCLick: Function,
  },
};
</script>
<style scoped lang="scss">
</style>

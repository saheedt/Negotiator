<template>
  <button @click="handleClick()" :class="styleClass">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    styleClass: Array,
    handleClick: Function,
  },
};
</script>
<style scoped lang="scss">
</style>

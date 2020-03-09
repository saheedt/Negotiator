<template>
  <div class="error-msg-box">
    <strong>Error! </strong>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Error',
};
</script>

<style scoped lang="scss">
  .error-msg-box {
    background-color: $error-background;
    border: 1px solid $error-border;
    padding: 10px 20px;
    color: $primary;
  }
</style>

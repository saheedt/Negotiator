<template>
  <div class="error-msg-box">
    <h3>
    <strong>Error! </strong>
    <slot></slot>
    <span role="status" aria-live="polite">
      <strong>Error! </strong>
      <slot></slot>
    </span>
    </h3>
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
    margin-top: 0.5rem;
    span {
      position: absolute;
      left: -10000px;
      overflow: hidden;
    }
  }
</style>

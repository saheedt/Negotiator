<template>
  <header>
    <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  header {
    height: $header-height;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: $primary-box-shadow;
  }
</style>

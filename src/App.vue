<template>
  <main id="app">
    <Header title="Negotiator"/>
    <section class="tab-container">
      <div class="tab-buttons-holder">
        <button
          v-for="tab in tabs"
          v-bind:key="tab.name"
          v-bind:class="['tab-button', {active: activeTab.name === tab.name}]"
          v-on:click="activeTab = tab"
          >
          {{tab.name}}
          </button>
      </div>
      <div class="tab-components-holder"></div>
    </section>
  </main>
</template>

<script>
import Header from './components/Header.vue';

const tabs = [
  { name: 'Employer-Tab' },
  { name: 'Employee-Tab' },
];
export default {
  name: 'App',
  components: {
    Header,
  },
  data: () => ({
    tabs,
    activeTab: tabs[0],
  }),
};
</script>

<style lang="scss">
*, :before, :after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
}
a {
    text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary;
  background-color: $main-background;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
.tab-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
}
.tab-buttons-holder {
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.tab-button {
  width: 49%;
  height: 100%;
}
.tab-button.active {
  background-color: $component-background;
}
.tab-button:hover {
  background-color: $component-background
}
.tab-button:focus {
  outline-color:  $main-background;
}

/** small screen breakpoint */
@media only screen and (max-width: 719px) {
  .tab-container{
    width: 90%;
    min-width: 300px;
  }
}
/** medium screen breakpoint */
@media only screen and (min-width: 720px) and (max-width: 1079px) {
  .tab-container{
    width: 60%;
    min-width: 350px;
  }
}
/** large screen breakpoint */
@media only screen and (min-width: 1080px) and (max-width: 1199px) {
  .tab-container{
    width: 50%;
    max-width: 450px;
  }
}
/** larger screen breakpoint */
@media only screen and (min-width: 1200px) {
  .tab-container{
    max-width: 40%;
  }
}
</style>

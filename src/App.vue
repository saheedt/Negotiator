<template>
  <main id="app">
    <Header title="Negotiator"/>
    <section class="tab-container">
      <div class="tab-buttons-holder">
        <Button
          v-for="tab in tabs"
          v-bind:key="tab.name"
          v-bind:styleClass="['tab-button', {active: activeTab.name === tab.name}]"
          v-bind:handleClick="switchTab(tab)"
          >
          {{tab.name}}
          </Button>
      </div>
      <div class="tab-components-holder">
        <component v-bind:is="activeTab.component"></component>
      </div>
    </section>
    <Modal v-if="showModal" :handleClose="closeModal">
      <h3 slot="header">{{negotiationStatus}}!</h3>
      <div slot="body">Maximum offer was: {{maxOffer}}</div>
      <div slot="body">Minimum expected salary was: {{minSalary}}</div>
    </Modal>
  </main>
</template>

<script>
import Button from './components/Button.vue';
import Employee from './components/Employee.vue';
import Employer from './components/Employer.vue';
import Header from './components/Header.vue';
import Modal from './components/Modal.vue';

import util from './utils/util';

const { mutations, negotitationStatus, redix } = util;
const tabs = [
  {
    name: 'Employer-Tab',
    component: Employer,
  },
  {
    name: 'Employee-Tab',
    component: Employee,
  },
];
export default {
  name: 'App',
  components: {
    Button,
    Header,
    Modal,
  },
  data: () => ({
    tabs,
    activeTab: tabs[0],
  }),
  methods: {
    switchTab(newTab) {
      return () => {
        this.activeTab = newTab;
      };
    },
    closeModal() {
      this.$store.commit(mutations.SET_MIN_SALARY, null);
      this.$store.commit(mutations.SET_MAX_OFFER, null);
    },
  },
  computed: {
    minSalary() {
      return this.$store.state.minSalary;
    },
    maxOffer() {
      return this.$store.state.maxOffer;
    },
    showModal() {
      return this.maxOffer && this.minSalary;
    },
    negotiationStatus() {
      const { FAILURE, SUCCESS } = negotitationStatus;
      if (parseInt(this.minSalary, redix) <= parseInt(this.maxOffer, redix)) {
        return SUCCESS;
      }
      return FAILURE;
    },
  },
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
.tab-components-holder {
  width: 100%;
}
.tab-button {
  width: 49%;
  height: 100%;
  background-color: $button-background;
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
.salary-input-holder {
  width: 80%;
  margin-top: 3rem;
  box-shadow: $primary-box-shadow;
}
.salary-submit-btn-holder {
  width: 60%;
  margin-top: 1rem;
  box-shadow: $primary-box-shadow;
}
.salary-input {
  height: 3rem;
  width: 100%;
  padding: 0 1rem;
}
.submit-button {
  height: 3rem;
  width: 100%;
  background-color: $button-background;
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
  .salary-input-holder {
    margin-top: 10%;
  }
  .salary-input {
    height: 5rem;
  }
  .submit-button {
    height: 5rem;
  }
}
/** large screen breakpoint */
@media only screen and (min-width: 1080px) and (max-width: 1199px) {
  .tab-container{
    width: 50%;
    max-width: 450px;
  }
  .salary-input {
    height: 5rem;
  }
  .submit-button {
    height: 5rem;
  }
  .salary-input-holder {
    margin-top: 15%;
  }
}
/** larger screen breakpoint */
@media only screen and (min-width: 1200px) {
  .tab-container{
    max-width: 40%;
  }
  .salary-input {
    height: 5rem;
  }
  .submit-button {
    height: 5rem;
  }
  .salary-input-holder {
    margin-top: 20%;
  }
}
</style>

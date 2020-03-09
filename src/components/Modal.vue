<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <!-- default footer -->
              <Button :styleClass="['modal-default-button']"
                :handleClick="handleClose">
                OK
              </Button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Modal',
  components: {
    Button,
  },
  props: {
    handleClose: Function,
  },
};
</script>
<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $modal-mask-background;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.modal-container {
  width: 50%;
  min-width: 300px;
  max-width: 450px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: $modal-container-background;
  border-radius: 2px;
  box-shadow: $modal-container-box-shadow;
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  padding: 1rem 0;
}

.modal-header h3 {
  margin-top: 0;
  color: $primary;
}

.modal-body {
  margin: 20px 0;
  padding: 1rem 0;
}

.modal-footer {
  padding: 1rem 0;
}

.modal-default-button {
  float: right;
  height: 3rem;
  width: 5rem;
  background-color: $button-background;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media only screen and (min-width: 1200px) {
  .modal-container {
    max-width: 40%;
  }
}

</style>

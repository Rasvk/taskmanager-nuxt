<template>
  <div class="bottom-bar">
    <div class="modalDiv">
      <base-button :button-class="fillGradient" @click="changeModal"
        >Create Task</base-button
      >
      <transition name="fade" appear>
        <div v-if="showModal" class="modalOverlay" @click="changeModal"></div>
      </transition>

      <transition name="slide" appear>
        <div v-if="showModal" class="modal">
          <create-task></create-task>
        </div>
      </transition>
    </div>
    <div>
      <BaseButton
        v-show="task.id"
        button-class="cancelButton"
        @click="deleteTask"
        >Delete Task</BaseButton
      >
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseButton from './base/BaseButton.vue'
import CreateTask from './CreateTask.vue'
export default {
  components: { BaseButton, CreateTask },
  data() {
    return {
      fillGradient: 'fillGradient',
      cancelButton: 'cancelButton'
    }
  },
  computed: mapState({
    showModal: (state) => state.manager.showModal,
    task: (state) => state.task.task
  }),
  methods: {
    changeModal() {
      this.$store.dispatch(
        'manager/changeModal',
        !this.$store.state.manager.showModal
      )
    },
    deleteTask() {
      this.$store.dispatch('task/deleteTask', this.task)
      this.$forceUpdate()
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  gap: 20px;
  justify-content: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.modalOverlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(28, 183, 255, 1);
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 10px 10px rgb(0, 0, 0, 0.3);
}

.modal:hover {
  box-shadow: 10px 10px rgb(0, 0, 0, 0.5);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-50%) translateY(100vw);
}
</style>

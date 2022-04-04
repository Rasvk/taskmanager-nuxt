<template>
  <div class="task-list">
    <h2>TaskList here</h2>
    <div class="t-list">
      <task-card
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        :data-index="index"
        class="card"
      />
    </div>

    <base-button :button-class="fillGradient" @click="changeModal"
      >Create Task</base-button
    >
    <transition name="fade" appear>
      <div v-if="showModal" class="modalOverlay" @click="changeModal"></div>
    </transition>

    <transition name="slide" appear>
      <div v-if="showModal" class="modal">
        <create-task></create-task>
        <base-button :button-class="fillGradient" @click="changeModal">
          Create Task
        </base-button>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseButton from './base/BaseButton.vue'
import CreateTask from './CreateTask.vue'
import TaskCard from './TaskCard.vue'
export default {
  components: { TaskCard, BaseButton, CreateTask },
  data() {
    return {
      showModal: false,
      fillGradient: 'fillGradient'
    }
  },
  computed: mapState({
    tasks: (state) => state.task.tasks
  }),
  methods: {
    changeModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style scoped>
.task-list {
  box-sizing: border-box;
  height: 100%;
}

.t-list {
  height: 87%;
  overflow-y: scroll;
  overflow-x: hidden;
}
/* width */
::-webkit-scrollbar {
  width: 0.7vw;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #1cb7ff8c;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #1cb7ff;
}
/*
.t-list::-webkit-scrollbar {
  display: none;
} */
.card {
  border-style: inset;
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

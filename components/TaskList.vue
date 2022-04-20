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
  </div>
</template>
<script>
import { mapState } from 'vuex'
import TaskCard from './TaskCard.vue'
export default {
  components: { TaskCard },
  computed: mapState({
    tasks: (state) => state.task.tasks
  })
}
</script>

<style scoped>
.task-list {
  box-sizing: border-box;
  height: 100%;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.t-list {
  height: 650px;
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

.card {
  border-style: inset;
}
</style>

<template>
  <div class="task-list">
    <h2>TaskList here</h2>
    <task-card
      v-for="(task, index) in tasks"
      :key="index"
      :task="task"
      :data-index="index"
      class="card"
    />
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
  border-style: dashed;
}
.card {
  border-style: inset;
}
</style>

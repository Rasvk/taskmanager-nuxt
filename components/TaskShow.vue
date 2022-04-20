<template>
  <div class="show">
    <h2>Taskshow here</h2>
    <h3 v-if="task">{{ task.title }}</h3>
    <h5 v-if="task.deadlineDate">Deadline: {{ task.deadlineDate }}</h5>
    <p v-if="task">{{ task.description }}</p>
    <h6 v-if="task.createdDate">
      Created: {{ task.createdDate }} by {{ task.createdBy.name }}
    </h6>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({ task: (state) => state.task.task })
}
</script>

<style scoped>
.show {
  box-sizing: border-box;
  height: 100%;
}
</style>

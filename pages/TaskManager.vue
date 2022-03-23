<template>
  <div class="t-manager">
    <div class="user">
      <user-profile></user-profile>
    </div>
    <div class="t-list"><task-list></task-list></div>
    <div class="t-show"><task-show></task-show></div>
  </div>
</template>

<script>
import TaskList from '../components/TaskList.vue'
import TaskShow from '../components/TaskShow.vue'
import UserProfile from '../components/UserProfile.vue'
export default {
  components: { UserProfile, TaskList, TaskShow },
  head() {
    return {
      title: 'Task Manager'
    }
  }
}
</script>

<style scoped>
.user {
  height: 100%;
}

.t-manager {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
}

.t-list {
  height: 100%;
}
</style>

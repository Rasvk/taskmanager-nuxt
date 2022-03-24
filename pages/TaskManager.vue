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
import { mapState } from 'vuex'
import TaskList from '../components/TaskList.vue'
import TaskShow from '../components/TaskShow.vue'
import UserProfile from '../components/UserProfile.vue'
export default {
  components: { UserProfile, TaskList, TaskShow },

  async fetch({ store, error }) {
    try {
      await store.dispatch('task/fetchTasks')
      // await store.dispatch('user/fetchUser')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch tasks at this time. Please try again.'
      })
    }
    try {
      await store.dispatch('category/fetchCategories')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch categories at this time. Please try again.'
      })
    }
  },
  head() {
    return {
      title: 'Task Manager'
    }
  },
  computed: mapState({
    tasks: (state) => state.task.tasks,
    categories: (state) => state.category.categories
  })
}
</script>

<style scoped>
.user {
  height: 100%;
}

.t-manager {
  margin-left: 20%;
  width: 70%;
  height: 100%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 2fr;
}

.t-list {
  height: 100%;
}
</style>

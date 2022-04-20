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
  position: absolute;
  top: 5%;
  bottom: 5%;
  left: 0;
  right: 0;
  width: 54%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  border-radius: 50px;
  padding: 50px;
  padding-top: 0px;
  background-color: rgb(255, 255, 255);
  margin: 0 auto;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.t-list {
  height: 100%;
}
</style>

<template>
  <div class="create-task">
    <h1 class="title">Create a new task</h1>
    <form @submit.prevent="CreateTask">
      <base-select
        v-model="task.category"
        label="Select a category"
        :options="categories"
        class="field"
      ></base-select>
      <h3>Name & describe your task</h3>
      <base-input
        v-model="task.title"
        label="Title"
        type="text"
        placeholder="Add a task title"
        class="field"
        required
      ></base-input>

      <base-input
        v-model="task.description"
        label="Description"
        type="text"
        placeholder="Description"
        class="field"
        required
      ></base-input>
      <div class="field">
        <label>Deadline</label>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseInput from './base/BaseInput.vue'
import BaseSelect from './base/BaseSelect.vue'
export default {
  components: { BaseSelect, BaseInput },

  data() {
    return {
      task: this.createFreshTask(),
      disabledDates: {
        to: new Date()
      }
    }
  },
  computed: mapState({
    categories: (state) => state.category.categories
  }),
  methods: {
    currentDate() {
      const date = new Date()
      const currentDate = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`
      return currentDate
    },
    createFreshTask() {
      const user = this.$store.state.user.user
      const date = this.currentDate()
      const id = Math.floor(Math.random() * 10000000)
      return {
        id,
        category: '',
        title: '',
        description: '',
        createdBy: user,
        createdDate: date,
        finnishedDate: '',
        deadlineDate: '',
        completed: false
      }
    }
  }
}
</script>

<style scoped>
.create-task {
  text-align: center;
}
</style>

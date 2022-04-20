<template>
  <div class="create-task">
    <h1 class="title">Create a new task</h1>
    <form @submit.prevent="createTask">
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
        <client-only>
          <vc-date-picker v-model="task.deadlineDate" />
        </client-only>
      </div>
      <div class="buttons">
        <base-button :button-class="fillGradient"> Create Task </base-button>
        <base-button :button-class="cancelButton" @click="changeModal">
          Cancel
        </base-button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseInput from './base/BaseInput.vue'
import BaseSelect from './base/BaseSelect.vue'
import BaseButton from './base/BaseButton.vue'
export default {
  components: { BaseSelect, BaseInput, BaseButton },

  data() {
    return {
      task: this.createFreshTask(),
      selectedDate: null,
      fillGradient: 'fillGradient',
      cancelButton: 'cancelButton'
    }
  },
  computed: mapState({
    categories: (state) => state.category.categories,
    showModal: (state) => state.manager.showModal
  }),
  methods: {
    currentDate() {
      const date = new Date()
      const currentDate = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`
      return currentDate
    },

    formatDate(date) {
      if (date) {
        const formatDate = `${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()}`
        return formatDate
      }
    },

    changeModal() {
      this.$store.dispatch(
        'manager/changeModal',
        !this.$store.state.manager.showModal
      )
    },

    createFreshTask() {
      // console.log('CREATING FRESH TASK')
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
    },

    createTask() {
      this.$store.dispatch('task/createTask', this.task)
      this.$store.dispatch('manager/changeModal', !this.$store.showModal)
      this.$store.dispatch(
        'manager/changeModal',
        !this.$store.state.manager.showModal
      )
    }
  }
}
</script>

<style scoped>
.create-task {
  text-align: center;
}
.buttons {
  display: flex;
  gap: 20px;
  margin: 0 auto;
  justify-content: center;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  align-items: center;
  margin-top: 0;
  font-family: 'Montserrat', sans-serif;
}

input,
label,
select {
  display: flex;
  width: 50%;
  margin: auto;
}

label {
  justify-content: center;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
}
</style>

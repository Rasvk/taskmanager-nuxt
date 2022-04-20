import TaskService from '~/services/TaskService.js'

export const state = () => ({
  task: {},
  tasks: [],
  tasksTotal: 0,
  doneTasks: 0,
  showModal: false
})
// set task
export const mutations = {
  SET_TASKS(state, tasks) {
    state.tasks = tasks
  },
  SET_TASK(state, task) {
    state.task = task
  },
  SET_TASKS_TOTAL(state, tasksTotal) {
    state.tasksTotal = tasksTotal
  },
  SET_DONE_TASKS(state, doneTasks) {
    state.doneTasks = doneTasks
  },
  ADD_TASK(state, task) {
    state.tasks.push(task)
  },
  REMOVE_TASK(state, task) {
    state.task.splice(state.task.indexOf(task), 1)
  }
}
export const actions = {
  /* create a task */
  createTask({ commit }, task) {
    return TaskService.postTask(task)
      .then(() => {
        commit('ADD_TASK', task)
        commit('SET_TASK', task)
      })
      .catch((error) => {
        console.log('There was an error creating your event: ' + error.response)
      })
  },
  /* deleteing a task */
  deleteTask({ commit }, task) {
    return TaskService.deleteTask(task)
      .then((response) => {
        commit('REMOVE_TASK', response.data)
        console.log('TASK REMOVED: ' + task)
        commit('SET_TASK', {})
      })
      .catch((error) => {
        console.log('There was an error deleting your task: ' + error.response)
      })
  },
  /* fetching all tasks */
  fetchTasks({ commit }) {
    return TaskService.getTasks()
      .then((response) => {
        commit('SET_TASKS', response.data)
      })
      .catch((error) => {
        console.log('There was an error fetching tasks: ' + error.response)
      })
  },
  fetchTask({ commit }, id) {
    return TaskService.getTask(id)
      .then((response) => {
        commit('SET_TASKS', response.data)
      })
      .catch((error) => {
        console.log('There was an error fetching the task: ' + error.response)
      })
  },
  /* set task */
  setTask({ commit, getters }, id) {
    const task = getters.getTaskById(id)
    if (task) {
      commit('SET_TASK', task)
    } else {
      console.log('no such Task' + id)
    }
  }
}
export const getters = {
  getTaskById: (state) => (id) => {
    return state.tasks.find((task) => task.id === id)
  }
}

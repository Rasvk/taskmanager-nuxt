export const state = () => ({
  task: {},
  tasks: [],
  tasksTotal: 0,
  doneTasks: 0
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
  createTask({ commit }, task) {},
  /* deleteing a task */
  deleteTask({ commit }, task) {},
  /* fetching all tasks */
  fetchTasks({ commit }) {},
  /* fetch task by id */
  fetchTask({ commit, getters, state }, id) {},
  /* set task */
  setTask({ commit, getters }, id) {}
}
export const getters = {
  getTaskById: (state) => (id) => {
    return state.tasks.find((task) => task.id === id)
  }
}

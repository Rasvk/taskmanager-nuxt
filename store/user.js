import TaskService from '~/services/TaskService.js'
export const state = () => ({
  user: {}
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  }
}

export const actions = {
  fetchUser({ commit }, id) {
    return TaskService.getUser(id).then((response) => {
      commit('SET_USER', response.data)
    })
  }
}

export const getters = {
  getUserById: (state) => (id) => {
    return state.tasks.find((user) => user.id === id)
  }
}

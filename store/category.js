import TaskService from '~/services/TaskService.js'

export const state = () => ({
  categories: [],
  category: {}
})

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_CATEGORY(state, category) {
    state.category = category
  }
}

export const actions = {
  fetchCategories({ commit }) {
    return TaskService.getCategories().then((response) => {
      commit('SET_CATEGORIES', response.data)
    })
  }
}

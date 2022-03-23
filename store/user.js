export const state = () => ({
  user: {}
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  }
}

export const actions = {
  fetchUser({ commit }, id) {}
}

// fetch user

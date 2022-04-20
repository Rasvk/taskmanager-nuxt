export const state = () => ({
  showModal: false
})
export const mutations = {
  SET_MODAL(state, bool) {
    state.showModal = bool
  }
}

export const actions = {
  changeModal({ commit }, bool) {
    commit('SET_MODAL', bool)
  }
}

export const getters = {}

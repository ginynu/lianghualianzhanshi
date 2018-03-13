import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  list: []
}

const mutations = {
  add(state, item) {
    state.list.push(item)
    state.list = Array.from(new Set(state.list));
  },

  remove(state, item) {
    state.list = state.list.filter((i) => {
      return i[0] != item[0]
    })
  }
}

const getters = {
  isExit: (state, getters) =>
    (i) => state.list.some(
      (item) => item[0] == i[0]
    )
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
})

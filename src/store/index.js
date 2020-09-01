import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    settings: {
      starttime: undefined,
      lang: undefined
    }
  },
  getters: {
    savedSettings: (state) => {
      return state.settings;
    }
  },
  mutations: {
    saveSettings: (state, payload) => {
      state.settings = payload;
    }
  },
  actions: {
    saveSettings: ({commit}, payload) => {
      commit('saveSettings', payload)
    }
  },
  modules: {
  }
})

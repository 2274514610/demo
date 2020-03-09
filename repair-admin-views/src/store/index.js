import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userNameData: {
      name: '王小二',
      sex: '男',
      age: '24'
    }
  },
  mutations: {
    'HAND_CHANGE': (state,payload) => {
      state.userNameData = {
        ...state.userNameData,
        name:payload
      }
    }
  },
  actions: {
    hand_change_username: (state,payload) => {
      state.commit('HAND_CHANGE',payload)
    }
  },
  modules: {
  }
})

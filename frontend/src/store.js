import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    view_id: '1'
  },
  mutations: {
    change_view (state, param) {
        state.view_id = param.to
    }
  },
  actions: {

  }
})

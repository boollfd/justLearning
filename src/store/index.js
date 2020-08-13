import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:[]
  },
  mutations: {
    add(state,thing){
      state.cart.push(thing)
    },
    delete(state,thing){
      state.cart=state.cart.filter(p =>{return p!=thing})
    }
  },
  actions: {
  },
  modules: {
  }
})

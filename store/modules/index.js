import Vue from 'vue'
import Vuex from 'vuex'
import city from './city'
import navbar from './navbar'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    city,
    navbar
  },
  actions: {}
})

export default store

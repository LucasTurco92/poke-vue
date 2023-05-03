import { createStore  } from 'vuex'
import { getRandomNumber } from './utils/getRandomNumber'

const store = createStore({
  state() {
    return {
      pokeNumber: getRandomNumber(1,251)
    }
  },
  mutations: {
    setPokeNumber(state, payload) {
        state.pokeNumber = payload
      },
  },
  actions: {
    setPokeNumber(context, payload) {
      context.commit('setPokeNumber', payload);
    },
  },
  getters: {
    pokeNumber(state) {
      return state.pokeNumber
    }
  }
})

export default store

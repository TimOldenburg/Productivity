import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    items: [{
        name: 'Clean room',
        done: false
      },
      {
        name: 'Finish homework',
        done: false
      },
      {
        name: 'Wash dishes',
        done: false
      },
      {
        name: 'Relax',
        done: false
      }
    ]
  },
  getters: {

  },
  mutations: {
    addItem: (state, newItemName) => {
      state.items.push({
        name: newItemName,
        done: false,
      });
    },
    deleteItem: (state, index) => {
      state.items.splice(index, 1);
    }
  }
});

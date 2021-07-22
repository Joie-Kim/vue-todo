import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as mutations from './mutations';

// use: Vue의 플러그인. Vue를 사용하는 모든 컴포넌트에서 사용할 수 있도록 global하게 만들기 위해 사용
Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        // console.log(localStorage.key(i));
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

// store란 변수를 앞으로 다른 파일에서도 사용할 수 있음
export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  getters,
  mutations,
});

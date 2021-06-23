import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  recomNewMusicUrl: [],
  musicLIst: [],
  musics: [],
  musicRecentPlay: [],
};
export default new Vuex.Store({
  state,
  mutations: {
    addCounter(state, payload) {
      payload.count++;
    },
    addToRecentPlay(state, payload) {
      state.musicRecentPlay.push(payload);
    },
  },
  actions: {
    addRecentPlay(context, payload) {
      //1.查找之前数组中是否有该商品
      let oldProduct = context.state.musicRecentPlay.find(
        (item) => item.id === payload.id
      );
      //2.判断oldProduct
      if (oldProduct) {
        context.commit("addCounter", oldProduct);
      } else {
        payload.count = 1;
        context.commit("addToRecentPlay", payload);
      }
    },
  },
  modules: {},
});

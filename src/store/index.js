import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

const state = {
  recomNewMusicUrl: [],
  musicLIst: [],
  musics: [],
  musicRecentPlay: [],
  lyricArr: [],
  currenIndex: 0,
  playing: false,
  usersId: 0,
  userplaylist: [],
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {},
});

export default {
  addCounter(state, payload) {
    payload.count++;
  },
  addToRecentPlay(state, payload) {
    state.musicRecentPlay.push(payload);
  },
  showGeCi(state, payload) {
    state.currenIndex = payload;
  },
};

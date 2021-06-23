export default {
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
};

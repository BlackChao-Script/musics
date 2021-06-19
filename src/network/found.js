import { request } from "./request";

// 获取轮播图数据
export function getfound() {
  return request({
    url: "/homepage/block/page",
  });
}
// 推荐歌单数据
export function getRecomPlaylist(limit) {
  return request({
    url: "/personalized",
    params: {
      limit,
    },
  });
}
// 独家放送数据
export function getSpecial() {
  return request({
    url: "/personalized/privatecontent",
  });
}
//推荐新音乐
export function getNewMusic(limit) {
  return request({
    url: "/personalized/newsong",
    params: {
      limit,
    },
  });
}
// 精品歌单
export function getGoodsPlayList() {
  return request({
    url: "/top/playlist/highquality",
  });
}
// 歌单列表
export function getPlaylist() {
  return request({
    url: "/top/playlist",
  });
}

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
export function getNewMusic() {
  return request({
    url: "/personalized/newsong",
  });
}

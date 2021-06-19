import { request } from "./request";

// 获取歌单
export function getSongListDetail(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id,
    },
  });
}
// 获取歌单音乐
export function getgetSongs(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids,
    },
  });
}

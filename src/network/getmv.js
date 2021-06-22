import { request } from "./request";

// MV数据
export function getMv(mvid) {
  return request({
    url: "/mv/detail",
    params: {
      mvid,
    },
  });
}
// MV播放地址
export function getAddress(id) {
  return request({
    url: "/mv/url",
    params: {
      id,
    },
  });
}
// 热门评论
export function getHotComments(id) {
  return request({
    url: "/comment/new?type=1&sortType=2&pageSize=50",
    params: {
      id,
    },
  });
}

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

import { request } from "./request";

// 获取电台详细
export function getRadioDetail(rid) {
  return request({
    url: "/dj/detail",
    params: {
      rid,
    },
  });
}
// 获取电台节目
export function getRadio(rid) {
  return request({
    url: "/dj/program?limit=40",
    params: {
      rid,
    },
  });
}

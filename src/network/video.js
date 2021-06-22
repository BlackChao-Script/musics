import { request } from "./request";

// 最新MV
export function getNewsMV() {
  return request({
    url: "/mv/first?limit=10&area=欧美",
  });
}
// 推荐MV
export function getRecommend() {
  return request({
    url: "/personalized/mv",
  });
}
// 网易云出品MV
export function getCloudMake() {
  return request({
    url: "/mv/exclusive/rcmd?limit=9",
  });
}
// MV排行
export function getMVRanking(area) {
  return request({
    url: "/top/mv?limit=50",
    params: {
      area,
    },
  });
}


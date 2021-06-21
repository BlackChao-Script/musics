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

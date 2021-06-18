import { request } from "../request";

export function getSearch(keywords) {
  return request({
    //  调用此接口 , 可获取默认搜索关键词
    url: "/search",
    params:{
      keywords
    }
  });
}

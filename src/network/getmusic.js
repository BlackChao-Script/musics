import { request } from "./request";

export function getmusic(id) {
  return request({
    url: "/song/url",
    params:{
      id
    }
  });
}

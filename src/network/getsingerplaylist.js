import { request } from "./request";

export function getSingerPlaylist(id) {
  return request({
    url: "/artists",
    params: {
      id,
    },
  });
}

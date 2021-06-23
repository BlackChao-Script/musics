import { request } from "./request";

// 音乐地址
export function getmusic(id) {
  return request({
    url: "/song/url",
    params: {
      id,
    },
  });
}
// 音乐歌词
export function getLyrics(id) {
  return request({
    url: "/lyric",
    params: {
      id,
    },
  });
}

import Vue from "vue";
import VueRouter from "vue-router";
// 路由懒加载
const found = () => import("@/views/found/found");
// found子路由
const recommended = () => import("@/views/found/recommended/recommended");
const playlist = () => import("@/views/found/playlist/playlist");
const radio = () => import("@/views/found/radio/radio");
const singer = () => import("@/views/found/singer/singer");
const newmusics = () => import("@/views/found/newmusics/newmusics");

const videos = () => import("@/views/video/videos");
const songlistdetail = () => import("@/views/songlistdetail/songlistdetail");
const musices = () => import("@/views/musics/musices");
const singerdetailed = () => import("@/views/singerdetailed/singerdetailed");
const videodetailed = () => import("@/views/videodetailed/videodetailed");
const recentplay = () => import("@/views/recentplay/recentplay");
const songsdetail = () => import("@/views/songsdetail/songsdetail");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/found",
  },
  {
    path: "/found",
    component: found,
    meta: {
      keepAlive: true, // 需要缓存
    },
    children: [
      {
        path: "",
        redirect: "recom",
      },
      {
        path: "recom",
        component: recommended,
        meta: {
          keepAlive: true, // 需要缓存
        },
      },
      {
        path: "playlist",
        component: playlist,
        meta: {
          keepAlive: true, // 需要缓存
        },
      },
      {
        path: "radio",
        component: radio,
        meta: {
          keepAlive: true, // 需要缓存
        },
      },
      {
        path: "singer",
        component: singer,
        meta: {
          keepAlive: true, // 需要缓存
        },
      },
      {
        path: "newmusics",
        component: newmusics,
        meta: {
          keepAlive: true, // 需要缓存
        },
      },
    ],
  },
  {
    path: "/videos",
    component: videos,
    meta: {
      keepAlive: true, // 需要缓存
    },
  },
  {
    path: "/songlistdetail/:id",
    component: songlistdetail,
    meta: {
      keepAlive: false, // 不需要缓存
    },
  },
  {
    path: "/musices",
    component: musices,
    meta: {
      keepAlive: true, // 需要缓存
    },
  },
  {
    path: "/singerdetailed/:id",
    component: singerdetailed,
    meta: {
      keepAlive: false, // 不需要缓存
    },
  },
  {
    path: "/videodetailed/:id",
    component: videodetailed,
    meta: {
      keepAlive: false, // 不需要缓存
    },
  },
  {
    path: "/recentplay",
    component: recentplay,
    meta: {
      keepAlive: true, // 需要缓存
    },
  },
  {
    path: "/songsdetail/:id",
    component: songsdetail,
    meta: {
      keepAlive: false, // 不需要缓存
    },
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;

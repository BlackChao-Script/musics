import Vue from "vue";
import VueRouter from "vue-router";

const found = () => import("@/views/found/found");
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

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/found",
  },
  {
    path: "/found",
    component: found,
    children: [
      {
        path: "",
        redirect: "recom",
      },
      {
        path: "recom",
        component: recommended,
      },
      {
        path: "playlist",
        component: playlist,
      },
      {
        path: "radio",
        component: radio,
      },
      {
        path: "singer",
        component: singer,
      },
      {
        path: "newmusics",
        component: newmusics,
      },
    ],
  },
  {
    path: "/videos",
    component: videos,
  },
  {
    path: "/songlistdetail/:id",
    component: songlistdetail,
  },
  {
    path: "/musices",
    component: musices,
  },
  {
    path: "/singerdetailed/:id",
    component: singerdetailed,
  },
  {
    path: "/videodetailed/:id",
    component: videodetailed,
  },
  {
    path: "/recentplay",
    component: recentplay,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;

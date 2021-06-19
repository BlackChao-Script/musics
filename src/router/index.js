import Vue from "vue";
import VueRouter from "vue-router";

const found = () => import("@/views/found/found");
const recommended = () => import("@/views/found/recommended/recommended");
const playlist = () => import("@/views/found/playlist/playlist");
const videos = () => import("@/views/video/videos");
const songlistdetail = () => import("@/views/songlistdetail/songlistdetail");
const musices = () => import("@/views/musics/musices");

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
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;

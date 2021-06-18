import Vue from "vue";
import VueRouter from "vue-router";

const found = () => import("@/views/found/found");
const recommended = () => import("@/views/found/recommended/recommended");
const playlist = () => import("@/views/found/playlist/playlist");
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
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;

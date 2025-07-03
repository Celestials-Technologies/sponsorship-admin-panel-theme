import type { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/home/HomeView.vue"),
  },

  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/pages/dashboard"),
  },

  {
    path: "/balance",
    name: "balance",
    component: () => import("@/pages/balance"),
  },

  {
    path: "/analytics",
    name: "analytics",
    component: () => import("@/pages/analytics"),
  },
  {
    path: "/wallet",
    name: "wallet",
    component: () => import("@/pages/wallet"),
  },

  {
    path: "/signup",
    name: "signup",
    component: () => import("@/pages/signup/Signup.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/features/login/logIn.vue"),
  },
];

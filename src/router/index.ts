import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"), // lazy-loaded
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/DashBoard.vue"), // lazy-loaded
  },
  {
    path: "/balance",
    name: "/balance",
    component: () => import("../views/Balance.vue"), // lazy-loaded
  },
  // {
  //   path: "/analytics",
  //   name: "/analytics",
  //   component: () => import("../views/AnalyticsView.vue"), // lazy-loaded
  // },
  // {
  //   path: "/wallet",
  //   name: "/wallet",
  //   component: () => import("../views/walletView.vue"), // lazy-loaded
  // },
  // {
  //   path: "/asset-details",
  //   name: "/asset-details",
  //   component: () => import("../views/assetDetails.vue"), // lazy-loaded
  // },
  // {
  //   path: "/new-asset",
  //   name: "/new-asset",
  //   component: () => import("../views/newAsset.vue"), // lazy-loaded
  // },
  // {
  //   path: "/setting",
  //   name: "/setting",
  //   component: () => import("../views/settingsView.vue"), // lazy-loaded
  // },
  // {
  //   path: "/password",
  //   name: "/password",
  //   component: () => import("../views/passwordView.vue"), // lazy-loaded
  // },
  // {
  //   path: "/billing",
  //   name: "/billing",
  //   component: () => import("../views/BillingViews.vue"), // lazy-loaded
  // },
  // {
  //   path: "/notification",
  //   name: "/notification",
  //   component: () => import("../views/notificationView.vue"), // lazy-loaded
  // },
  // {
  //   path: "/team",
  //   name: "/team",
  //   component: () => import("../views/teamView.vue"), // lazy-loaded
  // },
  // {
  //   path: "/login",
  //   name: "/login",
  //   component: () => import("../views/loginView.vue"), // lazy-loaded
  // },
  // {
  //   path: "/signup",
  //   name: "/signup",
  //   component: () => import("../views/signUpView.vue"), // lazy-loaded
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

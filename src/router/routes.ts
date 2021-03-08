import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "auth/login", component: () => import("pages/auth/Login.vue") },
      { path: "auth/forget", component: () => import("pages/auth/ForgetPassword.vue") },
      { path: "auth/register", component: () => import("pages/auth/Register.vue") },
      { path: "profile", component: () => import("pages/Profile.vue") },
      { path: "firestore", component: () => import("src/pages/FirestoreDemo.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;

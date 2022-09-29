import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    meta: { title: "Home" },
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    meta: { title: "About" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    meta: { title: "Contact" },
    component: ContactView,
  },
  {
    path: "/design",
    name: "design",
    meta: { title: "Design" },
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/DesignView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = to.meta.title;
  next();
});

export default router;

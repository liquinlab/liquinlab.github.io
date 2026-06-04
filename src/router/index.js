import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import PeopleView from "../views/PeopleView.vue";
import PublicationsView from "../views/PublicationsView.vue";
import JoinView from "../views/JoinView.vue";
import ContactView from "../views/ContactView.vue";
import ParentView from "../views/ForParents.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      beforeEnter: (to, from, next) => {
        if (sessionStorage.getItem("redirect") !== null) {
          const redirect = sessionStorage.redirect;
          delete sessionStorage.redirect;
          next(redirect);
        } else {
          next();
        }
      },
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/people",
      name: "people",
      component: PeopleView,
    },
    {
      path: "/publications",
      name: "publications",
      component: PublicationsView,
    },
    {
      path: "/join",
      name: "join",
      component: JoinView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/forparents",
      name: "parents",
      component: ParentView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;

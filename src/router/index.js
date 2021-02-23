import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Project from "../views/Project.vue";
import CreateProject from '../views/CreateProject.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/project/:id",
    name: "Project",
    component: Project,
    props: true
  },
  {
    path: "/create",
    name: "CreateProject",
    component: CreateProject,

  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

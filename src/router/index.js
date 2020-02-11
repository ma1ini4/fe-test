import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/auth/Login";
import ReportsList from "../views/reports/ReportsList";
import CreateReport from "../views/reports/CreateReport";
import EditReport from "../views/reports/EditReport";
import store from "../store";

Vue.use(VueRouter);

function requireAuth(to, from, next) {
  console.log(store.getters.user);
  store.getters.user
    ? next()
    : next({
        name: "Login"
      });
}

const routes = [
  {
    path: "/",
    name: "ReportsList",
    component: ReportsList,
    beforeEach: requireAuth
  },
  {
    path: "/create/reports-list",
    name: "CreateReport",
    component: CreateReport,
    beforeEach: requireAuth
  },
  {
    path: "/create/edit-report",
    name: "EditReport",
    component: EditReport,
    beforeEach: requireAuth
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

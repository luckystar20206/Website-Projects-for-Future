import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import Login from "@/views/Login";
import Register from "@/views/Register";
import firebase from "firebase/app";
import "firebase/auth";
import SoFunktionierts from "@/views/SoFunktionierts";
import NeuesProjekt from "@/views/NeuesProjekt";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/Register",
    name: "Register",
    component: Register
  },
  {
    path: "/NeuesProjekt",
    name: "NeuesProjekt",
    component: NeuesProjekt,
    meta: {requiresAuth: true}
  },
  {
    path: "/SoFunktionierts",
    name: "SoFunktionierts",
    component: SoFunktionierts,
    meta:{transitionName: 'slide'},
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  console.log("isauthenticated", isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    next("/Login");
  } else {
    next();
  }
});
Vue.use(VueRouter)

export default router

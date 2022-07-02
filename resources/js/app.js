import "./bootstrap";
import { createApp } from "vue/dist/vue.esm-bundler.js";
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue";

// 1. Define route components.
// These can be imported from other files
import Login from "./components/LoginForm.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Tasks from "./components/Tasks.vue";
import Profile from "./components/Profile.vue";
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Hero, children:[
    { path: '/', component: Signup },
    { path: '/log', component: Login },
 ] },
  { path: '/about', component: About },
  { path: '/tasks', component: Tasks },
  { path: '/profile', component: Profile },
  { path: '/login', component: Login },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

//export default router;
createApp(App).use(router).mount("#app");

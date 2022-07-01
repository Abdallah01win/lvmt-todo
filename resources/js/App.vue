<template>
  <Navigation />
  <!-- <Hero /> -->
  <router-view />
  <Footer />
</template>

<script>
//With Vite you dont Hve to import components anymore

import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
import Hero from "./components/Hero.vue";
export default {
  components: {
    Navigation,
    Hero,
    Footer,
  },
};
</script>

<template>
  <section class="text-gray-600 body-font dark:text-slate-50 dark:bg-zinc-900">
    <div class="container px-5 py-16 mx-auto flex flex-wrap items-center">
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 class="title-font font-medium text-3xl text-gray-900 dark:text-slate-100">
          Slow-carb next level shoindcgoitch ethical authentic, poko scenester
        </h1>
        <p class="leading-relaxed mt-4">
          Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock
          starladder roathse. Craies vegan tousled etsy austin.
        </p>
      </div>
      <SignupForm />
      <!-- <LogInForm /> -->
    </div>
  </section>
</template>

<script>
import SignupForm from "./SignupForm.vue";
import LogInForm from "./LogInForm.vue";

export default {
  components: {
    SignupForm,
    LogInForm,
  },
};
</script>

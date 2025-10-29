<template>
  <section class="relative bg-primary text-white overflow-hidden">
    <!-- Decorative circle -->
    <div
      class="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-lg"
    ></div>

    <!-- Hero Content -->
    <div class="container mx-auto max-w-screen-xl text-center py-24 px-6 relative z-10">
      <h1 class="text-5xl font-bold mb-6">Ticket Manager</h1>
      <p class="text-lg mb-8">
        Simplify your support workflow — create, track, and resolve tickets effortlessly.
      </p>
      <div class="space-x-4">
        <router-link
          to="/auth/login"
          class="bg-white text-primary font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Login
        </router-link>
        <router-link
          to="/auth/signup"
          class="bg-secondary text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-secondary/80 transition"
        >
          Get Started
        </router-link>
      </div>
    </div>

    <!-- Wave SVG -->
    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        class="relative block w-[calc(200%+1.3px)] h-[150px]"
      >
        <path
          d="M321.39,56.44C184.16,65.5,85.22,99.76,0,120H1200V0C1071.4,22.36,958.4,62.33,808,67.25,664.12,71.94,559.34,47.12,321.39,56.44Z"
          fill="white"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
// No logic needed here yet
</script>

<style scoped>
.bg-primary {
  background-color: #2563eb; /* same as your React app’s blue */
}
.bg-secondary {
  background-color: #16a34a; /* green accent */
}
</style>

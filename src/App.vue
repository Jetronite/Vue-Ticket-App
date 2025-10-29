<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default { components: { Navbar, Footer } }
</script>

<style>
/* Global spacing & container */
:root { --max-w:1440px; }
#app { background:#f6f8fb; min-height:100vh; color:#0f172a; font-family:Inter, system-ui, -apple-system, "Segoe UI", Roboto; }
.container { max-width:var(--max-w); margin:0 auto; padding:20px; }
.card { background:#fff; border-radius:12px; box-shadow:0 10px 30px rgba(11,19,43,0.06); }
</style>

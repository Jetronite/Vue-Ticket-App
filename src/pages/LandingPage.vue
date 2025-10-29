<template>
  <div class="landing">
    <HeroSection />
    <!-- You can add Feature boxes or About section below -->
    <FooterSection />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.hero {
  position: relative;
  text-align: center;
  padding: 6rem 1rem;
  background: linear-gradient(135deg, #eef4ff, #fff);
}
.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.btn {
  background: #007bff;
  color: #fff;
  margin: 0 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
}
.btn-outline {
  border: 2px solid #007bff;
  background: transparent;
  color: #007bff;
}
</style>

<template>
  <header class="site-header container" role="banner">
    <div class="brand">
      <a href="/" aria-label="TicketApp Home">TicketApp</a>
    </div>

    <nav class="nav" aria-label="Main navigation">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/dashboard" class="nav-link" v-if="isAuth">Dashboard</router-link>
      <router-link to="/tickets" class="nav-link" v-if="isAuth">Tickets</router-link>
      <router-link to="/auth/login" class="nav-link" v-if="!isAuth">Login</router-link>
      <button class="btn-logout" v-if="isAuth" @click="logout">Logout</button>

      <button class="mobile-toggle" @click="open = !open" aria-expanded="false" aria-controls="mobileNav">
        ☰
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return { open: false }
  },
  computed: {
    isAuth() {
      return !!localStorage.getItem('ticketapp_session')
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('ticketapp_session')
      // keep tickets in storage, just clear session
      this.$router.push('/auth/login')
    }
  }
}
</script>

<style scoped>
.site-header{ display:flex; align-items:center; justify-content:space-between; padding:12px 0; }
.brand a{ font-weight:700; font-size:1.15rem; color:#0b2545; text-decoration:none; }
.nav { display:flex; gap:12px; align-items:center; }
.nav-link { text-decoration:none; color:#0b2545; padding:6px 10px; border-radius:8px; }
.nav-link:focus { outline:2px solid #cfe0ff; }
.btn-logout { background:#ef4444; color:white; border:none; padding:6px 10px; border-radius:8px; cursor:pointer; }
.mobile-toggle { display:none; background:transparent; border:1px solid #e6eefc; padding:6px; border-radius:6px; }
@media(max-width:720px){ .nav-link { display:none } .mobile-toggle { display:inline-block } }
</style>

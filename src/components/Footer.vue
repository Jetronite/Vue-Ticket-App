<template>
  <footer class="site-footer container" role="contentinfo">
    <div class="footer-inner card">
      <div>
        <strong>TicketApp</strong>
        <p class="muted">Ship tickets, not chaos.</p>
      </div>
      <div class="links">
        <a href="#" @click.prevent>Privacy</a>
        <a href="#" @click.prevent>Docs</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default { name: 'Footer' }
</script>

<style scoped>
.site-footer { margin-top: 32px; }
.footer-inner { display:flex; justify-content:space-between; align-items:center; padding:14px; }
.links a{ margin-left:12px; color:#0b2545; text-decoration:none; }
.muted{ color:#475569; margin:4px 0 0; font-size:0.9rem; }
</style>

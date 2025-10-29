<template>
  <article class="ticket-card card" :class="ticket.status" :aria-labelledby="'t-'+ticket.id">
    <div class="ticket-head">
      <h3 :id="'t-'+ticket.id">{{ ticket.title }}</h3>
      <span class="pill" :class="ticket.status">{{ prettyStatus }}</span>
    </div>
    <p class="desc" v-if="ticket.description">{{ ticket.description }}</p>
    <div class="actions">
      <button @click="$emit('edit', ticket)" aria-label="Edit ticket">Edit</button>
      <button @click="$emit('delete', ticket.id)" aria-label="Delete ticket">Delete</button>
    </div>
  </article>
</template>

<script>
export default {
  name: 'TicketCard',
  props: { ticket: { type: Object, required: true } },
  computed: {
    prettyStatus() {
      return this.ticket.status.replace('_', ' ')
    }
  }
}
</script>

<style scoped>
.ticket-card { padding:14px; display:flex; flex-direction:column; gap:10px; }
.ticket-head { display:flex; justify-content:space-between; align-items:start; gap:10px; }
.pill { padding:6px 10px; border-radius:999px; color:#fff; font-weight:600; font-size:12px; text-transform:capitalize; }
.pill.open { background:#16a34a; }     /* green */
.pill.in_progress { background:#d97706; } /* amber */
.pill.closed { background:#6b7280; }   /* gray */
.actions { display:flex; gap:8px; margin-top:6px; }
.actions button { background:transparent; border:1px solid #e6eefc; padding:6px 10px; border-radius:8px; cursor:pointer; }
.ticket-card.open { border-left:4px solid #16a34a; }
.ticket-card.in_progress { border-left:4px solid #d97706; }
.ticket-card.closed { border-left:4px solid #6b7280; }
.desc { color:#475569; margin:0; }
</style>

<template>
  <div class="container">
    <h2>Manage Tickets</h2>

    <form @submit.prevent="addOrUpdate">
      <input v-model="form.title" placeholder="Title" required />
      <textarea v-model="form.description" placeholder="Description"></textarea>
      <select v-model="form.status" required>
        <option disabled value="">Select status</option>
        <option value="open">Open</option>
        <option value="in_progress">In Progress</option>
        <option value="closed">Closed</option>
      </select>
      <button type="submit">{{ editMode ? 'Update' : 'Create' }}</button>
    </form>

    <div class="tickets">
      <div
        v-for="ticket in store.tickets"
        :key="ticket.id"
        class="ticket-card"
        :class="ticket.status"
      >
        <h4>{{ ticket.title }}</h4>
        <p>{{ ticket.description }}</p>
        <span class="status">{{ ticket.status }}</span>
        <div>
          <button @click="edit(ticket)">Edit</button>
          <button @click="del(ticket.id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useTicketStore } from '../store/ticket.js'

const store = useTicketStore()
const form = reactive({ id: null, title: '', description: '', status: '' })
const editMode = ref(false)

function addOrUpdate() {
  if (!form.title || !form.status) return alert('Title and Status are required')
  if (editMode.value) store.update({ ...form })
  else store.add({ ...form, id: Date.now() })
  Object.assign(form, { id: null, title: '', description: '', status: '' })
  editMode.value = false
}

function edit(ticket) {
  Object.assign(form, ticket)
  editMode.value = true
}

function del(id) {
  if (confirm('Delete this ticket?')) store.delete(id)
}
</script>

<style scoped>
.container { max-width: 900px; margin: 2rem auto; }
.ticket-card {
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  margin-bottom: 1rem;
}
.open { border-left: 5px solid green; }
.in_progress { border-left: 5px solid orange; }
.closed { border-left: 5px solid gray; }
</style>

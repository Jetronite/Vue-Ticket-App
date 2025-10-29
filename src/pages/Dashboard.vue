<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Top navigation bar -->
    <nav class="bg-white shadow py-4">
      <div class="max-w-screen-xl mx-auto flex justify-between items-center px-6">
        <h1 class="text-2xl font-bold text-blue-600">Ticket Manager</h1>
        <div class="flex items-center space-x-6">
          <router-link
            to="/tickets"
            class="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Manage Tickets
          </router-link>
          <button
            @click="logout"
            class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>

    <!-- Dashboard content -->
    <main class="max-w-screen-xl mx-auto px-6 py-12">
      <h2 class="text-3xl font-semibold text-gray-800 mb-8">Dashboard Overview</h2>

      <!-- Stats cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="p-6 bg-white shadow rounded-2xl border-t-4 border-blue-500">
          <h3 class="text-lg font-semibold text-gray-700">Total Tickets</h3>
          <p class="text-3xl font-bold text-gray-900 mt-2">{{ stats.total }}</p>
        </div>

        <div class="p-6 bg-white shadow rounded-2xl border-t-4 border-green-500">
          <h3 class="text-lg font-semibold text-gray-700">Open Tickets</h3>
          <p class="text-3xl font-bold text-gray-900 mt-2">{{ stats.open }}</p>
        </div>

        <div class="p-6 bg-white shadow rounded-2xl border-t-4 border-gray-500">
          <h3 class="text-lg font-semibold text-gray-700">Resolved Tickets</h3>
          <p class="text-3xl font-bold text-gray-900 mt-2">{{ stats.closed }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const stats = reactive({
  total: 0,
  open: 0,
  closed: 0
})

onMounted(() => {
  const session = localStorage.getItem('ticketapp_session')
  if (!session) {
    router.push('/auth/login')
    return
  }

  const tickets = JSON.parse(localStorage.getItem('tickets') || '[]')
  stats.total = tickets.length
  stats.open = tickets.filter(t => t.status === 'open').length
  stats.closed = tickets.filter(t => t.status === 'closed').length
})

function logout() {
  localStorage.removeItem('ticketapp_session')
  router.push('/')
}
</script>

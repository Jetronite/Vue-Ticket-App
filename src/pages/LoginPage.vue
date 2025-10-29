<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div class="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
      <h2 class="text-3xl font-semibold text-center mb-6 text-gray-800">
        Login to Ticket Manager
      </h2>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            v-model="email"
            type="email"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            v-model="password"
            type="password"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
            required
          />
        </div>

        <p v-if="errorMessage" class="text-red-600 text-sm">{{ errorMessage }}</p>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>

        <p class="text-center text-sm mt-4">
          Don’t have an account?
          <router-link to="/auth/signup" class="text-blue-600 font-semibold hover:underline">
            Create one
          </router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()

function handleLogin() {
  const storedUsers = JSON.parse(localStorage.getItem('ticketapp_users') || '[]')
  const user = storedUsers.find(u => u.email === email.value && u.password === password.value)

  if (!user) {
    errorMessage.value = 'Invalid credentials. Please try again.'
    return
  }

  localStorage.setItem('ticketapp_session', JSON.stringify({ email: user.email }))
  router.push('/dashboard')
}
</script>

import { defineStore } from 'pinia'

export const useTicketStore = defineStore('tickets', {
  state: () => ({
    tickets: JSON.parse(localStorage.getItem('tickets') || '[]')
  }),
  actions: {
    save() {
      localStorage.setItem('tickets', JSON.stringify(this.tickets))
    },
    add(ticket) {
      this.tickets.push(ticket)
      this.save()
    },
    update(updated) {
      const i = this.tickets.findIndex(t => t.id === updated.id)
      if (i !== -1) this.tickets[i] = updated
      this.save()
    },
    delete(id) {
      this.tickets = this.tickets.filter(t => t.id !== id)
      this.save()
    }
  }
})

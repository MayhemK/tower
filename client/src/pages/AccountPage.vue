<script setup>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { ticketService } from '@/services/TicketService.js';
import { Pop } from '@/utils/Pop.js';
import EventCard from '@/components/EventCard.vue';

onMounted(() => {
  getMyTickets()
})

const ticketEvents = computed(() => AppState.ticketEvents)
const account = computed(() => AppState.account)

async function getMyTickets() {
  try {
    await ticketService.getMyTickets()
  }
  catch (error) {
    Pop.error(error);
  }
}
async function deleteTicket(ticketId) {
  try {
    const confirmed = await Pop.confirm("Are you sure you no longer want to attend?")
    if (!confirmed) {
      return
    }
    await ticketService.deleteTicket(ticketId)
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>

<template>
  <div class="about text-center">
    <div v-if="account">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-6">
            <h1>Welcome {{ account.name }}</h1>
            <img class="rounded" :src="account.picture" alt="" />
            <p>{{ account.email }}</p>
            <p>{{ ticketEvents.length }} events you are attending</p>
            <div v-for="ticket in ticketEvents" :key="ticket.id">
              <div class="card">
                <div class="component">
                  <RouterLink :to="{ name: 'EventDetails', params: { eventId: ticket.eventId } }"
                    :title="`Go to the ${ticket.event.name} page`">
                    <div class="card">
                      <img :src="ticket.event.coverImg" alt="">
                      <div class="fw-bold ">{{ ticket.event.name }}</div>
                      <div class="text-capitalize">Type: {{ ticket.event.type }}</div>
                      <div>{{ new Date(ticket.event.startDate).toLocaleDateString() }}</div>
                    </div>
                  </RouterLink>
                </div>
              </div>
              <button @click="deleteTicket(ticket.id)" class="btn btn-danger">Leave Event</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  width: 100%;
  height: 20dvh;
  object-fit: cover;
}
</style>

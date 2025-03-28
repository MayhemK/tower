<script setup>
import { AppState } from '@/AppState.js'
import { eventService } from '@/services/EventService.js'
import { Pop } from '@/utils/Pop.js'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const event = computed(() => AppState.activeEvent)
const route = useRoute()
onMounted(() => {
  getEventById()
})
async function cancelEvent() {
  try {
    const confirmed = await Pop.confirm(`Are you sure you want to cancel ${event.value.name}?`)
    if (!confirmed) {
      return
    }
    const eventId = route.params.eventId
    await eventService.cancelEvent(eventId)
  }
  catch (error) {
    Pop.error(error);
  }
}

async function getEventById() {
  try {
    const eventId = route.params.eventId
    await eventService.getEventById(eventId)

  }
  catch (error) {
    Pop.error('ERROR IS HERE', error);

  }
}
</script>


<template>
  <div v-if="event">
    <section class="container">
      <div class="row">
        <div class="col-12">
          <img :src="event.coverImg" alt="">
        </div>
        <div class="container">
          <div class="row">
            <div class="col-8">
              <div>
                <div class="text-end">
                  <buton class="btn btn-secondary"></buton>
                </div>
                <div>{{ event.name }} {{ event.type }}</div>
                <div>{{ event.description }}</div>
                <div v-if="event.isCanceled"> This event has been Cancelled</div>
                <div v-else>Start Date: <p>{{ new Date(event.startDate).toLocaleString() }}</p>
                </div>
                <div>Location: <p>{{ event.location }}</p>
                </div>
              </div>
              <div>
                <div>See what folks are saying...</div>
                <div class="card">
                  <div>join the conversation</div>
                  <div>TEXT BOX</div>
                  <button>BUTTON</button>
                  <div>COMMENT COMP</div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card">
                <div>Interested in going?</div>
                <div>Grab a ticket!</div>
                <button>Attend</button>
              </div>
              <div>X spots left</div>
              <div>
                <div>Attendees</div>
                <div class="card">
                  <div class="container">
                    <div class="row">
                      <div class="col-12">
                        <div>v-for attendees</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else>
    <h1>Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
  </div>
</template>


<style lang="scss" scoped></style>
<script setup>
import { AppState } from '@/AppState.js'
import CommentComp from '@/components/CommentComp.vue'
import { commentService } from '@/services/CommentService.js'
import { eventService } from '@/services/EventService.js'
import { ticketService } from '@/services/TicketService.js'
import { Pop } from '@/utils/Pop.js'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const account = computed(() => AppState.account)
const event = computed(() => AppState.activeEvent)
const route = useRoute()
const ticketHolders = computed(() => AppState.ticketHolders)
const replies = computed(() => AppState.replies)
onMounted(() => {
  getEventById()
  getTicketsByEventId()
  getCommentsByEventId()
})
async function cancelEvent() {
  try {
    const confirmed = await Pop.confirm(`Are you sure you want to ${event.value.isCanceled ? 'reschedule' : 'cancel'} ${event.value.name}?`)
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

async function getTicketsByEventId() {
  try {
    const eventId = route.params.eventId
    await ticketService.getTicketsByEventId(eventId)
  } catch (error) {
    Pop.error('this error', error)
  }
}

async function createTicket() {
  try {
    const ticketData = { eventId: route.params.eventId }
    await ticketService.createTicket(ticketData)
  }
  catch (error) {
    Pop.error('create error', error);
  }
}

async function getCommentsByEventId() {
  try {
    const eventId = route.params.eventId
    await commentService.getCommentsByEventId(eventId)
  }
  catch (error) {
    Pop.error(error);
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
                  <div v-if="event.isCanceled">
                    <button @click="cancelEvent()" v-if="event.creatorId == account?.id"
                      class="btn btn-warning">Reschedule</button>
                  </div>
                  <div v-else>
                    <button @click="cancelEvent()" v-if="event.creatorId == account?.id"
                      class="btn btn-warning">Cancel</button>
                  </div>
                </div>
                <div class="fw-bold fs-3">{{ event.name }} <span class="fw-normal fs-5 ">{{ event.type }}</span></div>
                <div class="fs-4">{{ event.description }}</div>
                <div v-if="event.isCanceled"
                  class=" text-center my-5 text-danger text-decoration-underline fw-bold fs-2">
                  This
                  event has
                  been Cancelled</div>
                <div v-else class="fw-bold">Start Date: <p class="fw-normal">{{ new
                  Date(event.startDate).toLocaleString() }}</p>
                  <div class="fw-bold fs-4">Location: <p class="fw-normal fs-5">{{ event.location }}</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="mt-5">See what folks are saying...</div>
                <div class="card">
                  <div>join the conversation</div>
                  <div>TEXT BOX</div>
                  <button>BUTTON</button>
                  <div>Replies: {{ }}
                  </div>
                  <div v-for="reply in replies" :key="reply.id">
                    <CommentComp :reply="reply" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card">
                <div> {{ event.ticketCount }} of {{ event.capacity }}</div>
                <div>Interested in going?</div>
                <div>Grab a ticket!</div>
                <button @click="createTicket()" class="btn btn-primary-outline">Attend</button>
              </div>
              <div>X spots left</div>
              <div>
                <div>Attendees</div>
                <div class="card">
                  <div class="container">
                    <div class="row">
                      <div class="col-12">
                        <hr>
                        <div v-for="ticket in ticketHolders" :key="ticket.eventId">
                          <img class="profile" :src="ticket.profile.picture" :alt="ticket.profile.name">
                          <span>{{ ticket.profile.name }}</span>
                          <hr>
                        </div>
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


<style lang="scss" scoped>
img {
  width: 100%;
  height: 50dvh;
  object-fit: cover;
}

.profile {
  height: 32px;
  width: 32px;
}
</style>
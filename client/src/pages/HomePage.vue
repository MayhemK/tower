<script setup>
import { AppState } from '@/AppState.js';
import { eventService } from '@/services/EventService.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, ref } from 'vue';
import { EventModel } from "@/models/Event.js";
import EventCard from '@/components/EventCard.vue';

const events = computed(() => {
  if (filterCategory.value == 'all') {
    return AppState.events
  }
  return AppState.events.filter(event => event.type == filterCategory.value)
})
const filterCategory = ref('all')
const categories = [
  {
    name: 'all',
    icon: '♾️',
    backgroundImg: 'https://images.unsplash.com/photo-1608178398319-48f814d0750c?q=80&w=1158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'concert',
    icon: '🎸',
    backgroundImg: 'https://images.unsplash.com/photo-1567942712661-82b9b407abbf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'convention',
    icon: '👥',
    backgroundImg: 'https://images.unsplash.com/photo-1560964598-dee5d2b9dd6b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'sport',
    icon: '⚽',
    backgroundImg: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1307&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'digital',
    icon: '💻',
    backgroundImg: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
]


onMounted(() => {
  getEvents()
})
// defineProps({
//   eventProp: { type: Event, required: true }
// })
async function getEvents() {
  try {
    await eventService.getEvents()
  }
  catch (error) {
    Pop.error(error);
  }
}

</script>
//TODO - Add a font//
<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col-12 banner align-items-center d-flex">
        <div class="text-light fs-3 ">
          <p class="text-decoration-underline fw-bold">Event Management</p>
          <p>for people, by people</p>
        </div>
      </div>
    </div>
  </section>
  <div class="container fw-bold fs-3">How Tower Works</div>
  <section class="container">
    <div class="row justify-content-center align-items-stretch grid">
      <div class="col-5">
        <div class="card">
          <div class="container">
            <div class="row grid">
              <div class="col-3 text-success fs-2">🔍</div>
              <div class="col-9">
                <p class="fw-bold fs-5">Discover events you are interested in</p>
                <hr>
                <p>Browse through community hosted events for all the things you love</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-5 ">
        <div class="card">
          <div class="container">
            <div class="row grid">
              <div class="col-3 text-success fs-2">➕</div>
              <div class="col-9">
                <p class="fw-bold fs-5">Start an event and invite your friends</p>
                <hr>
                <p>Create your own Tower event</p>
                <p class="fs-bold fs-5 text-success" type="button">Create an Event</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="container fw-bold fs-3">Explore top categories</div>
  <section class="container">
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="container">
          <div class="row justify-content-between text-center text-light">
            <div v-for="category in categories" :key="category.name" class="col-2">
              <div @click="filterCategory = category.name" class="fw-bold p-4 category-button"
                :style="{ backgroundImage: `url(${category.backgroundImg})` }" role="button">
                <div class="fs-2">{{ category.icon }}</div>
                <div class="text-capitalize">{{ category.name }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="container mt-5">
          <div class="row">
            <div v-for="event in events" :key="event.id" class="col-4 text-center">
              <EventCard :eventProp="event" />
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.banner {
  background-image: url(https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-size: cover;
  min-height: 60dvh;
}

.grid {
  height: 200px;
}

.category-button {
  background-size: cover;
  background-position: center;

}

.card {
  background-color: #fcc3a29b;
}

.text-light {
  text-shadow: 2px 2px 2px black;
}
</style>

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

async function getEventById() {
  try {
    const eventId = route.params.getEventById
    await eventService.getEventById(eventId)
  }
  catch (error) {
    Pop.error('ERROR IS HERE', error);

  }
}
</script>


<template>
  <section class="container">
    <div class="row">
      <div class="col-12">
        POTATO
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>
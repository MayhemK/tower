<script setup>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { EventModel } from "@/models/Event.js";

defineProps({
  eventProp: { type: EventModel, required: true }
})
</script>


<template>
  <div class="component">
    <RouterLink :to="{ name: 'EventDetails', params: { eventId: eventProp.id } }"
      :title="`Go to the ${eventProp.name} page`">
      <div class="card">
        <img :src="eventProp.coverImg" alt="">
        <div class="fw-bold ">{{ eventProp.name }}</div>
        <div class="text-capitalize">Type: {{ eventProp.type }}</div>
        <div class="text-success text-capitalize">Hosted by {{ eventProp.creator.name }}</div>
        <div>{{ new Date(eventProp.startDate).toLocaleDateString() }}</div>
        <div>{{ eventProp.ticketCount }} / {{ eventProp.capacity }} Attending</div>
      </div>
    </RouterLink>
  </div>
</template>


<style lang="scss" scoped>
.card {
  background-color: #fcc3a29b;
}

img {
  width: 100%;
  height: 10dvh;
  object-fit: cover;
}
</style>
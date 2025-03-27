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

    <div class="card">
      <img :src="eventProp.coverImg" alt="">
      <div class="fw-bold ">{{ eventProp.name }}</div>
      <div class="text-capitalize">Type: {{ eventProp.type }}</div>
      <div class="text-success">Hosted by {{ eventProp.creatorId }}</div>
      <div>{{ new Date(eventProp.startDate).toLocaleString() }}</div>
      <div>X/{{ eventProp.capacity }} Attending</div>
    </div>



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
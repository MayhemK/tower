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
      <p>{{ eventProp.name }}</p>
      <p>Hosted by {{ eventProp.creatorId }}</p>
      <p>{{ new Date(eventProp.startDate).toLocaleString() }}</p>
      <p>Attending</p>
    </div>



  </div>
</template>


<style lang="scss" scoped>
.component {}
</style>
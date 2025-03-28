<script setup>
import { eventService } from '@/services/EventService.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';

const categories = ['concert', 'convention', 'sport', 'digital']
const editableEventData = ref({
  title: '',
  description: '',
  startDate: '',
  coverImg: '',
  category: ''
})

async function createEvent() {
  try {
    await eventService.createEvent(editableEventData.value)
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <form @submit.prevent="createEvent()">
    <div class="form-floating mb-3">
      <input v-model="editableEventData.title" type="text" class="form-control" id="eventTitle"
        placeholder="Title of Event" minlength="3" maxlength="25" required>
      <label for="eventTitle">Title of Event</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableEventData.description" type="text" class="form-control" id="eventDescription"
        placeholder="Description" maxlength="1000" required>
      <label for="eventDescription">Description of Event</label>
    </div>
    <div class="mb-3 form-control">
      <input v-model="editableEventData.startDate" type="datetime-local" id="eventTime" name="eventTime">
      <label for="eventTime"></label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableEventData.coverImg" type="url" class="form-control" id="eventCoverImg"
        placeholder="Event Img URL" maxlength="1000" required>
      <label for="eventCoverImg">Event Image Link</label>
    </div>
    <div class="form-floating mb-3">
      <select v-model="editableEventData.category" class="form-select" id="eventCategory" required>
        <option value="" selected disabled>Choose a Category</option>
        <option v-for="category in categories" :key="'option' + category" :value="category" id="">
          {{ category }}
        </option>
      </select>
      <label for="eventCategory">Event Category</label>
    </div>
    <div class="text-end">
      <button class="btn btn-success" type="submit">Submit</button>
    </div>
  </form>
</template>


<style lang="scss" scoped></style>
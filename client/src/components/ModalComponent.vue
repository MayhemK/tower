<script setup>
import EventForm from './EventForm.vue';


</script>


<template>
  <div class="modal fade " id="createModal" tabindex="-1" aria-labelledby="testModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="testModalLabel">Event Creation</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <EventForm />
        </div>
        <!-- <div class="modal-footer">
          <button type="submit" class="btn btn-success">Create</button>
        </div> -->
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>
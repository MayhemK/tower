<script setup>
import { commentService } from '@/services/CommentService.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const editableCommentData = ref({
  body: '',
  eventId: route.params.eventId
})
async function createReply() {
  try {
    await commentService.createReply(editableCommentData.value)

  }
  catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <form @submit.prevent="createReply">
    <div class="form-floating">
      <input v-model="editableCommentData.body" class="form-control" id="replyBody" minlength="3" maxlength="500"
        type="text">
      <label for="replyBody">Enter your reply here!</label>
    </div>
    <div class="text-end">
      <button class="btn btn-success" type="submit">
        Reply
      </button>
    </div>
  </form>
</template>


<style lang="scss" scoped></style>
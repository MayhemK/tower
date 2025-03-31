<script setup>
import { AppState } from '@/AppState.js';
import { Reply } from '@/models/Replies.js';
import { commentService } from '@/services/CommentService.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';

defineProps({
  reply: { type: Reply, required: true }
})
const account = computed(() => AppState.account)
async function deleteReply(replyId) {
  try {
    const confirmed = await Pop.confirm('Do you want to delete your reply?')
    if (!confirmed) { return }
    await commentService.deleteReply(replyId)
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <section class="container">
    <div class="row">
      <div class="col-2 text-center">
        <img :src="reply.creator.picture" :alt="reply.creator.name" class="profile">
        <div>{{ reply.creator.name }}</div>
      </div>
      <div class="col-8">
        {{ reply.body }}
      </div>
      <div @click="deleteReply(reply.id)" class="col-2"><button v-if="reply.creatorId == account.id"
          class="btn btn-danger">🗑️</button></div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.profile {
  height: 32px;
  width: 32px;
}
</style>
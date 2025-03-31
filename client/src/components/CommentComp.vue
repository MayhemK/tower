<script setup>
import { Reply } from '@/models/Replies.js';
import { commentService } from '@/services/CommentService.js';
import { Pop } from '@/utils/Pop.js';

defineProps({
  reply: { type: Reply, required: true }
})

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
      <div v-if="{{ }}">
        <div @click="deleteReply(reply.id)" class="col-2"><button class="btn btn-danger">🗑️</button></div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.profile {
  height: 32px;
  width: 32px;
}
</style>
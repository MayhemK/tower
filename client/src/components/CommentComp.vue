<script setup>
import { Reply } from '@/models/Replies.js';

defineProps({
  reply: { type: Reply, required: true }
})
</script>


<template>
  <section class="container">
    <div class="row">
      <div class="col-2 text-center">
        <img :src="reply.creator.picture" :alt="reply.creator.name" class="profile">
        <div>{{ reply.creator.name }}</div>
      </div>
      <div class="col-10">
        {{ reply.body }}
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
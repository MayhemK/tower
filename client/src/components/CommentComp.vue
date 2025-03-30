<script setup>
import { Reply } from '@/models/Replies.js';

defineProps({
  reply: { type: Reply, required: true }
})
</script>


<template>
  {{ reply.body }}
</template>


<style lang="scss" scoped></style>
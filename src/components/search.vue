<script setup>
import { ref } from "vue";
const text = ref('');
</script>

<template>
  <p>{{ text }}</p>
  <input v-model="text">
</template>
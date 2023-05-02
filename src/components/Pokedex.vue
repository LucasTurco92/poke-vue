<script lang="ts">
export default {
    data() {
        return {
            message: 'pepep'
        }
    }
}
</script>
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()
const name = ref('pikachu')
const count = ref(0)


</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>

      <code>{{ name }}</code>
      <code>{{ message}}</code>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
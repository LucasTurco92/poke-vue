<template>
  <div>
    <input v-model="pokeNumberInput" type="number" min="1" max="251" @input="setPokeNumber" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import store from '../store';


const pokeNumberInput = ref(store.getters.pokeNumber);

const setPokeNumber = () => {
  store.dispatch('setPokeNumber', pokeNumberInput.value);
}; 
</script>

<script setup lang="ts">
</script>

<template>
  <div>
    <nav class="navbar">
      <router-link  class="navbar-item" to="/">Home</router-link>
      <router-link class="navbar-item" to="/pokedex">Pokedex</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>

.navbar-item{
  margin: 10px;
}
.navbar{
  position: absolute;
  top:0;
  left: 10%;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

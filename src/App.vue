<script setup>
import TheHeader from './components/TheHeader.vue';
import TheNav from './components/TheNav.vue';

import characterInfo from "./assets/data/characters.json"

const characters = ref(characterInfo);

</script>

<template>
  <TheNav />
  <TheHeader />
  
</template>


<style scoped>

</style>

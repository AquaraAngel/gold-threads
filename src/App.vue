<script setup>
import TheNav from '@/components/TheNav.vue';

import { RouterView } from "vue-router";


</script>

<template>
  <TheNav />
  <main>
    <router-view />
  </main>
</template>


<style scoped>

</style>

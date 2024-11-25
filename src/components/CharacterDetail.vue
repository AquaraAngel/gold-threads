<script setup>
  const props = defineProps({
    character: Array
  })
</script>


<template>
    <div v-if="character" class="characterDetail">
      <h2>{{ character.name }}</h2>
      <p>{{ character.age }}</p>
      <p>{{ character.height }}</p>
      <p>{{ character.MBTI }}</p>
      <div>
          <p></p>
          <div class="hex" :style="{backgroundColor: character.colors.color1.display}"></div>
      </div>
    </div>
    <!-- <div v-else class="characterDetail">
      <p>Select a character to see details.</p>
    </div> -->
</template>
  
  
  
<style scoped>
  .characterDetail {
    border: 1px solid #ddd;
    padding: 1rem;
    margin-left: 1rem;
  }
</style>
  
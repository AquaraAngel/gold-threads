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
        <div v-for="color in character.colors" class="colors">
          <p>{{ color.display }}</p>
          <div class="hex" :style="{backgroundColor: color.display}"></div>
        </div>
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

  .hex{
    width: 50px;
    height: 50px;
  }

  .colors{
    display: flex;
  }
</style>
  
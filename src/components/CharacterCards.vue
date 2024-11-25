<script setup>
  const props = defineProps({
    character: Array
});
  

// Define emits for the click event
const emit = defineEmits(['click']);

// Emit the character when clicked
function showDetails() {
  emit('click', props.character); // Emit the character to the parent
}

</script>

<template>
    <div class="character" @click="showDetails">
      <h3>{{ character.name }}</h3>
      <p>{{ character.age }}</p>
    </div>
</template>

  
<style scoped>
  .character {
    border: 1px solid #ddd;
    padding: 1rem;
    margin: 0.5rem 0;
    cursor: pointer;
    transition: transform 0.2s;
  }
  .character:hover {
    transform: scale(1.02);
  }
</style>
  

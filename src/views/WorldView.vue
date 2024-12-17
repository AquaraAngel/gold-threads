<script setup>
import { ref } from "vue";
import backgroundImage from "../assets/media/azaleaMap_nameless.png";

const container = ref(null);
const backgroundPosition = ref({ x: 50, y: 50 });

const handleMouseMove = (e) => {
  const { left, top, width, height } = container.value.getBoundingClientRect();
  const relX = (e.clientX - left) / width;
  const relY = (e.clientY - top) / height;

  backgroundPosition.value = {
    x: 50 + (relX - 0.5) * 120,
    y: 50 + (relY - 0.5) * 120,
  };
};
</script>

<template>
  <div
    id="container"
    ref="container"
    @mousemove="handleMouseMove"
    :style="{
      backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y}%`,
      backgroundSize: '105%',
      backgroundImage: `url(${backgroundImage})`,
    }"
  ></div>
</template>

<style scoped>
#container {
  position: relative;
  height: 80vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: hidden;
  transition: background-position 0.1s ease-out;
}
</style>


<!-- Evt brug gyroskop til mobil -->


<script setup>
import { ref } from "vue";

const container = ref(null);

const handleMouseMove = (e) => {
  parallaxIt(e, ".slide", -100);
  parallaxIt(e, "img", -300);
};

const parallaxIt = (e, target, movement) => {
  if (!container.value) return;

  const rect = container.value.getBoundingClientRect();
  const relX = e.pageX - rect.left;
  const relY = e.pageY - rect.top;

  const elements = container.value.querySelectorAll(target);
  elements.forEach((el) => {
    const offsetX = ((relX - rect.width / 2) / rect.width) * movement;
    const offsetY = ((relY - rect.height / 2) / rect.height) * movement;

    el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
};
</script>

<template>
  <div id="container" ref="container" @mousemove="handleMouseMove">
    <div class="slide"></div>
    <img  src="../assets/media/azaleaMap_nameless.png" alt="Parallax Image"/>
  </div>
</template>

<style scoped>
#container {
  position: relative;
  width: 98vw;
  height: 90vh;  
  overflow: clip;
}
.slide {
  position: absolute;
}
img {
  position: absolute;
  /* object-position: right center; */
  object-fit: cover;
  /* top: -Xpx; */
  width: 120%;
  height: 100%;
}
</style>

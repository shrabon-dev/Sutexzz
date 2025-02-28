<template>
    <div
      ref="element"
      :class="{ 'fade-slide-enter-active': isVisible, 'fade-slide-enter-from-up': !isVisible }"
    >
      <slot />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const element = ref(null);
  const isVisible = ref(false);
  
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );
  
    if (element.value) {
      observer.observe(element.value);
    }
  });
  </script>
  
  <style scoped>
  /* Ensure the element starts in the initial state */
  .fade-slide-enter-from-up {
    opacity: 0;
    transform: translateY(20px);
  }
  </style>
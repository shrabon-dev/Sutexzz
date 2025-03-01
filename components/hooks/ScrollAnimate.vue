<template>
  <div
    ref="element"
    :style="{
      transitionDelay: `${delay}ms`,
      transitionDuration: `${speed}ms`,
    }"
    :class="[
      { 'fade-slide-enter-active': isVisible },
      `fade-slide-enter-from-${direction}`,
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  delay: {
    type: Number,
    default: 0, // Default delay is 0ms
  },
  direction: {
    type: String,
    default: 'up', // Default direction is 'up'
    validator: (value) => ['up', 'down', 'left', 'right'].includes(value), // Validate direction
  },
  speed: {
    type: Number,
    default: 500, // Default speed is 500ms
  },
});

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
/* Base transition properties */
.fade-slide-enter-from-up,
.fade-slide-enter-from-down,
.fade-slide-enter-from-left,
.fade-slide-enter-from-right {
  opacity: 0;
  transition-property: opacity, transform;
  transition-timing-function: ease;
}

/* Direction-specific initial states */
.fade-slide-enter-from-up {
  transform: translateY(20px);
}

.fade-slide-enter-from-down {
  transform: translateY(-20px);
}

.fade-slide-enter-from-left {
  transform: translateX(20px);
}

.fade-slide-enter-from-right {
  transform: translateX(-20px);
}

/* Active state */
.fade-slide-enter-active {
  opacity: 1;
  transform: translate(0, 0);
}
</style>
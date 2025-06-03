<template>
  <div class="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
    <span class="text-sm text-panel-text-light dark:text-gray-400">{{ label }}</span>
    <span class="text-sm font-medium text-panel-text-light dark:text-white">{{ value }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  value: String,
})
</script>

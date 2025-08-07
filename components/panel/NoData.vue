<!-- components/NoData.vue -->
<template>
  <div class="w-full flex flex-col items-center justify-center py-10 text-center text-gray-500">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-12 w-12 mb-4 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M9 17v-6h13m-7 6V5m0 0H5m13 0l-4-4m4 4l-4 4" />
    </svg>
    <p class="text-lg font-semibold">{{ message }}</p>
    <p v-if="subtext" class="text-sm mt-1 text-gray-400">{{ subtext }}</p>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: 'No data available.',
  },
  subtext: {
    type: String,
    default: '',
  },
});
</script>

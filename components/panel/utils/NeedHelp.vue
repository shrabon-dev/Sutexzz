<template>
  <div class="profile__card bg-panel-dark w-full p-6 h-full shadow-md rounded-lg text-center text-white">
    <h2 class="text-base font-semibold mb-2">Need Help?</h2>
    <p class="text-sm text-gray-300 mb-4">
      We’re here to assist you. If you have any questions or face issues, feel free to reach out.
    </p>
    <div class="flex justify-center gap-4">
      <NuxtLink to="/contact" class="bg-primary border border-gray-500  bg-panel-sub-text text-base lg:text-xs xl:text-base 2xl:text-base hover:bg-primary-dark text-white font-medium  px-5 lg:px-1 xl:px-5 py-2 rounded-lg transition-all">
        Contact Support
      </NuxtLink>
      <NuxtLink to="/faq" class="border border-gray-500 text-base lg:text-xs xl:text-base 2xl:text-base  text-gray-300 hover:text-white hover:border-white px-5 lg:px-1 xl:px-5 py-2 rounded-lg transition-all">
        Visit FAQ
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// No JavaScript logic needed for now
</script>

<style scoped>
 
</style>

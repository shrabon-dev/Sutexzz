<template>
  <div class="w-full h-screen bg-amber-700 text-9xl flex justify-center items-center ">
      Admin Panel 
  </div>   
</template>
<script setup>
 definePageMeta({
  layout: 'admin',
  middleware: 'auth',
});
</script>
<template>
    <ComingSoon />
</template>
<script setup>
   import ComingSoon from '~/components/ComingSoon.vue';
    definePageMeta({
        layout: 'admin',
        middleware: 'auth',
    });
</script>
<template>
  <ClientOnly>
    <Header />
  </ClientOnly>
  <main>
    <slot />
  </main>
  <ClientOnly>
    <Footer />
  </ClientOnly>
</template>

<script setup>
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
</script>
<template>
    <Hero />
    <Integretion />
    <Feature />
    <Pricing />
    <Key />
    <Testimonial />
    <Customer />
    <Try />
</template>
<script setup>
     import Hero from '~/components/Hero.vue';
     import Integretion from '~/components/Integration.vue';
     import Feature from '~/components/Feature.vue';
     import Pricing from '~/components/Pricing.vue';
     import Customer from '~/components/Customer.vue';
     import Try from '~/components/Try.vue';
     import Key from '~/components/Key.vue';
     import Testimonial from '~/components/Testimonial.vue';
     import { useAuthStore } from "@/store/auth";


     const auth = useAuthStore();
     console.log('token:' + auth.token)

</script>
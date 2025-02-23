<template>
    <section id="hero_section" class="  py-52">
       <div class="container mx-auto relative z-10">
        <div class="flex justify-between items-center">
            <div class="hr_cntn w-1/2">
                <span class="bg-btn font-inter text-white text-base font-normal px-4 py-2 rounded-4xl inline-block mb-3">Business</span>
                <h3 class="font-jost text-6xl text-white font-bold max-w-4/5 leading-18 ">Every thing to grow your business, <span class="block"> <span class="text-btn"> –</span> all in one place</span></h3>
                <p class="font-jost font-thin text-xl text-white pt-5 max-w-4/5">Send invoices, collect payments, text with customers, accept online bookings, build a digital presence, and start growing with powerful, easy-to-use tools.</p>
                <span class="bg-btn font-inter text-white text-base font-normal px-4 py-2 rounded-sm inline-flex gap-2 items-center mt-10">Sign Up  <Icon icon="material-symbols-light:arrow-right-alt-rounded" width="24" height="24" />
                </span>
            </div>
            <div class="hr_img w-1/2 text-right">
                <img class="ml-auto" src="../assets/image/bnr_img.png" alt="banner iamge">
            </div>
        </div>
       </div>
       <img class=" absolute right-0 top-0 z-0" src="../assets/image/shape.png" alt="banner iamge">
    </section>
</template>
<script setup>
import { Icon } from '@iconify/vue';
</script>
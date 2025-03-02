<template>
    <header class="px-4  bg-transparent py-10 absolute top-0 left-0 w-full z-[999999]">
        <div class="container mx-auto">
            <div class="flex justify-between items-center">
                <div class="logo">
                    <img class="w-24 md:w-32" src="/assets/image/logo.png" alt="">
                </div>
                <div class="menu flex items-center gap-10 lg:gap-20">
                    <div  class="hidden md:block menu_items">
                        <ul class="flex space-x-5">
                            <li> <nuxt-link class="text-btn font-normal font-jost text-lg border-b" to="/">Home</nuxt-link> </li>
                            <li> <nuxt-link class="text-white font-normal font-jost text-lg" to="/client/about">About</nuxt-link> </li>
                            <li> <nuxt-link class="text-white font-normal font-jost text-lg" to="/">Pricing</nuxt-link> </li>
                            <li> <nuxt-link class="text-white font-normal font-jost text-lg" to="/">Contact</nuxt-link> </li>
                        </ul>
                    </div>
                    <div class="menu_btn ">
                        <button class="font-jost cursor-pointer font-normal text-xs md:text-base text-white px-2 md:px-5 rounded-sm py-1 md:py-2 bg-btn border-2 border-btn">Sign Up</button>
                        <button class="font-jost cursor-pointer font-normal text-xs md:text-base text-white px-2 md:px-5 rounded-sm py-1 md:py-2 ml-5 bg-transparent border-2 border-white">Try Now</button>
                    </div>
                </div>
                <div class=" mobile-menu">
                    <div class="m-btn cursor-pointer text-right">
                        <Icon class="text-3xl md:text-4xl text-white" icon="iconoir:menu" />
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script setup>
import { Icon } from '@iconify/vue';
</script>
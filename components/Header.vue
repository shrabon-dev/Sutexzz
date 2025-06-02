<template>
    <header :class="['px-4 w-full z-[99999999]', isScrolled ? 'fixed bg-main border-b py-4 border-white/10 z-[99999999]' : 'absolute py-10 bg-transparent z-[99999999]']">
        <div class="container mx-auto">
            <div class="flex justify-between items-center">
                <div class="logo">
                  <nuxt-link to="/"><img class="w-24 md:w-32" src="/assets/image/logo.png" alt=""></nuxt-link>
                </div>
                <div class="menu flex items-center gap-10 lg:gap-20">
                    <div class="hidden md:block menu_items">
                        <ul class="flex md:space-x-6 xl:space-x-10">
                            <li>
                                <nuxt-link
                                    class="duration-300 hover:text-btn hover:border-btn font-normal font-jost text-lg border-b"
                                    :class="{ 'text-btn border-btn': isActive('/'), 'text-white border-transparent': !isActive('/') }"
                                    to="/"
                                >
                                    Home
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link
                                    class="duration-300 hover:text-btn hover:border-btn font-normal font-jost text-lg border-b"
                                    :class="{ 'text-btn border-btn': isActive('/client/about'), 'text-white border-transparent': !isActive('/client/about') }"
                                    to="/client/about"
                                >
                                    About
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link
                                    class="duration-300 hover:text-btn hover:border-btn font-normal font-jost text-lg border-b"
                                    :class="{ 'text-btn border-btn': isActive('/client/pricing'), 'text-white border-transparent': !isActive('/client/pricing') }"
                                    to="/client/pricing"
                                >
                                    Pricing
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link
                                    class="duration-300 hover:text-btn hover:border-btn font-normal font-jost text-lg border-b"
                                    :class="{ 'text-btn border-btn': isActive('/client/contact'), 'text-white border-transparent': !isActive('/client/contact') }"
                                    to="/client/contact"
                                >
                                    Contact
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                    <div class="menu_btn">
                        <nuxt-link to="/register" class="font-jost cursor-pointer font-normal text-xs md:text-base text-white px-2 md:px-5 rounded-sm py-1 md:py-2 bg-btn border-2 border-btn">Sign Up</nuxt-link>
                        <button class="font-jost cursor-pointer font-normal text-xs md:text-base text-white px-2 md:px-5 rounded-sm py-1 md:py-2 ml-5 bg-transparent border-2 border-white">Try Now</button>
                    </div>
                </div>
                <div class="side-bar">
                    <div class="m-btn cursor-pointer text-right" @click="toggleSidebar">
                        <Icon class="text-3xl md:text-4xl text-white" icon="iconoir:menu" />
                    </div>
                    <div class="side-bar-menus fixed w-72 sm:w-96 h-[100vh] bg-btn right-0 top-0 pb-20 transition-transform duration-100 ease-in-out" :class="{ 'translate-x-0': isSidebarOpen, 'translate-x-full': !isSidebarOpen }">
                        <div class="clse-btn bg-main/30 pr-10">
                            <button type="button" @click="toggleSidebar" class="px-5 md:px-7 cursor-pointer duration-300 hover:bg-btn text-xl md:text-2xl text-white font-inter py-3 md:py-4 bg-main">
                                <Icon icon="ic:round-close"/>
                            </button>
                        </div>

                        <div class="menu_items px-10 pt-20">
                            <ul class="space-y-4">
                                <li>
                                    <nuxt-link
                                        class="font-normal font-jost text-lg border-b"
                                        :class="{ 'text-main border-btn': isActive('/'), 'text-white border-transparent': !isActive('/') }"
                                        to="/"
                                    >
                                        Home
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link
                                        class="font-normal font-jost text-lg border-b"
                                        :class="{ 'text-main border-btn': isActive('/client/about'), 'text-white border-transparent': !isActive('/client/about') }"
                                        to="/client/about"
                                    >
                                        About
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link
                                        class="font-normal font-jost text-lg border-b"
                                        :class="{ 'text-main border-btn': isActive('/client/pricing'), 'text-white border-transparent': !isActive('/client/pricing') }"
                                        to="/client/pricing"
                                    >
                                        Pricing
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link
                                        class="font-normal font-jost text-lg border-b"
                                        :class="{ 'text-main border-btn': isActive('/client/contact'), 'text-white border-transparent': !isActive('/client/contact') }"
                                        to="/client/contact"
                                    >
                                        Contact
                                    </nuxt-link>
                                </li>
                            </ul>
                            <div class="menu_btn pt-10">
                                <nuxt-link to="/register" class="font-jost cursor-pointer font-normal text-xs md:text-base text-white px-2 md:px-5 rounded-sm py-1 md:py-2 bg-main border-2 border-main"> Sign Up </nuxt-link>
                                <button class="font-jost cursor-pointer font-normal text-xs md:text-base text-white px-2 md:px-5 rounded-sm py-1 md:py-2 ml-5 bg-transparent border-2 border-white">Try Now</button>
                            </div>
                            <div class="pt-10 md:pt-32">
                                <p class="font-jost font-light text-base text-white/90 py-4 sm:py-8 italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, repellendus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, repellendus?</p>
                                <p class="font-jost font-light text-sm text-white/70">Created by <span class="text-main">Muhammad Shrabon Been Khattab</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Icon } from '@iconify/vue';
import { useRoute } from 'vue-router';

const isSidebarOpen = ref(false);
const isScrolled = ref(false);
const route = useRoute();

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};

const handleScroll = () => {
    if (window.scrollY > 300) {
        isScrolled.value = true;
    } else {
        isScrolled.value = false;
    }
};

const isActive = (path) => {
    return route.path === path;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
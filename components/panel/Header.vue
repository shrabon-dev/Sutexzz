<template>
    <nav class="bg-panel-dark py-4 px-6 text-white border-panel-sub-dark rounded-lg mb-5">
        <div class="flex justify-between items-center">
            <div class="menus">
                <ul class="flex gap-10 items-center">
                    <li><nuxt-link to="/admin" class="font-jost text-lg text-white font-thin duration-300 ease-in-out hover:text-panel-sub-text border-b-2 border-transparent hover:border-panel-sub-text"> Home </nuxt-link></li>
                    <li><nuxt-link to="/admin" class="font-jost text-lg text-white font-thin duration-300 ease-in-out hover:text-panel-sub-text border-b-2 border-transparent hover:border-panel-sub-text"> About </nuxt-link></li>
                    <li><nuxt-link to="/admin" class="font-jost text-lg text-white font-thin duration-300 ease-in-out hover:text-panel-sub-text border-b-2 border-transparent hover:border-panel-sub-text"> Services </nuxt-link></li>
                    <li><nuxt-link to="/admin" class="font-jost text-lg text-white font-thin duration-300 ease-in-out hover:text-panel-sub-text border-b-2 border-transparent hover:border-panel-sub-text"> <Icon icon="tabler:dots" width="24" height="24" /> </nuxt-link></li>
                </ul>
            </div>
            <div class="usr_menu">
                <ul class="flex gap-5 items-center"> 
                    <li class="relative"
                        @mouseenter="hoverState.notifications = true"
                        @mouseleave="hoverState.notifications = false">
                        <span class="w-10 h-10 border border-transparent hover:border-panel-sub-text rounded-lg flex items-center justify-center bg-panel-sub-dark text-xl text-white cursor-pointer hover:text-panel-sub-text duration-300 ease-in-out"> <Icon icon="iconoir:bell-notification-solid"/> </span>
                        <DMenus :isHovered="hoverState.notifications">
                            <li><nuxt-link to="/admin" class="text-yellow-400 ">1. Welcome to Sutex!</nuxt-link></li>
                            <li><nuxt-link to="/admin" class="text-yellow-400 ">2. Verify your email for advanced features</nuxt-link></li>
                        </DMenus>
                    </li>
                    <li><span class="w-10 h-10 border border-transparent hover:border-panel-sub-text rounded-lg flex items-center justify-center bg-panel-sub-dark text-xl text-white cursor-pointer hover:text-panel-sub-text duration-300 ease-in-out"> <Icon icon="iconoir:message-text-solid"/> </span></li>
                    <li><span class="w-10 h-10 border border-transparent hover:border-panel-sub-text rounded-lg flex items-center justify-center bg-panel-sub-dark text-xl text-white cursor-pointer hover:text-panel-sub-text duration-300 ease-in-out"> <Icon icon="iconoir:expand"/> </span></li>
                    <li><nuxt-link to="/admin" class="text-panel-sub-text"> Upgrade 4.5.6 </nuxt-link></li>
                    <li @mouseenter="hoverState.profile = true"
                    @mouseleave="hoverState.profile = false" class="flex items-center gap-5 cursor-pointer relative" >
                        <span>Muhammad Shrabon</span> 
                        <span class=" block overflow-hidden"><img class="w-12 h-12 rounded-full border-panel-sub-dark border-4 object-cover" src="/assets/image/pfl.jpg" alt="profle"></span>
                        <DMenus :isHovered="hoverState.profile">
                            <li class=""><nuxt-link to="/admin" class="font-jost text-base text-white font-thin flex gap-2 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-2 border-transparent hover:border-panel-sub-text"> <span class="block w-2 h-2 bg-panel-sub-dark rounded-full"></span>   Profile</nuxt-link></li>
                            <li class=""><nuxt-link to="/admin" class="font-jost text-base text-white font-thin flex gap-2 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-2 border-transparent hover:border-panel-sub-text"> <span class="block w-2 h-2 bg-panel-sub-dark rounded-full"></span>   Settings</nuxt-link></li>
                            <li class=""><nuxt-link to="/admin" class="font-jost text-base text-white font-thin flex gap-2 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-2 border-transparent hover:border-panel-sub-text"> <span class="block w-2 h-2 bg-panel-sub-dark rounded-full"></span>   Account</nuxt-link></li>
                            <li class=""><nuxt-link to="/admin" class="font-jost text-base text-white font-thin flex gap-2 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-2 border-transparent hover:border-panel-sub-text"> <span class="block w-2 h-2 bg-panel-sub-dark rounded-full"></span>   Billing</nuxt-link></li>
                            <li class=""><nuxt-link to="/admin" class="font-jost text-base text-white font-thin flex gap-2 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-2 border-transparent hover:border-panel-sub-text"> <span class="block w-2 h-2 bg-panel-sub-dark rounded-full"></span>   Logout</nuxt-link></li>
                        </DMenus>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import DMenus from './utils/DMenus.vue';

const hoverState = ref({
    notifications: false,
    profile: false
});
</script>

<style>

</style>
<template>
    <nav class="bg-panel-dark py-4 px-6 text-white border-panel-sub-dark rounded-lg z-[999999] mb-5 fixed w-[97.5%] md:w-[95%] lg:w-[81.5%]">
        <div class="flex justify-end lg:justify-between items-center">
            <div class="menus hidden lg:block">
                <ul class="flex gap-5 2xl:gap-10 items-center">
                    <li><nuxt-link to="/admin" class="font-jost  text-sm xl:text-lg text-white font-light duration-300 ease-in-out hover:text-panel-sub-text border-b-2 border-transparent hover:border-panel-sub-text"> Home </nuxt-link></li>
                    <li><nuxt-link to="/admin" class="font-jost  text-sm xl:text-lg text-white font-light duration-300 ease-in-out hover:text-panel-sub-text border-b-2 border-transparent hover:border-panel-sub-text"> About </nuxt-link></li>
                    <li><nuxt-link to="/admin" class="font-jost  text-sm xl:text-lg text-white font-light duration-300 ease-in-out hover:text-panel-sub-text border-b-2 border-transparent hover:border-panel-sub-text"> Services </nuxt-link></li>
                    <li><nuxt-link to="/admin" class="font-jost  text-sm xl:text-lg text-white font-light duration-300 ease-in-out hover:text-panel-sub-text border-b-2 border-transparent hover:border-panel-sub-text"> <Icon icon="tabler:dots"  /> </nuxt-link></li>
                </ul>
            </div>
            <div class="usr_menu">
                <ul class="flex gap-2 lg:gap-5 items-center"> 
                    <li class="relative "
                        @mouseenter="hoverState.notifications = true"
                        @mouseleave="hoverState.notifications = false">
                        <span class="w-10 h-10 border border-transparent hover:border-panel-sub-text rounded-lg flex items-center justify-center bg-panel-sub-dark text-xl text-white cursor-pointer hover:text-panel-sub-text duration-300 ease-in-out"> <Icon icon="iconoir:bell-notification-solid"/> </span>
                        <DMenus :isHovered="hoverState.notifications">
                            <li><nuxt-link to="/admin" class="text-yellow-400 font-jost  text-sm xl:text-base">1. Welcome to Sutex!</nuxt-link></li>
                            <li><nuxt-link to="/admin" class="text-yellow-400 font-jost  text-sm xl:text-base">2. Verify your email for advanced features</nuxt-link></li>
                        </DMenus>
                    </li>
                    <li class=""><span class="w-10 h-10 border border-transparent hover:border-panel-sub-text rounded-lg flex items-center justify-center bg-panel-sub-dark  text-sm xl:text-xl text-white cursor-pointer hover:text-panel-sub-text duration-300 ease-in-out"> <Icon icon="iconoir:message-text-solid"/> </span></li>
                    <li class=" " @click="toggleFullscreen">
                    <span
                        class="w-10 h-10 border border-transparent hover:border-panel-sub-text rounded-lg flex items-center justify-center bg-panel-sub-dark  text-sm xl:text-xl text-white cursor-pointer hover:text-panel-sub-text duration-300 ease-in-out">
                        <Icon :icon="isFullscreen ? 'iconoir:collapse' : 'iconoir:expand'" />
                    </span>
                    </li>
                    <li class=" hidden lg:inline-block" ><nuxt-link to="/admin" class="text-panel-sub-text font-jost  text-sm xl:text-base"> Upgrade 4.5.6 </nuxt-link></li>
                    <li @mouseenter="hoverState.profile = true"
                    @mouseleave="hoverState.profile = false" class="flex items-center gap-1 lg:gap-5 cursor-pointer relative" >
                        <span class="font-jost  text-sm xl:text-base  hidden lg:inline-block">{{ user['fullName'] }}</span> 
                        <span class=" block overflow-hidden"><img class="w-12 h-12 rounded-full border-panel-sub-dark border-4 object-cover" src="/assets/image/pfl.jpg" alt="profle"></span>
                        <DMenus :isHovered="hoverState.profile">
                            <li class=""><nuxt-link to="/admin" class="font-jost  text-sm xl:text-base text-white font-light flex gap-2 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-2 border-transparent hover:border-panel-sub-text"> <span class="block w-2 h-2 bg-panel-sub-dark rounded-full"></span>   Profile</nuxt-link></li>
                            <li class=""><nuxt-link to="/admin" class="font-jost  text-sm xl:text-base text-white font-light flex gap-2 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-2 border-transparent hover:border-panel-sub-text"> <span class="block w-2 h-2 bg-panel-sub-dark rounded-full"></span>   Settings</nuxt-link></li>
                            <li class=""><nuxt-link to="/admin" class="font-jost  text-sm xl:text-base text-white font-light flex gap-2 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-2 border-transparent hover:border-panel-sub-text"> <span class="block w-2 h-2 bg-panel-sub-dark rounded-full"></span>   Account</nuxt-link></li>
                            <li class=""><nuxt-link to="/admin" class="font-jost  text-sm xl:text-base text-white font-light flex gap-2 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-2 border-transparent hover:border-panel-sub-text"> <span class="block w-2 h-2 bg-panel-sub-dark rounded-full"></span>   Billing</nuxt-link></li>
                            <li class=""><nuxt-link to="/admin" class="font-jost  text-sm xl:text-base text-white font-light flex gap-2 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-2 border-transparent hover:border-panel-sub-text"> <span class="block w-2 h-2 bg-panel-sub-dark rounded-full"></span>   Logout</nuxt-link></li>
                        </DMenus>
                    </li>
                    <li><span @click="sidebarStore.toggleSidebar" class="icon_box menu_btn"><Icon icon="ic:baseline-menu"/> </span></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { Icon } from '@iconify/vue';
import { ref, computed, onMounted } from 'vue';
import DMenus from './utils/DMenus.vue';
import { useAuthStore } from '../../store/auth';
import { useSidebarStore } from '../../store/sidebar';
 

const hoverState = ref({
    notifications: false,
    profile: false
});
const sidebarStore = useSidebarStore();
const isFullscreen = ref(false);

const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    isFullscreen.value = true;
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
    isFullscreen.value = false;
  }
};

 
const authStore = useAuthStore();
const user = computed(() => authStore.user);

onMounted(() => {
  if (!authStore.user) {
    authStore.fetchUser();
  }
});

</script>

<style>

</style>
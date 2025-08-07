<template>
    <aside class="bg-panel-dark p-5 lg:pr-4  text-white border-panel-sub-dark rounded-lg h-screen fixed w-fit xl:w-[195px] 2xl:w-fit ">
        <div class="cmpny rounded-lg mb-10 bg-panel-sub-dark p-3 xl:p-5">
            <nuxt-link to="/" class="flex justify-between"><img class="w-24 md:w-14 xl:w-20 2xl:w-32" src="/assets/image/logo.png" alt=""> <span class="font-jost text-xs md:text-[8px] 2xl:text-sm text-panel-sub-text">V_3.6.5</span></nuxt-link>
        </div>
        <ul class="space-y-5">
            <li class=""><nuxt-link to="/admin" class="font-jost text-sm 2xl:text-lg text-white font-light flex gap-4 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-4 border-transparent hover:border-panel-sub-text"> <Icon class="rounded-sm bg-panel-sub-dark flex justify-center  items-center text-xl w-8  h-8 p-1" icon="ic:baseline-dashboard" /> Dashboard</nuxt-link></li>
            <li class="haveChild group"><nuxt-link to="/admin" class="font-jost text-sm 2xl:text-lg text-white font-light flex gap-4 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-4 border-transparent hover:border-panel-sub-text"> <Icon icon="humbleicons:pie-chart" class="rounded-sm bg-panel-sub-dark flex justify-center  items-center text-xl w-8  h-8 p-1" /> Project Management 
                <Icon icon="material-symbols-light:keyboard-arrow-down-rounded" class="group-hover:rotate-180 text-4xl opacity-50 duration-700 ease-in-out" /> </nuxt-link>
                <div class="hvr_prnt max-h-0 group-hover:max-h-[160px] overflow-hidden duration-1000 ease-in-out">
                    <ul class="sub_menus pl-0 border  border-panel-sub-dark rounded ml-10 mt-2 py-2">
                          <li class=""><nuxt-link to="/admin/project/create" class="font-jost  text-sm 2xl:text-base text-white font-light flex gap-4 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-2 border-transparent hover:border-panel-sub-text"> <Icon class="rounded-sm  flex justify-center  items-center text-xl w-8  h-8 p-1" icon="material-symbols-light:line-end-arrow-notch"  /> Create Project</nuxt-link></li>
                          <li class=""><nuxt-link to="/admin/user" class="font-jost  text-sm 2xl:text-base text-white font-light flex gap-4 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-2 border-transparent hover:border-panel-sub-text"> <Icon class="rounded-sm  flex justify-center  items-center text-xl w-8  h-8 p-1" icon="material-symbols-light:line-end-arrow-notch"  /> Track progress</nuxt-link></li>
                          <li class=""><nuxt-link to="/admin/project/list" class="font-jost  text-sm 2xl:text-base text-white font-light flex gap-4 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-2 border-transparent hover:border-panel-sub-text"> <Icon class="rounded-sm  flex justify-center  items-center text-xl w-8  h-8 p-1" icon="material-symbols-light:line-end-arrow-notch"  /> All Projects</nuxt-link></li>
                    </ul>
                </div>
            
            </li>
            <li class=""><nuxt-link to="/admin/user" class="font-jost  text-sm 2xl:text-lg text-white font-light flex gap-4 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-4 border-transparent hover:border-panel-sub-text"> <Icon class="rounded-sm bg-panel-sub-dark flex justify-center  items-center text-xl w-8  h-8 p-1" icon="mdi:user-settings" /> Profile</nuxt-link></li>
            <li class=""><nuxt-link to="/admin/setting" class="font-jost  text-sm 2xl:text-lg text-white font-light flex gap-4 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-4 border-transparent hover:border-panel-sub-text"> <Icon class="rounded-sm bg-panel-sub-dark flex justify-center  items-center text-xl w-8  h-8 p-1" icon="mdi:bell-settings" /> Settings</nuxt-link></li>
            <li class=""><nuxt-link to="/admin/billing" class="font-jost  text-sm 2xl:text-lg text-white font-light flex gap-4 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-4 border-transparent hover:border-panel-sub-text"> <Icon class="rounded-sm bg-panel-sub-dark flex justify-center  items-center text-xl w-8  h-8 p-1" icon="mdi:money" /> Billings</nuxt-link></li>
            <!-- <li class=""><nuxt-link to="/admin/user-list" class="font-jost  text-sm 2xl:text-lg text-white font-light flex gap-4 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-4 border-transparent hover:border-panel-sub-text"> <Icon class="rounded-sm bg-panel-sub-dark flex justify-center  items-center text-xl w-8  h-8 p-1" icon="mdi:format-list-bulleted" /> Users</nuxt-link></li> -->
            <li class=""><nuxt-link   @click="auth.logout()" class="font-jost  text-sm 2xl:text-lg text-white font-light cursor-pointer flex gap-4 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-4 border-transparent hover:border-panel-sub-text"> <Icon class="rounded-sm bg-panel-sub-dark flex justify-center  items-center text-xl w-8  h-8 p-1" icon="mdi:logout" /> Logout</nuxt-link></li>
        </ul>
    </aside>
</template>
<script setup>

import { Icon } from '@iconify/vue';
import { useAuthStore } from "@/store/auth";

const auth = useAuthStore();

</script>
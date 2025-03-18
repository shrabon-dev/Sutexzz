<template>
    <aside class="bg-panel-dark p-5 text-white border-panel-sub-dark rounded-lg h-screen w-full">
        <div class="cmpny rounded-lg mb-10 bg-panel-sub-dark p-5">
            <nuxt-link to="/" class="flex justify-between"><img class="w-24 md:w-32" src="/assets/image/logo.png" alt=""> <span class="font-jost text-sm text-panel-sub-text">V_3.6.5</span></nuxt-link>
        </div>
        <ul class="space-y-5">
            <li class=""><nuxt-link to="/admin" class="font-jost text-lg text-white font-thin flex gap-4 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-4 border-transparent hover:border-panel-sub-text"> <Icon class="rounded-sm bg-panel-sub-dark flex justify-center  items-center text-xl w-8  h-8 p-1" icon="ic:baseline-dashboard" /> Dashboard</nuxt-link></li>
            <li class=""><nuxt-link to="/admin/user" class="font-jost text-lg text-white font-thin flex gap-4 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-4 border-transparent hover:border-panel-sub-text"> <Icon class="rounded-sm bg-panel-sub-dark flex justify-center  items-center text-xl w-8  h-8 p-1" icon="mdi:user-settings" /> Profile</nuxt-link></li>
            <li class=""><nuxt-link to="/admin/profile" class="font-jost text-lg text-white font-thin flex gap-4 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-4 border-transparent hover:border-panel-sub-text"> <Icon class="rounded-sm bg-panel-sub-dark flex justify-center  items-center text-xl w-8  h-8 p-1" icon="mdi:bell-settings" /> Settings</nuxt-link></li>
            <li class=""><nuxt-link to="/admin/billing" class="font-jost text-lg text-white font-thin flex gap-4 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-4 border-transparent hover:border-panel-sub-text"> <Icon class="rounded-sm bg-panel-sub-dark flex justify-center  items-center text-xl w-8  h-8 p-1" icon="mdi:money" /> Billings</nuxt-link></li>
            <li class=""><nuxt-link to="/admin/user-list" class="font-jost text-lg text-white font-thin flex gap-4 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-4 border-transparent hover:border-panel-sub-text"> <Icon class="rounded-sm bg-panel-sub-dark flex justify-center  items-center text-xl w-8  h-8 p-1" icon="mdi:format-list-bulleted" /> Users</nuxt-link></li>
            <li class=""><nuxt-link to="" class="font-jost text-lg text-white font-thin flex gap-4 items-center duration-300 ease-in-out hover:text-panel-sub-text border-r-4 border-transparent hover:border-panel-sub-text"> <Icon class="rounded-sm bg-panel-sub-dark flex justify-center  items-center text-xl w-8  h-8 p-1" icon="mdi:logout" /> Logout</nuxt-link></li>
        </ul>
    </aside>
</template>
<script setup>
import { Icon } from '@iconify/vue';
</script>
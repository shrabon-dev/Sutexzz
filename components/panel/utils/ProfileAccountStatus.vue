<template>
    <div class="profile__card bg-panel-dark w-full h-full rounded-lg shadow-md p-5 text-left">
         <h4 class="font-normal text-lg text-panel-text-light font-jost">Your Account :  <span class="text-panel-text-light w-fit inline-flex bg-blue-700 px-3 py-1 text-xl  rounded-full gap-1 items-center">Verified <Icon icon="material-symbols-light:verified-rounded" /></span></h4>
         <div class="cur_plan text-center w-full ">
             <span class="md:w-32 w-24 lg:w-24 xl:w-32 md:h-32 h-24 lg:h-24 xl:h-32 m-auto block text-center leading-[96px]  md:leading-[128px] lg:leading-[96px] xl:leading-[128px] mt-5 rounded-full shadow bg-panel-sub-text/20 italic font-bold text-panel-text-light   text-2xl items-center justify-center">
                 Gold
             </span>
            <span class="text-lg md:text-3xl lg:text-lg xl:text-3xl text-panel-text-light text-center block font-jost pt-2 font-medium ">Your Current Plan</span>
         </div>
    </div>       
</template>
<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';

 
</script>
<style scoped>
 
</style>
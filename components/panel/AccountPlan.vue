<template>
      <div class="card h-full border border-panel-sub-text/50 rounded-lg p-4 shadow-lg">
          <div class="title flex items-center justify-between  bg-panel-text-light/5 rounded-lg p-2 mb-2">
            <div class="tl_lft">
              <h6 class="font-jost text-base 2xl:text-lg text-panel-text-light">Account Plan</h6>
              <p class="font-jost text-xs 2xl:text-sm text-panel-sub-text">Your current plan <span class="text-blue-200 bg-blue-200/20 px-2 rounded">Free Version</span></p>
            </div>
            <div class="actn">
              <Icon class="text-panel-sub-text text-3xl cursor-pointer duration-300 ease-in-out hover:text-panel-text-light" icon="mynaui:dots-vertical-circle"/>
            </div>
          </div>

          <div class="datas pt-5">
             <div class="plan flex items-center justify-between w-full">
               <span class="w-16 h-16 2xl:w-24 2xl:h-24 rounded-full flex justify-center shadow-xl items-center text-xs 2xl:text-base  font-poppin bg-blue-600/10 text-blue-300"> Standard </span>
               <span class="w-32 h-32 2xl:w-40 2xl:h-40 bg-blue-600/10 text-blue-300 shadow-xl rounded-full flex justify-center items-center text-lg 2xl:text-4xl font-poppin font-medium border border-blue-300/20"> Free </span>
               <span class="w-16 h-16 2xl:w-24 2xl:h-24 rounded-full flex justify-center shadow-xl items-center text-xs 2xl:text-base  font-poppin bg-blue-600/10 text-blue-300"> Premium </span>
             </div>
             <div class="btn text-lg pt-12 pb-6">
                <nuxt-link class="bg-panel-text-light/20 px-4  py-2 font-poppin text-panel-text-light text-xs 2xl:text-sm rounded duration-300 ease-in hover:bg-panel-text-light/50" to="/admin">Change your plan</nuxt-link>
             </div>       
          </div>
        </div>    
</template>
<script setup>
import { Icon } from '@iconify/vue';
</script>
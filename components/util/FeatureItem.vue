<template>
    <div  class="item xs:w-[49%] xsm:w-[48%] mb-5 md:mb-0 md:w-[48%] bg-white/10 rounded-lg  xsm:p-5 hover:bg-btn duration-300 ease-in-out group" @mousemove="handleMouseMove">
      <div class="flex items-center">
        <div class="icon group-hover:text-black group-hover:bg-white duration-300 ease-in-out text-xs xsm:text-xl xl:text-7xl text-white rounded-lg bg-btn p-2 xsm:p-3 m-3">
          <Icon :icon="icon" />
        </div>
        <h6 class="title font-inter font-bold text-white xs:text-xs xsm:text-lg lg:text-base xl:text-2xl">{{ title }}</h6>
      </div>
      <p class="font-inter font-bold text-xs xl:text-base text-white p-3">{{ description }}</p>
    </div>
  </template>
  
  <script setup>
  import { Icon } from '@iconify/vue';
  
  const props = defineProps({
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  });
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--x', x + 'px');
    e.currentTarget.style.setProperty('--y', y + 'px');
  };
  </script>
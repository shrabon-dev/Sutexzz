<template>
    <div class="title text-center pb-16">
        <span v-gsap.whenVisible.from="{ opacity: 0, y: 100 }" class="bg-btn font-inter text-white text-xs md:text-base font-normal px-4 py-2 rounded-4xl inline-block mb-3">
          {{key_t}}
        </span>
        <h4 v-gsap.whenVisible.from="{ opacity: 0, y: 100 }" class="text-white font-inter font-bold text-lg md:text-4xl"> {{ title }} </h4>
        <p v-if="description" v-gsap.whenVisible.from="{ opacity: 0, y: 100 }" class="font-jost text-sm md:text-xl text-white font-light max-w-[88%] md:max-w-2/3 mx-auto pt-4">{{ description.replace(/\r?\n/g, ' ') }}</p>
    </div>
</template>

<script setup> 

const props = defineProps({
  key_t: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});
 
</script>
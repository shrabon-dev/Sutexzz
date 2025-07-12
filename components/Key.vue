<template>
    <section id="key_aspect_sect" class="bg-btn/5 py-14 md:py-32">
      <div class="container mx-auto">
        <Title key_t="Key Aspect" title="Get complete visibility and control" description="Projectile helps you collaborate more smoothly and communicate better. Projectile helps you collaborate more smoothly and communicate better." />
      
        <div class="key_box flex justify-between flex-wrap gap-4 xl:gap-10">
          <div
            v-gsap.whenVisible.from="{ opacity:0, y: 60, scale:.1,duration:2  }"
            v-for="(item, index) in items"
            :key="index"
            :class="[
              'key_item text-center xsm:w-[45%] md:max-w-[300px] xl:max-w-[360px] mb-5 p-5 hover:shadow-2xl hover:bg-btn/10 duration-400 ease-in-out rounded-lg ',
              { 'flex justify-center items-center bg-btn/10 rounded-3xl min-w-[300px]': item.isSpecial },
            ]"
          >
            <div v-if="!item.isSpecial" class="icon inline-block z-10 relative after:w-20 after:h-20 after:rounded-full after:bg-btn/40 after:z-[-1] after:absolute after:top-0 md:after:top-5 after:-right-5">
              <img class="w-14 md:w-20" :src="item.icon" alt="icon" />
              <!-- <img src="../assets/image/icon.png" alt="icon" /> -->
            </div>
            <div class="cntn">
              <h4 class="font-inter text-base md:text-xl text-white font-semibold pt-8 pb-4">{{ item.title }}</h4>
              <p v-if="!item.isSpecial" class="font-inter text-xs md:text-base text-white/70 font-normal">{{ item.description }}</p>
              <a
                v-if="item.isSpecial"
                href="#"
                class="font-jost inline-block mt-10 text-xs md:text-base bg-btn border-2 border-white/30 rounded-4xl text-white font-normal px-10 py-4"
              >
                {{ item.buttonText }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup> 
  import Title from './util/Title.vue';
  import iconImage from '../assets/image/icon.png';
 
  import { onMounted, ref } from 'vue';

 
  const items = ref([
    {
      icon: iconImage,
      title: "Win More Customers",
      description: "Increase online store conversion up to 25% with our online visual merchandising interface.",
    },
    {
      icon: iconImage,
      title: "Get paid faster",
      description: "Increase online store conversion up to 25% with our online visual merchandising interface.",
    },
    {
      icon: iconImage,
      title: "Automate boring tasks",
      description: "Increase online store conversion up to 25% with our online visual merchandising interface.",
    },
    {
      icon: iconImage,
      title: "Create and send professional invoices",
      description: "Increase online store conversion up to 25% with our online visual merchandising interface.",
    },
    {
      icon: iconImage,
      title: "Ask & Collect reviews from customers",
      description: "Increase online store conversion up to 25% with our online visual merchandising interface.",
    },
    {
      icon: iconImage,
      title: "Access your business from any device",
      description: "Increase online store conversion up to 25% with our online visual merchandising interface.",
    },
    {
      icon: iconImage,
      title: "Schedule your bookings online",
      description: "Increase online store conversion up to 25% with our online visual merchandising interface.",
    },
    {
      icon: iconImage,
      title: "Contact your customers from one inbox",
      description: "Increase online store conversion up to 25% with our online visual merchandising interface.",
    },
    {
      isSpecial: true,  
      title: "Try for Free!",
      description: "",
      buttonText: "Schedule a Demo",
    },
  ]);
  </script>
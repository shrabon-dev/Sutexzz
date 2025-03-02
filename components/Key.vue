<template>
    <section id="key_aspect_sect" class="bg-btn/5 md:py-32">
      <div class="container mx-auto px-4">
        <div class="title text-center pb-16">
          <span v-gsap.whenVisible.from="{ opacity: 0, y: 100 }" class="bg-btn font-inter text-white text-base font-normal px-4 py-2 rounded-4xl inline-block mb-3">Key Aspect</span>
          <h4 v-gsap.whenVisible.from="{ opacity: 0, y: 100 }" class="text-white font-inter font-bold text-4xl">Get complete visibility and control</h4>
          <p v-gsap.whenVisible.from="{ opacity: 0, y: 100 }" class="font-jost text-xl text-white font-thin pt-5 max-w-2/3 mx-auto">
            Projectile helps you collaborate more smoothly and communicate better. Projectile helps you collaborate more smoothly and communicate better.
          </p>
        </div>
        <div class="key_box flex justify-between flex-wrap gap-4 xl:gap-10">
          <div v-gsap.whenVisible.from="{ opacity: 0, y: 100 }"
            v-for="(item, index) in items"
            :key="index"
            :class="[
              'key_item text-center xsm:w-[45%] md:max-w-[300px] xl:max-w-[360px] mb-5 p-5',
              { 'flex justify-center items-center bg-btn/10 rounded-3xl min-w-[300px]': item.isSpecial },
            ]"
          >
            <div v-if="!item.isSpecial" class="icon inline-block z-10 relative after:w-20 after:h-20 after:rounded-full after:bg-btn/40 after:z-[-1] after:absolute after:top-5 after:-right-5">
              <img :src="item.icon" alt="icon" />
              <!-- <img src="../assets/image/icon.png" alt="icon" /> -->
            </div>
            <div class="cntn">
              <h4 class="font-inter text-base md:text-xl text-white font-semibold pt-8 pb-4">{{ item.title }}</h4>
              <p v-if="!item.isSpecial" class="font-inter text-xs md:text-base text-white font-normal">{{ item.description }}</p>
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
  import { ref } from 'vue';
  import iconImage from '../assets/image/icon.png';
  
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
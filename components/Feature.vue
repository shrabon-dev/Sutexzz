<template>
  <section id="feature_sect" class="py-14 lg:py-32 relative z-14">
    <div class="container mx-auto relative z-10 px-4 sm:px-4">
      <div class="flex justify-between flex-wrap">
        <div class="w-full lg:w-1/3">
          <div class="ftre_title">
            <div class="title text-left pb-16">
              <span class="bg-btn font-inter text-white text-xs md:text-base font-normal px-4 py-2 rounded-4xl inline-block mb-3">Features</span>
              <h4
                v-motion="{
                  initial: { opacity: 0, y: 100 },
                  enter: { opacity: 1, y: 0, transition: { duration: 1000 } },
                  visibleOnce: true,
                }"
                class="text-white font-inter font-bold text-xl md:text-4xl"
              >
                We are Integrated with industry best service providers
              </h4>
              <p class="font-jost text-sm md:text-xl text-white font-thin pt-4 md:pt-10">
                Projectile helps you collaborate more smoothly and communicate better.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-[55%]">
          <div
            v-motion="{
              initial: { opacity: 0, y: 100 },
              enter: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1000,
                  staggerChildren: 200, // Delay between each child animation
                  delayChildren: 800, // Initial delay before the first child animation
                },
              },
              visibleOnce: true,
            }"
            class="fture_box flex sm:gap-3 xl:gap-6 2xl:gap-8 justify-between flex-wrap"
          >
          <FeatureItem
  v-motion="{
    initial: { opacity: 0, y: 100 },
    enter: { opacity: 1, y: 0, transition: { duration: 1000, delay: 300 } },
    visibleOnce: true,
  }"
  icon="ri:quill-pen-ai-fill"
  title="Customer management"
  description="Monitor progress against your plans and address deviations faster."
/>
<FeatureItem
  v-motion="{
    initial: { opacity: 0, y: 100 },
    enter: { opacity: 1, y: 0, transition: { duration: 1000, delay: 500 } },
    visibleOnce: true,
  }"
  icon="ri:pen-nib-fill"
  title="Scheduling"
  description="Monitor progress against your plans and address deviations faster."
/>
            <FeatureItem
              v-motion="{}"
              icon="ri:mastercard-fill"
              title="Quotes and estimates"
              description="Monitor progress against your plans and address deviations faster."
            />
            <FeatureItem
              v-motion="{}"
              icon="ri:bank-card-fill"
              title="Credit card payment"
              description="Monitor progress against your plans and address deviations faster."
            />
            <FeatureItem
              v-motion="{}"
              icon="iconamoon:badge-fill"
              title="Referrals and reviews"
              description="Monitor progress against your plans and address deviations faster."
            />
            <FeatureItem
              v-motion="{}"
              icon="iconamoon:invoice-fill"
              title="Billing and invoicing"
              description="Monitor progress against your plans and address deviations faster."
            />
          </div>
        </div>
      </div>
    </div>
    <div class="shape absolute z-0 bottom-0 left-[-1]">
      <img class="w-full" src="../assets/image/bg_ptrn.png" alt="bg_ptrn.png" />
    </div>
  </section>
</template>

<script setup>
import FeatureItem from './util/FeatureItem.vue';
</script>
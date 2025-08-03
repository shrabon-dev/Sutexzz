<template>
  <section id="feature_sect" class="py-14 lg:py-32 relative z-14">
    <div class="container mx-auto relative z-10  sm:px-4">
      <div class="flex justify-between flex-wrap">
        <div class="w-full lg:w-1/3">
          <div class="ftre_title">
            <div class="title text-left pb-16">
              <span  v-gsap.whenVisible.from="{ opacity: 0,duration: 3 }" class="bg-btn font-inter text-white text-xs md:text-base font-normal px-4 py-2 rounded-4xl inline-block mb-3">Features</span>
              <h4 v-gsap.whenVisible.from="{ opacity: 0,duration: 3 }" class="text-white font-inter font-bold text-xl md:text-4xl">
                Built for busy freelancers who want more freedom, not more tools
              </h4>
              <p  v-gsap.whenVisible.from="{ opacity: 0,duration: 3 }" class="font-jost text-sm md:text-xl text-white font-light pt-4 md:pt-10">
              Everything in one place to streamline your entire workflow.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-[55%]">
          <div
            v-gsap.whenVisible.from="{ opacity: 0, y: 200 }"
            class="fture_box flex sm:gap-3 xl:gap-6 2xl:gap-8 justify-between flex-wrap"
          >
            <FeatureItem   
              icon="ri:quill-pen-ai-fill"
              title="Client CRM "
              description="Organize client details, notes, and communication threads."
            />
            <FeatureItem
              icon="ri:pen-nib-fill"
              title="Smart Scheduling"
              description="Let clients book meetings automatically with your calendar."
            />
            <FeatureItem
              icon="ri:mastercard-fill"
              title="Proposals & Estimates"
              description="Send branded proposals with e-signature support."
            />
            <FeatureItem
              icon="ri:bank-card-fill"
              title="Invoices & Payments"
              description="Generate invoices and get paid via Stripe, PayPal, and bank transfers."
            />
            <FeatureItem
              icon="iconamoon:badge-fill"
              title="Task & Project Tracking"
              description="Track project milestones and to-dos with clients."
            />
            <FeatureItem
              icon="iconamoon:invoice-fill"
              title="Time Tracking "
              description="Log billable hours for tasks and export them to invoices."
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
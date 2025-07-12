<template>
   <!-- Prelaoder -->
   <!-- <img class="ml-auto pre_loader " src="../assets/image/pl.jpg" alt="banner iamge"> -->
   <!-- Prelaoder -->
    <section id="hero_section" class=" px-4  py-40 md:py-52">
       <div class="container mx-auto relative z-10">
        <div class="flex flex-col-reverse sm:flex-row justify-between items-center">
            <div class="hr_cntn w-full sm:w-1/2">
                <span v-gsap.whenVisible.once.from="{ opacity: 0, y: 100,duration: 1 }" class="bg-btn font-inter text-white text-xs md:text-base font-normal px-2 md:px-4 py-1 md:py-2 rounded-4xl inline-block mb-3">Business</span>
                <h3 v-gsap.whenVisible.once.from="{ opacity: 0, y: 100,duration: 1,delay:.2  }" class="font-jost text-3xl lg:text-4xl xl:text-6xl text-white font-bold w-full md:max-w-4/5 lg:leading-[1.3] xl:leading-18 ">Manage your freelance business <span class="block"> <span class="text-btn"> –</span> in one place</span></h3>
                <p v-gsap.whenVisible.once.from="{ opacity: 0, y: 100,duration: 1,delay:.5  }" class="font-jost font-light text-base lg:text-xl text-white pt-5 max-w-4/5"> Send invoices, accept payments, manage client projects, track time, get feedback, and stay on top of everything — stress free. </p>
                <span v-gsap.whenVisible.once.from="{ opacity: 0, y: 100,duration: 1, delay:.8  }" class="bg-btn font-inter text-white text-base font-normal px-4 py-2 rounded-sm inline-flex gap-2 items-center mt-10">Sign Up Free <Icon icon="material-symbols-light:arrow-right-alt-rounded" width="24" height="24" />
                </span>
            </div>
            <div v-gsap.whenVisible.once.from="{ opacity: 0, y: 100,duration: 1, delay:.8  }" class="hr_img w-full pb-5 sm:pb-0 sm:w-1/2 text-right">
                <img class="ml-auto  " src="../assets/image/bnr_img.png" alt="banner iamge">
            </div>
        </div>
       </div>
       <img class=" absolute right-0 top-0 z-0" src="../assets/image/shape.png" alt="banner iamge">
    </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>
<style scoped>
  /* .pre_loader{
    animation: imgShow 4s forwards;

  }
  @keyframes imgShow {
    0%{
        position: absolute;
        width: 100vw;
        height: 100vh;
        right: 0; 
        top: 0;
        z-index: 999999;

    }
    69%{
        position: absolute;
        width: 500px;
        height: 300px;
        right: 10%; 
        top: 50%;
        transform: translate(-50%,-50%);
        z-index: 999999;
    }
    100%{
        position: absolute;
        width: 500px;
        height: 300px;
        right: 10%; 
        top: 50%;
        transform: translate(-50%,-50%);
        z-index: 999999;
        opacity: 0;
    }
  } */
</style>
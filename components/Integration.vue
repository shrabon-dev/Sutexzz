<template>
    <section id="integ_sect" class="md:pb-32">
      <div class="container mx-auto sm:px-4">
        <div class="title text-center pb-16">
            <span class="bg-btn font-inter text-white text-xs md:text-base font-normal px-4 py-2 rounded-4xl inline-block mb-3">Integrations</span>
            <h4 class="text-white font-inter font-bold text-xl md:text-4xl">We are Integrated with industry best service providers</h4>
        </div>
        <div class="img_box sm:flex justify-between items-center">
            <div class="img">
                <ScrollAnimate :delay="0" direction="up" :speed="1000">
                    <img class="w-32 m-auto sm:w-18 md:w-38" src="../assets/image/integ/1.png" alt="integ/1.png">
                </ScrollAnimate>
            </div>
            <div class="img">
                <ScrollAnimate :delay="200" direction="up" :speed="1000">
                    <img class="w-32  m-auto sm:w-18 md:w-28" src="../assets/image/integ/2.png" alt="integ/2.png">
                </ScrollAnimate>
            </div>
            <div class="img">
                <ScrollAnimate :delay="400" direction="up" :speed="1000">
                    <img class="w-32  m-auto sm:w-18 md:w-32" src="../assets/image/integ/3.png" alt="integ/3.png">
                </ScrollAnimate>
            </div>
            <div class="img">
                <ScrollAnimate :delay="600" direction="up" :speed="1000">
                    <img class="w-32 m-auto sm:w-18 md:w-32" src="../assets/image/integ/4.png" alt="integ/4.png">
                </ScrollAnimate>
            </div>
        </div>
      </div>
    </section>
</template>
<script setup>
     import ScrollAnimate from '~/components/hooks/ScrollAnimate.vue';

</script>
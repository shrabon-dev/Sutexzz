<template>
    <section id="integ_sect" class="md:pb-32">
      <div class="container mx-auto sm:px-4">
        <Title key_t="Integrations" title="We are Integrated with industry best service providers" />

        <div class="img_box xsm:flex justify-between items-center">
            <div class="img">
                <ScrollAnimate :delay="0" direction="up" :speed="1000">
                    <img class="w-20 m-auto sm:w-18 md:w-38" src="../assets/image/integ/1.png" alt="integ/1.png">
                </ScrollAnimate>
            </div>
            <div class="img">
                <ScrollAnimate :delay="200" direction="up" :speed="1000">
                    <img class="w-20  m-auto sm:w-18 md:w-28" src="../assets/image/integ/2.png" alt="integ/2.png">
                </ScrollAnimate>
            </div>
            <div class="img">
                <ScrollAnimate :delay="400" direction="up" :speed="1000">
                    <img class="w-20  m-auto sm:w-18 md:w-32" src="../assets/image/integ/3.png" alt="integ/3.png">
                </ScrollAnimate>
            </div>
            <div class="img">
                <ScrollAnimate :delay="600" direction="up" :speed="1000">
                    <img class="w-20 m-auto sm:w-18 md:w-32" src="../assets/image/integ/4.png" alt="integ/4.png">
                </ScrollAnimate>
            </div>
        </div>
      </div>
    </section>
</template>
<script setup>
     import ScrollAnimate from '~/components/hooks/ScrollAnimate.vue';
     import Title from './util/Title.vue';
</script>
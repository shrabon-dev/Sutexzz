<template>
    <section id="cus_sect" class="bg-white/5 py-20">
      <div class="container mx-auto px-4">
        <Title key_t="Client" title="Our Customer" />

        <div class="img_box xsm:flex justify-between items-center">
            <div v-gsap.whenVisible.from="{ opacity: 0, }" class="img">
                <img class="w-20 m-auto sm:w-18 md:w-38" src="../assets/image/integ/1.png" alt="integ/1.png">
            </div>
            <div v-gsap.whenVisible.from="{ opacity: 0, }" class="img">
                <img class="w-20  m-auto sm:w-18 md:w-28" src="../assets/image/integ/2.png" alt="integ/2.png">
            </div>
            <div v-gsap.whenVisible.from="{ opacity: 0, }" class="img">
                <img class="w-20  m-auto sm:w-18 md:w-28" src="../assets/image/integ/3.png" alt="integ/3.png">
            </div>
            <div v-gsap.whenVisible.from="{ opacity: 0, }" class="img">
                <img class="w-20 m-auto sm:w-18 md:w-28" src="../assets/image/integ/4.png" alt="integ/4.png">
            </div>
        </div>
      </div>
    </section>
</template>

<script setup>
     import Title from './util/Title.vue';
</script>
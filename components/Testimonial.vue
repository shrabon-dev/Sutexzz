<template>
    <section id="testimonial_sect" class="py-32">
        <div class="container mx-auto relative">
                <div class="title text-center pb-16">
                    <span class="bg-btn font-inter text-white text-base font-normal px-4 py-2 rounded-4xl inline-block mb-3">Testimonial</span>
                    <h4 class="text-white font-inter font-bold text-4xl">What are Customers says</h4>
                    <p class="font-jost text-xl text-white font-thin max-w-2/3 mx-auto pt-4">Projectile helps you collaborate more smoothly and communicate better.  Projectile helps you collaborate 
                        more smoothly and communicate better. </p>
                </div>

                <div class="reviews_box flex flex-wrap justify-between gap-10 pt-10">
                    <div
                    v-for="(review, index) in reviews"
                    :key="index"
                    class="review_item bg-white rounded-2xl p-4 max-w-[30%]"
                    >
                    <p class="font-inter text-black text-base font-light italic">
                        "{{ review.quote }}"
                    </p>
                    <div class="info flex items-center gap-5 pt-3">
                        <div class="img border border-main/50 rounded-full">
                        <img :src="review.image" alt="client" />
                        </div>
                        <div class="name">
                        <h6 class="font-jost text-black text-xl font-semibold">
                            {{ review.name }}
                        </h6>
                        <p class="font-inter text-black/50 text-sm font-thin">
                            {{ review.position }}
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <span class="absolute w-full h-full bg-gradient-to-b from-main/0 from-0% to-90% to-[#212424] top-0 left-0 "></span>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';

import clientImage from '../assets/image/client/clnt.png';

const reviews = ref([
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aperiam. Quo unde, suscipit obcaecati et rerum dolor quas impedit enim.',
    image: clientImage,
    name: 'Kasem Been Khilzi',
    position: 'CEO of G Tech.',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aperiam. Quo unde, suscipit obcaecati et rerum dolor quas impedit enim.',
    image: clientImage,
    name: 'Kasem Been Khilzi',
    position: 'CEO of G Tech.',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aperiam. Quo unde, suscipit obcaecati et rerum dolor quas impedit enim.',
    image: clientImage,
    name: 'Kasem Been Khilzi',
    position: 'CEO of G Tech.',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aperiam. Quo unde, suscipit obcaecati et rerum dolor quas impedit enim.',
    image: clientImage,
    name: 'Kasem Been Khilzi',
    position: 'CEO of G Tech.',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aperiam. Quo unde, suscipit obcaecati et rerum dolor quas impedit enim.',
    image: clientImage,
    name: 'Kasem Been Khilzi',
    position: 'CEO of G Tech.',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aperiam. Quo unde, suscipit obcaecati et rerum dolor quas impedit enim.',
    image: clientImage,
    name: 'Kasem Been Khilzi',
    position: 'CEO of G Tech.',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aperiam. Quo unde, suscipit obcaecati et rerum dolor quas impedit enim.',
    image: clientImage,
    name: 'Kasem Been Khilzi',
    position: 'CEO of G Tech.',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aperiam. Quo unde, suscipit obcaecati et rerum dolor quas impedit enim.',
    image: clientImage,
    name: 'Kasem Been Khilzi',
    position: 'CEO of G Tech.',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aperiam. Quo unde, suscipit obcaecati et rerum dolor quas impedit enim.',
    image: clientImage,
    name: 'Kasem Been Khilzi',
    position: 'CEO of G Tech.',
  },
]);
</script>
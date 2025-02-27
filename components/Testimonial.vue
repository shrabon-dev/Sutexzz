<template>
  <section id="testimonial_sect" class="py-32">
    <div class="container mx-auto relative px-4">
      <div class="title text-center pb-16">
        <span class="bg-btn font-inter text-white text-base font-normal px-4 py-2 rounded-4xl inline-block mb-3">
          Testimonial
        </span>
        <h4 class="text-white font-inter font-bold text-4xl">What are Customers says</h4>
        <p class="font-jost text-xl text-white font-thin max-w-2/3 mx-auto pt-4">
          Projectile helps you collaborate more smoothly and communicate better. Projectile helps you collaborate
          more smoothly and communicate better.
        </p>
      </div>

      <!-- Swiper Container -->
      <div class="relative">
        <swiper 
         :modules="modules"
          direction="vertical"
          :slides-per-view="3"
          :space-between="0"
          navigation
          @swiper="onSwiper"
          @slide-change="onSlideChange"
          class="reviews_box h-[600px]"
        >
          <!-- Group reviews into chunks of 3 -->
          <swiper-slide
            v-for="(chunk, index) in chunkedReviews"
            :key="index"
            class="review_item"
          >
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div
                v-for="(review, subIndex) in chunk"
                :key="subIndex"
                class="bg-white rounded-2xl p-4"
              >
                <p class="font-inter text-black text-base font-light italic">
                  "{{ review.quote }}"
                </p>
                <div class="info flex items-center gap-5 pt-3">
                  <div class="img border border-main/50 rounded-full">
                    <img :src="review.image" alt="client" class="w-12 h-12 object-cover rounded-full" />
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
          </swiper-slide>
        </swiper>

        <!-- Custom Navigation Buttons -->
        <div @click="slidePrev" class="swiper-button-prev"><</div>
        <div @click="slideNext" class="swiper-button-next">></div>
      </div>

      <span class="absolute w-full h-1/2 bg-gradient-to-b from-main/0 from-0% to-90% to-[#212424] bottom-0 left-0 z-10"></span>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import clientImage from '../assets/image/client/clnt.png';


// Group reviews into chunks of 3
const chunkedReviews = computed(() => {
  const chunkSize = 3;
  const chunks = [];
  for (let i = 0; i < reviews.value.length; i += chunkSize) {
    chunks.push(reviews.value.slice(i, i + chunkSize));
  }
  return chunks;
});

// Access the Swiper instance
const swiperInstance = ref(null);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
  console.log('Swiper instance:', swiper);
};

const onSlideChange = () => {
  console.log('Slide changed');
};
// Navigation functions
const slideNext = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext();
  }
};

const slidePrev = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev();
  }
};
const reviews = ref([
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aperiam. Quo unde, suscipit obcaecati et rerum dolor quas impedit enim.',
    image: clientImage,
    name: 'Umor',
    position: 'CEO of G Tech.',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aperiam. Quo unde, suscipit obcaecati et rerum dolor quas impedit enim.',
    image: clientImage,
    name: 'Umor',
    position: 'CEO of G Tech.',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aperiam. Quo unde, suscipit obcaecati et rerum dolor quas impedit enim.',
    image: clientImage,
    name: 'Umor',
    position: 'CEO of G Tech.',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aperiam. Quo unde, suscipit obcaecati et rerum dolor quas impedit enim.',
    image: clientImage,
    name: 'Umor',
    position: 'CEO of G Tech.',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aperiam. Quo unde, suscipit obcaecati et rerum dolor quas impedit enim.',
    image: clientImage,
    name: 'Umor',
    position: 'CEO of G Tech.',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aperiam. Quo unde, suscipit obcaecati et rerum dolor quas impedit enim.',
    image: clientImage,
    name: 'Umor',
    position: 'CEO of G Tech.',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aperiam. Quo unde, suscipit obcaecati et rerum dolor quas impedit enim.',
    image: clientImage,
    name: 'Umor',
    position: 'CEO of G Tech.',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aperiam. Quo unde, suscipit obcaecati et rerum dolor quas impedit enim.',
    image: clientImage,
    name: 'Umor',
    position: 'CEO of G Tech.',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aperiam. Quo unde, suscipit obcaecati et rerum dolor quas impedit enim.',
    image: clientImage,
    name: 'Umor',
    position: 'CEO of G Tech.',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aperiam. Quo unde, suscipit obcaecati et rerum dolor quas impedit enim.',
    image: clientImage,
    name: 'Umor',
    position: 'CEO of G Tech.',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aperiam. Quo unde, suscipit obcaecati et rerum dolor quas impedit enim.',
    image: clientImage,
    name: 'Umor',
    position: 'CEO of G Tech.',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aperiam. Quo unde, suscipit obcaecati et rerum dolor quas impedit enim.',
    image: clientImage,
    name: 'Umor',
    position: 'CEO of G Tech.',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aperiam. Quo unde, suscipit obcaecati et rerum dolor quas impedit enim.',
    image: clientImage,
    name: 'Umor',
    position: 'CEO of G Tech.',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aperiam. Quo unde, suscipit obcaecati et rerum dolor quas impedit enim.',
    image: clientImage,
    name: 'Umor',
    position: 'CEO of G Tech.',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aperiam. Quo unde, suscipit obcaecati et rerum dolor quas impedit enim.',
    image: clientImage,
    name: 'Umor',
    position: 'CEO of G Tech.',
  },
]);

 
</script>

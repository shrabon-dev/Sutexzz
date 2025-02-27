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
        <swiper-container ref="containerRef"
          :slides-per-view="3"
          :breakpoints="{
              768: {
                slidesPerView: 3,
              },
              300: {
                slidesPerView: 1,
              },
            }"
          speed="500"
          loop="true"
          direction="vertical"
          class="reviews_box h-[600px]"
        
        >
          <!-- Group reviews into chunks of 3 -->
          <swiper-slide
            v-for="(chunk, index) in chunkedReviews"
            :key="index"
            class="review_item lg:mb-10 xl:mb-0 flex justify-between gap-3"
          >
            <div class="">
              <div
                v-for="(review, subIndex) in chunk"
                :key="subIndex"
                class="bg-white inline-block md:w-[30%] m-3 rounded-2xl p-4"
              >
                <p class="font-inter text-black text-xs lg:text-base font-light italic">
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
        </swiper-container>
        <div @click="swiper.prev()" class="swiper-button-prev">&#10094;</div>
        <div @click="swiper.next()" class="swiper-button-next">&#10095;</div>
        <span class="absolute w-full h-1/2 bg-gradient-to-b from-main/0 from-0% to-90% to-[#212424] bottom-0 left-0 z-10"></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import clientImage from '../assets/image/client/clnt.png';
const containerRef = ref(null)
const slides = ref(Array.from({ length: 10 }))

const swiper = useSwiper(containerRef)

// Group reviews into chunks of 3
const chunkedReviews = computed(() => {
  const chunkSize = 3;
  const chunks = [];
  for (let i = 0; i < reviews.value.length; i += chunkSize) {
    chunks.push(reviews.value.slice(i, i + chunkSize));
  }
  return chunks;
});



const reviews = ref([
  // Your reviews data here
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
  // Add more reviews as needed
]);
</script>

<style scoped>


.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  bottom: -10%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
}

.swiper-button-prev {
  left: 45%;
}

.swiper-button-next {
  right: 45%;
}
</style>
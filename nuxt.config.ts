import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','~/assets/css/transition.css'],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}, // Use the correct plugin
      autoprefixer: {},
    },
  },

  app:{
   head: {
     link: [
       {
         rel: 'stylesheet',
         href: 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600&display=swap',
       },
     ],
   },
 
  },

  compatibilityDate: '2025-02-22',
  modules: ['nuxt-swiper','@vueuse/motion/nuxt'],

});
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','~/assets/css/transition.css'],
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {},
    modelsDir: 'models',
    devtools: true,
  },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}, 
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

  compatibilityDate: '2025-03-16',
  modules: ['nuxt-swiper', '@vueuse/motion/nuxt', 'v-gsap-nuxt', 'nuxt-mongoose'],
  plugins: ['~/plugins/pinia.js'],
  vite: {
    server: {
      hmr: {
        protocol: 'ws', // Ensure it's using WebSocket
        host: 'localhost',
        port: 3000,
      },
    },
  },
  auth: {
    origin: "http://localhost:3000", // Your frontend URL
    enableGlobalAppMiddleware: true,
  },
  axios: {
    baseURL: 'http://localhost:3000',  
  },
  vgsap: {
    presets: [],
    breakpoint: 768,
    scroller: '',
    composable: true
}
});
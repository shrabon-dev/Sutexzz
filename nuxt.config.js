import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','~/assets/css/transition.css'],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}, // Use the correct plugin
      autoprefixer: {},
      '~/plugins/initAuth.js':{},
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
  modules: ['nuxt-swiper', '@vueuse/motion/nuxt', 'v-gsap-nuxt',],
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token', // Property name in the API response
          global: true,      // Automatically include token in requests
        },
        user: {
          property: 'user',  // Property name in the API response
          autoFetch: true,   // Automatically fetch user data after login
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/auth/user', method: 'get' },
        },
      },
    },
    redirect: {
      login: '/auth/login',   // Redirect to login page if not authenticated
      logout: '/auth/login',   // Redirect to login page after logout
      home: '/admin',         // Redirect to admin dashboard after login
    },
  },
  axios: {
    baseURL: 'http://localhost:3000', // Your API base URL
  },
  vgsap: {
    presets: [],
    breakpoint: 768,
    scroller: '',
    composable: true
}
});
 
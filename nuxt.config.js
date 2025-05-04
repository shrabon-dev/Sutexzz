export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/transition.css'],
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
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap',
        },
      ],
    },
  },
  compatibilityDate: '2025-03-16',
  modules: ['nuxt-swiper', '@vueuse/motion/nuxt', 'v-gsap-nuxt', 'nuxt-mongoose'],
  plugins: ['~/plugins/pinia.js', '~/plugins/chart.js'],

  // Server configuration
  server: {
    port: process.env.PORT,      // Use Render's assigned port
    host: '0.0.0.0'
  },

  // Remove or conditionally configure Vite HMR for production
  vite: {
    server: {
      hmr: process.env.NODE_ENV === 'development'
        ? {
            protocol: 'ws',
            host: 'localhost',
            port: 3000, // Local dev port
          }
        : false, // Disable HMR in production
    },
  },

  auth: {
    origin: process.env.ORIGIN || "http://localhost:3000",
    enableGlobalAppMiddleware: true,
  },

  axios: {
    baseURL: process.env.BASE_URL || "http://localhost:3000",
  },

  vgsap: {
    presets: [],
    breakpoint: 768,
    scroller: '',
    composable: true,
  },
});

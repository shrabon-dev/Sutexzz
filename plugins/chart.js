import { Chart, registerables } from 'chart.js';
import { defineNuxtPlugin } from 'nuxt/app';

export default defineNuxtPlugin((nuxtApp) => {
  Chart.register(...registerables);
});

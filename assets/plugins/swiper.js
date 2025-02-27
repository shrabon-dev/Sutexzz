// plugins/swiper-element.js
import { defineNuxtPlugin } from '#app';
import { register } from 'swiper/element/bundle';

export default defineNuxtPlugin((nuxtApp) => {
  register(); // Register the Swiper web component
});
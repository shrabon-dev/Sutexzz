import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";
import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware(() => {
  const auth = useAuthStore();

  // Check if running on the client-side
  if (process.client) {
    // Initialize the token and user if not already set
    auth.initUserFromLocalStorage();

    // Check if there's a token in localStorage or the store
    if (!auth.token) {
      return navigateTo("/login");
    }
  }
});

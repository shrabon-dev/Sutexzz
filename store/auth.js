import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null, // Do not access localStorage directly in the state initialization
  }),

  actions: {
    async login(credentials) {
      try {
        const response = await $fetch("/api/auth/login", { method: "POST", body: credentials });

        if (response.token) {
          // Store token in localStorage on the client-side
          if (process.client) {
            localStorage.setItem("token", response.token);
          }
          this.token = response.token;
          this.user = response.user;
        }

        console.log("Login successful:", response);
        return response;
      } catch (error) {
        console.error("Login error:", error);
        return { error: error?.statusMessage || "Login failed" };
      }
    },

    logout() {
      this.token = null;
      this.user = null;
      if (process.client) {
        localStorage.removeItem("token"); // Clear token from localStorage on the client-side
      }
      console.log("User logged out");
      return { message: "Logged out successfully" };
    },

    initUserFromLocalStorage() {
      if (process.client) {
        const token = localStorage.getItem("token");
        if (token) {
          this.token = token;
        }
      }
    }
  },
});

import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null,
  }),

  actions: {
    async register(data) {
      try {
        const res = await $fetch("/api/auth/register", { method: "POST", body: data });
        console.log("Response after register:", res);
        return res;
      } catch (error) {
        console.error("Register error:", error);
        return { error: error.message };
      }
    },
    async login(credentials) {
      try {
        const response = await $fetch("/api/auth/login", { method: "POST", body: credentials });

        if (response.token) {
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
        localStorage.removeItem("token"); 
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

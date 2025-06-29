import { navigateTo } from "nuxt/app";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null || process.client && JSON.parse(localStorage.getItem('user')),
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
            localStorage.setItem("user", JSON.stringify(response.user));
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
      return  navigateTo('/login');
    },
    async fetchUser() {
      const token = localStorage.getItem("token");
      if (!token) return;

      const { user , error } = await $fetch("/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (error.value) {
        this.user = null;
        return;
      }

      this.user = user;  
    },
    async updateUserField(field, res) {
      
      this.user[field] = res[field] 
      localStorage.setItem('user', JSON.stringify(this.user))
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

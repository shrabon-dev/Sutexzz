<template>
  <section id="login_pg" class="py-52">
    <div class="container mx-auto flex justify-center items-center">
      <div class="login_form bg-white w-[560px] shadow-2xl">
        <h6 class="font-jost font-normal text-white text-center text-base bg-btn p-4">
          Create an account in <span class="font-bold text-blue-300">Sutexzz</span>
        </h6>
        <form @submit.prevent="register" class="p-10">
          <input class="w-full bg-main mb-2 p-3 rounded-sm text-sm text-white placeholder:text-white placeholder:text-sm placeholder:font-inter" 
                 v-model="form.name" type="text" placeholder="Full Name" required />
          <input class="w-full bg-main mb-2 p-3 rounded-sm text-sm text-white placeholder:text-white placeholder:text-sm placeholder:font-inter" 
                 v-model="form.phone" type="tel" placeholder="Phone Number" required />
          <input class="w-full bg-main mb-2 p-3 rounded-sm text-sm text-white placeholder:text-white placeholder:text-sm placeholder:font-inter" 
                 v-model="form.email" type="email" placeholder="Email" required />
          <input class="w-full bg-main mb-2 p-3 rounded-sm text-sm text-white placeholder:text-white placeholder:text-sm placeholder:font-inter" 
                 v-model="form.password" type="password" placeholder="Password" required />
          <div class="btn text-center  mt-6">
            <button class="py-2 mb-1 px-10 cursor-pointer text-white text-sm md:text-lg font-inter font-normal bg-btn rounded-sm" 
                    type="submit">Create Account</button>
            <p class="text-sm text-main font-jost font-normal">
              If you have an account! Please <nuxt-link class="text-btn" to="/login">login.</nuxt-link>
            </p>
          </div>
        </form>
        <transition name="fade">
          <p v-if="message" class="bg-blue-900 p-3 text-center text-white font-monts font-normal text-sm">
            <span class="text-yellow-400">!!</span> {{ message }} <span class="text-yellow-400">!!</span>
          </p>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import { useAuthStore } from "@/store/auth";
import { navigateTo } from "nuxt/app";

export default {
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        password: '',
      },
      message: '',
    };
  },
  methods: {
    async register() {
      const auth = useAuthStore();
      try {
        const response = await auth.register({
          fullName: this.form.name,
          phone: this.form.phone,
          email: this.form.email,
          password: this.form.password
        });
        console.log("Register API response:", response);
        this.message = response.message + '. Please, login to access admin panel';

        setTimeout(()=>{
          this.message = ''
          navigateTo('/login')
        },2000)

      } catch (error) {
        this.message = "Registration failed!";
        setTimeout(()=>{
          this.message = ''
        },2000)
      }
    }
  }
};
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
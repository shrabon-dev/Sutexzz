<template>
    <section id="login_pg" class="py-52">
      <div class="container mx-auto flex justify-center items-center">
        <div class="login_form bg-white w-[560px] shadow-2xl ">
          <h6 class="font-inter text-white text-center text-xl bg-btn p-4">Please, Login to access your account </h6>
         <form @submit.prevent="login" class="p-10">
           <input class="w-full bg-main mb-2 p-3 rounded-sm text-sm text-white placeholder:text-white placeholder:text-sm placeholder:font-inter" v-model="email" type="email" placeholder="Email" required />
           <input class="w-full bg-main mb-2 p-3 rounded-sm text-sm text-white placeholder:text-white placeholder:text-sm placeholder:font-inter" v-model="password" type="password" placeholder="Password" required />
           <div class="btn flex gap-5 items-center mt-6">
            <button class="py-2 px-10 cursor-pointer text-white text-lg font-inter font-medium bg-btn rounded-sm" type="submit">Login</button>
            <p class="text-sm text-main font-jost font-normal">If, you have no account! Please <nuxt-link class="text-btn" to="/client/register" >Sign up.</nuxt-link> <br> <nuxt-link class="text-orange-700" to="/register" >Forget Password?.</nuxt-link></p>
           </div>
         </form>
       </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email:'',
        password:'',
      }
    },

    methods: {
      login() {
        console.log('data')
      }
    }

  }
  </script>
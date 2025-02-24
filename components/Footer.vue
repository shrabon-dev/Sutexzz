<template>
   <footer class="bg-main py-10 relative z-50">
     <div class="container mx-auto">
        <div class="ftr_tp border-y py-5 px-10 border-white/60">
            <div class="flex justify-between items-center">
                <ul class="flex gap-5">
                    <li><nuxt-link class="text-white font-normal font-jost text-base" to="/">News</nuxt-link></li> 
                    <li><nuxt-link class="text-white font-normal font-jost text-base" to="/">Services</nuxt-link></li>
                    <li><nuxt-link class="text-white font-normal font-jost text-base" to="/">Consulting</nuxt-link></li>
                    <li><nuxt-link class="text-white font-normal font-jost text-base" to="/">Affiliate</nuxt-link></li>
                    <li><nuxt-link class="text-white font-normal font-jost text-base" to="/">Contact Us</nuxt-link></li>
                </ul>
                <ul class="flex gap-5">
                    <li><nuxt-link class="text-white font-jost text-base text " to="/">Term's & Conditions</nuxt-link></li>
                    <li><nuxt-link class="text-white font-jost text-base text " to="/">Privecy Policy</nuxt-link></li>
                </ul>
            </div>
        </div>
        <div class="ftr_cntr">
            <div class="flex justify-between items-center py-5">
                <div class="cpn_prt w-1/3">
                    <img src="../assets/image/logo.png" alt="logo.png">
                    <p class="text-base pt-5 font-thin text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quod laborum eaque praesentium iusto fugiat quos delectus enim! Officiis, doloribus. </p>
                </div>
                <div class="lnk_prt w-1/3 pl-30">
                    <h6 class="font-jost font-bold text-btn text-xl">Have you any questions?</h6>
                    <div class="phone flex items-center gap-2  pt-5">
                        <div class="icon">
                            <Icon class="  text-btn text-4xl" icon="charm:messages" />
                        </div>
                        <div class="nmr font-jost font-normal text-white text-sm">
                            <a class="text-sm font-thin" href="#">+8801786119237</a> <br>
                            <a class="text-sm font-thin" href="#">shrabon@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div class="flw_prt w-1/3 pl-30 text-end">
                    <h6 class="font-jost font-bold text-btn text-xl">Follow us on</h6>
                    <ul class="inline-block text-left">
                        <li><nuxt-link class="font-jost font-normal text-white text-lg" to="">Facebook</nuxt-link></li>
                        <li><nuxt-link class="font-jost font-normal text-white text-lg" to="">Instagram</nuxt-link></li>
                        <li><nuxt-link class="font-jost font-normal text-white text-lg" to="">Twitter</nuxt-link></li>
                        <li><nuxt-link class="font-jost font-normal text-white text-lg" to="">Linkedin</nuxt-link></li>
                        <li><nuxt-link class="font-jost font-normal text-white text-lg" to="">Facebook</nuxt-link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="ftr_btm border-t border-white/60">
            <p class="text-white text-center pt-6">Copyright © 2025. <span class="text-btn ">Muhammad Shrabon Been Khattab</span> . All rights reserved.</p>
        </div>
     </div>
   </footer>
</template> 
<script setup>
import { Icon } from '@iconify/vue';
</script>
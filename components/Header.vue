<template>
    <header class="bg-transparent py-10 absolute top-0 left-0 w-full z-[999999]">
        <div class="container mx-auto">
            <div class="flex justify-between items-center">
                <div class="logo">
                    <img src="/assets/image/logo.png" alt="">
                </div>
                <div class="menu flex items-center gap-20">
                    <div class="menu_items">
                        <ul class="flex space-x-5">
                            <li> <nuxt-link class="text-white font-normal font-jost text-lg" to="/">Home</nuxt-link> </li>
                            <li> <nuxt-link class="text-white font-normal font-jost text-lg" to="/client/about">About</nuxt-link> </li>
                            <li> <nuxt-link class="text-white font-normal font-jost text-lg" to="/">Pricing</nuxt-link> </li>
                            <li> <nuxt-link class="text-white font-normal font-jost text-lg" to="/">Contact</nuxt-link> </li>
                        </ul>
                    </div>
                    <div class="menu_btn ">
                        <button class="font-jost cursor-pointer font-normal text-base text-white px-5 rounded-sm py-2 bg-btn border-2 border-btn">Sign Up</button>
                        <button class="font-jost cursor-pointer font-normal text-base text-white px-5 rounded-sm py-2 ml-5 bg-transparent border-2 border-white">Try Now</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
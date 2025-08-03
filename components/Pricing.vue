<template>
    <section id="pricing_sect" class="pb-14 md:pb-40">
        <div class="container mx-auto ">
            <Title key_t="Pricing" title="Our Pricing" description="Projectile helps you collaborate more smoothly and communicate better.  Projectile helps you collaborate 
                    more smoothly and communicate better. " />
         
            <div v-gsap.whenVisible.from="{ opacity:0,duration:2 }" class="pricing_box flex justify-between xl:justify-center flex-wrap sm:pt-10">
                <div  v-for="(item,index) in items" :class="['prc_card px-4 sm:px-10 md:px-3 mb-10 md:mb-0 lg:px-6 xl:px-10 2xl:px-14 py-10 md:py-6 xl:py-16 rounded-lg border-white/10 w-full sm:w-[100%%] md:w-[30%] lg:w-[30%]',{'md:scale-[1.1] bg-btn':item.reqomendet,'bg-white/10':!item.reqomendet}]">
                    <div class="tp border-b pb-5 border-white/40">
                        <h4 class="font-jost font-semibold md:text-base xl:text-2xl text-white">{{ item.title }} <span v-if="item.reqomendet == true" class="capitalize ml-5 bg-black text-xs xl:text-lg px-5 py-2 rounded-lg">most popular</span> </h4>
                        <p  class="font-jost pt-5 font-light text-base md:text-xs lg:text-base text-white"> {{ item.short_info  }} </p>
                    </div>
                    <div class="price py-4 xl:py-10">
                        <h2 class="font-jost md:text-2xl xl:text-5xl text-white font-bold xl:pb-3"><span class="relative top-0 xl:-top-6 text-lg">$</span>  {{ item.price  }} USD</h2>
                        <p  class="font-jost pt-1 font-light text-base  md:text-xs lg:text-base text-white"> {{ item.price_info  }}</p>
                    </div>
                    <ul  class="space-y-2">
                        <li v-for="list in item.feature_lists" class="font-jost font-normal md:text-xs inline-flex  md:w-full text-xs lg:text-xs xl:text-sm 2xl:text-base text-white md:flex items-start gap-1"><Icon class="text-2xl" icon="iconamoon:check-thin" /> {{ list }} </li>
                    </ul>
                    <div class="text-center">
                        <button :class="[{'bg-btn border-2 border-transparent px-4 xl:px-10 py-1 xl:py-3 rounded-lg mt-10 mx-auto text-center font-jost text-base xl:text-xl text-white ':!item.reqomendet,'bg-btn border-2  px-4 xl:px-10 py-1 xl:py-3 rounded-lg mt-10 mx-auto text-center font-jost text-base xl:text-xl text-white':item.reqomendet}]">
                           Start free
                        </button>
                    </div>
                </div>
                
            </div>

        </div>
    </section>
</template>
<script setup>
import { Icon } from '@iconify/vue';
import Title from './util/Title.vue';
const items = [
    {
        title:'Silver',
        short_info: 'For small startup and agency',
        price: '00',
        price_info: 'per person, per month',
        feature_lists: [
            ' Basic CRM features',
            ' 3 clients per month',
            ' 2 invoices/month per client',
        ],
        next_link: '#'
    },
    {
        title:'Gold',
        short_info: 'For small startup and agency',
        reqomendet: true,
        price: '9.99',
        price_info: 'per person, per month',
        feature_lists: [
            'Unlimited clients',
            'proposals & contracts',
            'scheduling & time tracking',
            'invoice & payments',
        ],
        next_link: '#'
    },
    {
        title:'Platinum',
        short_info: 'For small startup and agency',
        price: '19.9',
        price_info: 'per person, per month',
        feature_lists: [
            ' Everything in Pro + custom branding',
            ' priority support', 
            ' analytics reports', 
        ],
        next_link: '#'
    }
]
</script>
<template>
    <section id="feature_sect" class="py-32 relative z-14">
      <div class="container mx-auto relative z-10">
        <div class="flex justify-between">
            <div class="w-1/3">
                <div class="ftre_title">
                    <div class="title text-left pb-16">
                        <span class="bg-btn font-inter text-white text-base font-normal px-4 py-2 rounded-4xl inline-block mb-3">Integrations</span>
                        <h4 class="text-white font-inter font-bold text-4xl">We are Integrated with industry best service providers</h4>
                        <p class="font-jost text-xl text-white font-thin pt-10">Projectile helps you collaborate more smoothly and communicate better.</p>
                    </div>
                </div>
            </div>
            <div class="w-[55%]">
                <div class="fture_box flex gap-8 justify-between flex-wrap">
                    <div class="item w-[48%] bg-white/10 rounded-lg p-5 hover:bg-btn duration-300 ease-in-out group">
                        <div class="flex items-center">
                            <div class="icon group-hover:text-black group-hover:bg-white duration-300 ease-in-out text-7xl text-white rounded-lg bg-btn p-3 m-3">
                                <Icon icon="ri:quill-pen-ai-fill" />
                            </div>
                            <h6 class="title font-inter font-bold text-white text-2xl ">Customer <br> management</h6>
                        </div>
                        <p class="font-inter font-bold text-base text-white p-3 ">Monitor progress against your plans and address deviations faster.</p>
                    </div>
                    <div class="item w-[48%] bg-white/10 rounded-lg p-5 hover:bg-btn duration-300 ease-in-out group">
                        <div class="flex items-center">
                            <div class="icon group-hover:text-black group-hover:bg-white duration-300 ease-in-out text-7xl text-white rounded-lg bg-btn p-3 m-3">
                                <Icon icon="ri:pen-nib-fill" />
                            </div>
                            <h6 class="title font-inter font-bold text-white text-2xl ">Scheduling  </h6>
                        </div>
                        <p class="font-inter font-bold text-base text-white p-3 ">Monitor progress against your plans and address deviations faster.</p>
                    </div>
                    <div class="item w-[48%] bg-white/10 rounded-lg p-5 hover:bg-btn duration-300 ease-in-out group">
                        <div class="flex items-center">
                            <div class="icon group-hover:text-black group-hover:bg-white duration-300 ease-in-out text-7xl text-white rounded-lg bg-btn p-3 m-3">
                                <Icon icon="ri:mastercard-fill" />
                            </div>
                            <h6 class="title font-inter font-bold text-white text-2xl ">Quotes and  <br> estimates</h6>
                        </div>
                        <p class="font-inter font-bold text-base text-white p-3 ">Monitor progress against your plans and address deviations faster.</p>
                    </div>
                    <div class="item w-[48%] bg-white/10 rounded-lg p-5 hover:bg-btn duration-300 ease-in-out group">
                        <div class="flex items-center">
                            <div class="icon group-hover:text-black group-hover:bg-white duration-300 ease-in-out text-7xl text-white rounded-lg bg-btn p-3 m-3">
                                <Icon icon="ri:bank-card-fill"  />
                            </div>
                            <h6 class="title font-inter font-bold text-white text-2xl ">Credit card  <br> payment</h6>
                        </div>
                        <p class="font-inter font-bold text-base text-white p-3 ">Monitor progress against your plans and address deviations faster.</p>
                    </div>
                    <div class="item w-[48%] bg-white/10 rounded-lg p-5 hover:bg-btn duration-300 ease-in-out group">
                        <div class="flex items-center">
                            <div class="icon group-hover:text-black group-hover:bg-white duration-300 ease-in-out text-7xl text-white rounded-lg bg-btn p-3 m-3">
                                <Icon icon="iconamoon:badge-fill" />
                            </div>
                            <h6 class="title font-inter font-bold text-white text-2xl ">Referrals and  <br> reviews</h6>
                        </div>
                        <p class="font-inter font-bold text-base text-white p-3 ">Monitor progress against your plans and address deviations faster.</p>
                    </div>
                    <div class="item w-[48%] bg-white/10 rounded-lg p-5 hover:bg-btn duration-300 ease-in-out group">
                        <div class="flex items-center">
                            <div class="icon group-hover:text-black group-hover:bg-white duration-300 ease-in-out text-7xl text-white rounded-lg bg-btn p-3 m-3">
                                <Icon icon="iconamoon:invoice-fill" />
                            </div>
                            <h6 class="title font-inter font-bold text-white text-2xl ">Billing  and <br>  invoicing</h6>
                        </div>
                        <p class="font-inter font-bold text-base text-white p-3 ">Monitor progress against your plans and address deviations faster.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="shape absolute z-0 bottom-0 left-[-1]">
        <img class="w-full" src="../assets/image/bg_ptrn.png" alt="bg_ptrn.png">
      </div>
    </section>
</template>
<script setup>
import { Icon } from '@iconify/vue';
</script>
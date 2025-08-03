<template>
    <section id="try_sect" class="md:py-20 bg-main overflow-hidden">
      <div class="container mx-auto">
         <div v-gsap.whenVisible.from="{ opacity: 0,}" class="bg-btn rounded-xl">

             <div class="try md:flex items-center justify-between">
                 <div class="lft p-6 md:pl-14">
                     <span class="block w-14 h-2 mb-5 bg-white "></span>
                     <h4 class="font-jost text-2xl md:text-5xl text-white font-bold">Try For Free!</h4>
                 </div>
                 <div class="rgt p-10 md:p-20 md:rounded-l-[500px]  bg-[#2c524d] md:w-3/6 lg:w-2/5 2xl:w-1/4 ">
                     <div class="btn block text-center">
                         <a href="#" class="font-normal md:text-xl bg-transparent text-white font-jost border py-3 px-5 rounded-lg">Schedule a Demo</a>
                     </div>
                 </div>
             </div>
         </div>
      </div>
    </section>
</template>
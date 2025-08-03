<template>
        <div class="col-span-12 border border-panel-text-light/20 rounded-xl p-2">
           <div class="navs">
            <ul class="flex flex-wrap gap-1 md:gap-2 items-center">
              <li class=""><nuxt-link class="p-1 md:p-3 rounded inline-block text-panel-text-light bg-panel-sub-text/100 text-xs lg:text-base"  :to="`/admin/project/view/${$route.params.id}/overview`">Overview</nuxt-link></li>
              <li class=""><nuxt-link class="p-1 md:p-3 rounded inline-block text-panel-text-light bg-panel-sub-text/0 duration-300 ease-linear text-xs lg:text-base transition-all hover:bg-panel-sub-text" :to="`/admin/project/view/${$route.params.id}/milestone`">Milestone</nuxt-link></li>
              <li class=""><nuxt-link class="p-1 md:p-3 rounded inline-block text-panel-text-light bg-panel-sub-text/0 duration-300 ease-linear text-xs lg:text-base transition-all hover:bg-panel-sub-text" :to="`/admin/project/view/${$route.params.id}/members`">Members</nuxt-link></li>
              <li class=""><nuxt-link class="p-1 md:p-3 rounded inline-block text-panel-text-light bg-panel-sub-text/0 duration-300 ease-linear text-xs lg:text-base transition-all hover:bg-panel-sub-text" :to="`/admin/project/view/${$route.params.id}/delivery`">Delivery</nuxt-link></li>
              <li class=""><nuxt-link class="p-1 md:p-3 rounded inline-block text-panel-text-light bg-panel-sub-text/100 duration-300 ease-linear text-xs lg:text-base transition-all hover:bg-panel-sub-text" :to="`/admin/project/view/${$route.params.id}/invoices`">Invoices</nuxt-link></li>
            </ul>
           </div>
       </div>
</template>
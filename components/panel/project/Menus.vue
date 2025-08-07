<template>
  <div class="col-span-12 border border-panel-text-light/20 rounded-xl p-2">
    <div class="navs">
      <ul class="flex flex-wrap gap-1 md:gap-2 items-center">
        <li>
          <nuxt-link
            :to="`/admin/project/view/${$route.params.id}`"
            :class="linkClass(`/admin/project/view/${$route.params.id}`)"
          >Overview</nuxt-link>
        </li>
        <li>
          <nuxt-link
            :to="`/admin/project/view/${$route.params.id}/milestone`"
            :class="linkClass(`/admin/project/view/${$route.params.id}/milestone`)"
          >Milestone</nuxt-link>
        </li>
        <li>
          <nuxt-link
            :to="`/admin/project/view/${$route.params.id}/members`"
            :class="linkClass(`/admin/project/view/${$route.params.id}/members`)"
          >Members</nuxt-link>
        </li>
        <li>
          <nuxt-link
            :to="`/admin/project/view/${$route.params.id}/delivery`"
            :class="linkClass(`/admin/project/view/${$route.params.id}/delivery`)"
          >Delivery</nuxt-link>
        </li>
        <li>
          <nuxt-link
            :to="`/admin/project/view/${$route.params.id}/invoices`"
            :class="linkClass(`/admin/project/view/${$route.params.id}/invoices`)"
          >Invoices</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

function linkClass(path) {
  return [
    'p-1 md:px-3 md:py-[6px] rounded inline-block text-panel-text-light text-xs lg:text-base transition-all duration-300 ease-linear',
    route.path === path ? 'bg-panel-sub-text/100' : 'hover:bg-panel-sub-text bg-panel-sub-text/0'
  ].join(' ')
}
</script>

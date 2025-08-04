<template>
    <div class="breadcrumb flex bg-panel-dark gap-1 items-center shadow-md p-6 rounded-md">
      <nuxt-link  class="font-inter text-xs xl:text-base text-panel-sub-text" to="/admin">Dashboard</nuxt-link>
      <p v-if="current" class="font-inter text-xs xl:text-base text-panel-text-light"> / {{ current }} </p>
    </div>
</template>
<script>
    export default{
        props:{
            current:String,
        }
    }
</script>
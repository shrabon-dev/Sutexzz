<template>
    <div class="breadcrumb flex gap-1 items-center pb-6">
      <nuxt-link  class="font-inter text-base text-panel-sub-text" to="/admin">Dashboard</nuxt-link>
      <p v-if="current" class="font-inter text-base text-panel-text-light"> / {{ current }} </p>
    </div>
</template>
<script >
    export default{
        props:{
            current:String,
        }
    }
    
</script>
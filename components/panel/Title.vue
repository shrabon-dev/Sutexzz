<template>
    <div class="title flex gap-2 text-panel-text-light font-jost font-normal text-xs xl:text-base items-center">
        <div class="icon bg-panel-sub-dark p-2 border-panel-text-light/20 border rounded-full">
            <Icon :icon="props.icon"/>
            {{ }}
        </div>
        <div class="text">
            {{props.text}}
        </div>
    </div>
</template>
<script setup>
import { Icon, } from '@iconify/vue';

const props = defineProps({
    text:{
        type:String,
    },
    icon:{
        type:Object,
    }

})
   
</script>
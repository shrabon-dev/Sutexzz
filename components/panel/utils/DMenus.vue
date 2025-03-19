<template>
        <div class="popup w-52  bg-panel-dark border border-panel-sub-text rounded-lg absolute top-12 right-0 p-4"  :class="{ 'hover-active': isHovered }">
            <span class="w-6 h-6 block rounded-sm rotate-45 bg-panel-dark border border-r-0 border-b-0 border-panel-sub-text absolute right-[12px] top-0 -translate-y-1/2"></span>
            <ul class="space-y-2">
                <slot />
            </ul>
        </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    isHovered: Boolean
});
</script>
<style scoped>
    .popup{
        display: none;
    }
    .hover-active{
        animation: fideUpHv .81s forwards;
        display: block;
    }
    @keyframes fideUpHv {
        0%{
            display: none;
            transform: translateY(20px);
            opacity: 0;
        }
        100%{
            display: block;
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>
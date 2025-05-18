import { defineStore } from "pinia";
import { ref } from "vue";


export const useSidebarStore = defineStore('sidebar', ()=> {
    const sidebarVisible = ref(false)

    function toggleSidebar(){
        sidebarVisible.value = !sidebarVisible.value;
    }

    return {
        sidebarVisible,toggleSidebar
    }
})
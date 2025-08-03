<template>
    <div class="grid grid-cols-12 p-2 md:p-5">
        <div :class="[`sidebar fixed lg:left-0 top-2 lg:top-0 z-[999999] w-52 lg:w-fit lg:col-span-2  lg:block pr-5 lg:relative `,sidebarStore.sidebarVisible ? 'block  duration-400 ease-out left-0 opacity-100':' -left-full lg:!left-0 opacity-0 lg:opacity-100']">
            <Sidebar />
        </div>
        <div class="layouts col-span-12 lg:col-span-10 pb-5 lg:pl-24 xl:pl-0">
            <div class="relative h-fit w-full pb-24">
                <Header />
            </div>
            <main>
                <slot/>
            </main>
            <Footer/>
        </div>
    </div>
</template>

<script setup>
import Footer from '../components/panel/Footer.vue';
import Header from '../components/panel/Header.vue';
import Sidebar from '../components/panel/Sidebar.vue';
import { useAuthStore } from '~/store/auth';
import { useSidebarStore } from '../store/sidebar';
import 'sweetalert2/dist/sweetalert2.min.css'
// import 'sweetalert2/src/sweetalert2.scss'
const authStore = useAuthStore();
const sidebarStore = useSidebarStore()

onMounted(() => {
  authStore.fetchUser();
});
 
</script>
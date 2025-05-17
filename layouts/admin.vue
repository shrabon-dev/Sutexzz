<template>
    <div class="grid grid-cols-12 p-2 md:p-5">
        <div class="sidebar col-span-2 hidden lg:block pr-5 relative w-full">
            <Sidebar />
        </div>
        <div class="layouts col-span-12 lg:col-span-10 pb-5">
            <Header />
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

const authStore = useAuthStore();

onMounted(() => {
  authStore.fetchUser();
});
 
</script>
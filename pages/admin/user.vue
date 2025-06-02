<template>
<div class="w-full min-h-screen bg-panel-dark/0 text-9xl rounded-lg overflow-hidden">
        <Breadcrumb current="User Profile" />
        <UserProfile/>
    </div>
</template>
<script setup>
    import UserProfile from '../../components/panel/UserProfile.vue';
    import Breadcrumb from '../../components/panel/Breadcrumb.vue';
    definePageMeta({
        layout: 'admin',
        middleware: 'auth',
    });
</script>
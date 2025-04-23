<template>
    <div class="w-full  bg-panel-dark text-9xl rounded-lg p-6">
        <Breadcrumb current="User List" />
        <DataFilter />
    </div>
</template>
<script setup>
    import DataFilter from '../../components/panel/DataFilter.vue';
    import Breadcrumb from '../../components/panel/Breadcrumb.vue';
    definePageMeta({
        layout: 'admin',
        middleware: 'auth',
    });
</script>
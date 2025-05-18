<template>
    <div class="filter_nav">
        <div class="bg-panel-sub-text/20 border-panel-sub-text/40 border-1 p-3 rounded">
            <div class="sm:flex justify-between items-center">
                <div class="justify-between items-center gap-3 hidden sm:flex">
                <button class="bg-btn text-sm font-poppin text-white rounded px-3 flex gap-1 py-1 items-center"><Icon class="text-xl" icon="ant-design:sort-ascending-outlined" /> Sort By</button>
                </div>
                <div class="flex justify-between flex-wrap items-center gap-3">
                <button class="bg-btn text-base font-poppin text-white rounded py-1 px-3"><Icon class="text-lg" icon="uiw:printer" /></button>
                <button class="bg-btn text-sm font-poppin text-white rounded px-3 flex gap-1 py-1 items-center sm:hidden"><Icon class="text-xl" icon="ant-design:sort-ascending-outlined" /> Sort By</button>
                <button class="bg-btn text-base font-poppin text-white rounded py-1 px-3 "><Icon class="text-lg" icon="uiw:file-excel" /></button>
                 <div class="brd bg-btn rounded overflow-hidden flex justify-between items-center gap-1 lg:gap-3 w-full sm:w-fit">
                    <button class="bg-btn text-base font-poppin text-white rounded py-1 px-3 "><Icon class="text-lg" icon="uiw:left" /></button>
                    <div class="bg-btn h-auto flex gap-1 justify-between text-base font-poppin text-white rounded px-3 ">
                        <button class="text-sm px-1 py-1">1</button>
                        <button class="text-sm px-1 py-1">2</button>
                        <button class="text-sm px-1 py-1">...</button>
                        <button class="text-sm px-1 py-1">50</button>
                    </div>
                    <button class="bg-btn text-base font-poppin text-white rounded py-1 px-3 "><Icon class="text-lg" icon="uiw:right" /></button>
                 </div>
                </div>
            </div>
        </div>
    </div>
    <div class="filter_datas">
        <table class="w-full">
            <thead>
                <tr class="bg-panel-sub-text/20">
                    <th class="text-base text-white font-poppin font-normal text-left ">A</th>
                    <th class="text-base text-white font-poppin font-normal text-left ">B</th>
                    <th class="text-base text-white font-poppin font-normal text-left ">C</th>
                    <th class="text-base text-white font-poppin font-normal text-left ">D</th>
                    <th class="text-base text-white font-poppin font-normal text-left ">E</th>
                </tr>
            </thead>
            <tbody>
                <tr >
                    <td class="text-base text-white font-poppin font-normal ">F</td>
                    <td class="text-base text-white font-poppin font-normal ">F</td>
                    <td class="text-base text-white font-poppin font-normal ">F</td>
                    <td class="text-base text-white font-poppin font-normal ">F</td>
                    <td class="text-base text-white font-poppin font-normal ">F</td>
                </tr>
                <tr >
                    <td class="text-base text-white font-poppin font-normal ">G</td>
                    <td class="text-base text-white font-poppin font-normal ">G</td>
                    <td class="text-base text-white font-poppin font-normal ">G</td>
                    <td class="text-base text-white font-poppin font-normal ">G</td>
                    <td class="text-base text-white font-poppin font-normal ">G</td>
                </tr>
                <tr >
                    <td class="text-base text-white font-poppin font-normal ">H</td>
                    <td class="text-base text-white font-poppin font-normal ">H</td>
                    <td class="text-base text-white font-poppin font-normal ">H</td>
                    <td class="text-base text-white font-poppin font-normal ">H</td>
                    <td class="text-base text-white font-poppin font-normal ">H</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { Icon } from '@iconify/vue';
</script>
<style scoped>
table{
    display: inline-table;
    
}
td,th{
    padding: 10px 20px !important;
    margin: 10px 0;
    border: 1px solid #a27b5c8a;
}
</style>
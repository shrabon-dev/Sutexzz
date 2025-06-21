<template>
        <div class="grid grid-cols-12 py-4 gap-4">
            <div class="col-span-6">
              <ProfileCard/>
            </div>
            <div class="col-span-6 lg:col-span-3">
              <ProfileAccountStatus/>
            </div>
            <div class="col-span-12 lg:col-span-3">
              <NeedHelp/>
            </div>
            <div class="col-span-12">
              <ProfilePersonalInfo/>
            </div>
        </div> 
</template>
<script setup>
import { useAuthStore } from '../../store/auth';
import NeedHelp from './utils/NeedHelp.vue';
import ProfileAccountStatus from './utils/ProfileAccountStatus.vue';
import ProfileCard from './utils/ProfileCard.vue';
import ProfilePersonalInfo from './utils/ProfilePersonalInfo.vue';


</script>
<template>
  <div class="profile__card bg-panel-dark w-full p-6 rounded-lg shadow-md text-white">
    <h2 class="text-xl font-semibold mb-4 border-b border-panel-sub-text/20 pb-2 text-left flex items-center gap-5">
    <Icon class="text-6xl inline-block" icon="material-symbols-light:article-person-rounded" />  Personal Information
    </h2>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
  <!-- Basic Info -->
  <div>
    <p class="text-sm text-gray-400">Full Name</p>
    <p class="text-base font-medium">{{ user['fullName'] || '-- Empty Data --' }}</p>
  </div>

  <div>
    <p class="text-sm text-gray-400">Username</p>
    <p class="text-base font-medium">{{ user['username'] || '-- Empty Data --' }}</p>
  </div>

  <div>
    <p class="text-sm text-gray-400">Email Address</p>
    <p class="text-base font-medium">{{ user['email'] || '-- Empty Data --' }}</p>
  </div>

  <div>
    <p class="text-sm text-gray-400">Phone Number</p>
    <p class="text-base font-medium">{{ user['phone'] || '-- Empty Data --' }}</p>
  </div>

  <div>
    <p class="text-sm text-gray-400">Date of Birth</p>
    <p class="text-base font-medium">{{ user['dateOfBirth'] || '-- Empty Data --' }}</p>
  </div>

  <div>
    <p class="text-sm text-gray-400">Gender</p>
    <p class="text-base font-medium">{{ user['gender'] || '-- Empty Data --' }}</p>
  </div>

  <div>
    <p class="text-sm text-gray-400">Nationality</p>
    <p class="text-base font-medium">{{ user['nationality'] || '-- Empty Data --' }}</p>
  </div>

  <div>
    <p class="text-sm text-gray-400">Marital Status</p>
    <p class="text-base font-medium">{{ user['maritalStatus'] || '-- Empty Data --' }}</p>
  </div>

  <!-- Address -->
  <div class="sm:col-span-2">
    <p class="text-sm text-gray-400">Address</p>
    <p class="text-base font-medium">{{ user['address'] || '-- Empty Data --' }}</p>
  </div>

  <div class="sm:col-span-2">
    <p class="text-sm text-gray-400">City & Postal Code</p>
    <p class="text-base font-medium">{{ user['postalCode'] || '-- Empty Data --' }}</p>
  </div>

  <!-- Occupation / Other -->
  <div>
    <p class="text-sm text-gray-400">Occupation</p>
    <p class="text-base font-medium">{{ user['occupation'] || '-- Empty Data --' }}</p>
  </div>

  <div>
    <p class="text-sm text-gray-400">Organization</p>
    <p class="text-base font-medium">{{ user['organization'] || '-- Empty Data --' }}</p>
  </div>

  <div>
    <p class="text-sm text-gray-400">Joined Date</p>
    <p class="text-base font-medium">{{ user['joinedAt'] || '-- Empty Data --' }}</p>
  </div>
</div>

  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';
import { useAuthStore } from '../../../store/auth';

// const user = {
//   fullName: "Johnathan Edward Doe",
//   username: "johndoe_92",
//   email: "john.doe@example.com",
//   phone: "+1 (234) 567-8901",
//   dob: "1992-04-15",
//   gender: "Male",
//   nationality: "American",
//   maritalStatus: "Married",
//   address: "456 Oak Street, Suite 12B",
//   city: "San Francisco",
//   postalCode: "94107",
//   occupation: "Corporate Lawyer",
//   organization: "LegalEase Associates",
//   joinedAt: "2020-09-12"
// };
const authStore = useAuthStore();
const user = computed(() => authStore.user);

onMounted(() => {
  if (!authStore.user) {
    authStore.fetchUser();
  }
});
</script>

<style scoped>

</style>

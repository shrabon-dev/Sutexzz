<template>
  <div class="profile__card bg-panel-dark w-full p-6 rounded-lg shadow-md text-white">
    <h2 class="text-xl font-semibold mb-4 border-b border-panel-sub-text/20 pb-2 text-left flex items-center gap-5">
    <Icon class="text-6xl inline-block" icon="material-symbols-light:article-person-rounded" />  Personal Information
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
      <!-- Basic Info -->
      <div>
        <p class="text-sm text-gray-400">Full Name</p>
        <p class="text-base font-medium">{{ user.fullName }}</p>
      </div>

      <div>
        <p class="text-sm text-gray-400">Username</p>
        <p class="text-base font-medium">{{ user.username }}</p>
      </div>

      <div>
        <p class="text-sm text-gray-400">Email Address</p>
        <p class="text-base font-medium">{{ user.email }}</p>
      </div>

      <div>
        <p class="text-sm text-gray-400">Phone Number</p>
        <p class="text-base font-medium">{{ user.phone }}</p>
      </div>

      <div>
        <p class="text-sm text-gray-400">Date of Birth</p>
        <p class="text-base font-medium">{{ user.dob }}</p>
      </div>

      <div>
        <p class="text-sm text-gray-400">Gender</p>
        <p class="text-base font-medium">{{ user.gender }}</p>
      </div>

      <div>
        <p class="text-sm text-gray-400">Nationality</p>
        <p class="text-base font-medium">{{ user.nationality }}</p>
      </div>

      <div>
        <p class="text-sm text-gray-400">Marital Status</p>
        <p class="text-base font-medium">{{ user.maritalStatus }}</p>
      </div>

      <!-- Address -->
      <div class="sm:col-span-2">
        <p class="text-sm text-gray-400">Address</p>
        <p class="text-base font-medium">{{ user.address }}</p>
      </div>

      <div class="sm:col-span-2">
        <p class="text-sm text-gray-400">City & Postal Code</p>
        <p class="text-base font-medium">{{ user.city }}, {{ user.postalCode }}</p>
      </div>

      <!-- Occupation / Other -->
      <div>
        <p class="text-sm text-gray-400">Occupation</p>
        <p class="text-base font-medium">{{ user.occupation }}</p>
      </div>

      <div>
        <p class="text-sm text-gray-400">Organization</p>
        <p class="text-base font-medium">{{ user.organization }}</p>
      </div>

      <div>
        <p class="text-sm text-gray-400">Joined Date</p>
        <p class="text-base font-medium">{{ user.joinedAt }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue/dist/iconify.js';

const user = {
  fullName: "Johnathan Edward Doe",
  username: "johndoe_92",
  email: "john.doe@example.com",
  phone: "+1 (234) 567-8901",
  dob: "1992-04-15",
  gender: "Male",
  nationality: "American",
  maritalStatus: "Married",
  address: "456 Oak Street, Suite 12B",
  city: "San Francisco",
  postalCode: "94107",
  occupation: "Corporate Lawyer",
  organization: "LegalEase Associates",
  joinedAt: "2020-09-12"
};
</script>

<style scoped>

</style>

<template>
  <div class="settings-page min-h-screen">
     <Breadcrumb current="User Setting" />

    <div class="grid grid-cols-12 gap-6 mt-4 bg-panel-dark p-5 rounded-md">
        <!-- Profile Picture Upload -->
      <div class="flex items-center  md:col-span-6 lg:col-span-12 space-x-6  bg-panel-dark rounded-md mb-10">
        <div class="w-32 h-32">
         <!-- Show preview image if uploaded -->
          <img
            v-if="preview"
            :src="preview" 
            alt="Profile"
            class="w-full h-full object-cover rounded-sm border border-gray-300 dark:border-gray-600"
          />

          <!-- Fallback default image -->
          <img
            v-else
            src="/assets/image/pfl.jpg" 
            alt="Profile"
            class="w-full h-full object-cover rounded-sm border border-gray-300 dark:border-gray-600"
          />
        </div>
        <div>
          <input type="file" @change="onFileChange" accept="image/*" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
          <p class="text-xs text-gray-400 mt-1">JPG, PNG up to 2MB</p>
        </div>
          <button class="text-sm bg-panel-sub-text py-1 px-4 font-medium rounded-sm border border-brdr text-panel-text-light font-jost cursor-pointer mt-2">Save Profile</button>
      </div>
      <!-- Profile Settings -->
      <section class="border-panel-sub-text/20 col-span-12  md:col-span-6 lg:col-span-4 border dark:bg-panel-dark rounded-xl p-6 shadow-md">
        <h2 class="text-lg text-panel-text-light font-semibold mb-4">Profile Settings</h2>
        <div class="space-y-4">
          <SettingItem label="Full Name" value="John Doe" />
          <SettingItem label="Email" value="admin@saasapp.com" />
          <SettingItem label="Phone" value="+1 234 567 890" />
        </div>
          <button class="text-sm bg-panel-sub-text py-1 px-4 font-medium rounded-sm border border-brdr text-panel-text-light font-jost cursor-pointer mt-5">Save Changes</button>

      </section>

      <!-- Account Settings -->
      <section class="bg-panel-dark border border-panel-sub-text/20 dark:bg-panel-dark  col-span-12 md:col-span-6 lg:col-span-4 rounded-xl p-6 shadow-md">
        <h2 class="text-lg text-panel-text-light font-semibold mb-4">Account Settings</h2>
        <div class="space-y-4">
          <SettingItem label="Username" value="admin_user" />
          <SettingItem label="Password" value="••••••••" />
          <button class="text-sm bg-panel-sub-text py-1 px-4 font-medium rounded-sm border border-brdr text-panel-text-light font-jost cursor-pointer mt-12">Change Password</button>
        </div>
      </section>

      <!-- Notification Preferences -->
      <section class="bg-panel-dark border border-panel-sub-text/20 dark:bg-panel-dark rounded-xl p-6 shadow-md col-span-12 md:col-span-6 lg:col-span-4">
        <h2 class="text-lg font-semibold text-panel-text-light mb-4">Notification Preferences</h2>
        <div class="space-y-4">
          <label class="flex items-center space-x-3">
            <input type="checkbox" checked class="form-checkbox h-5 w-5 text-blue-600" />
            <span class="text-panel-text-light">Email Notifications</span>
          </label>
          <label class="flex items-center space-x-3">
            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
            <span class="text-panel-text-light">Push Notifications</span>
          </label>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth',
})

import { ref } from 'vue'

const user = ref({
  fullName: 'John Doe',
  username: 'admin_user',
  email: 'admin@example.com',
  phone: '+123456789',
  dob: '1992-01-01',
  gender: 'Male',
  profileImage: `/assets/image/pfl.jpg`, // fallback image
})

const preview = ref(null)

function onFileChange(event) {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      preview.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

function updateProfile() {
  console.log('Saving user data:', user.value)
  alert('Profile updated successfully!')
} 

import SettingItem from '~/components/settings/SettingItem.vue'
import Breadcrumb from '../../components/panel/Breadcrumb.vue';
</script>

<template>
  <div class="settings-page ">
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
      <section class="border-panel-sub-text/20 col-span-12  md:col-span-6 lg:col-span-6 border dark:bg-panel-dark rounded-xl p-6 shadow-md">
        <h2 class="text-lg text-panel-text-light font-semibold mb-10">Profile Settings</h2>
        <div class="flex gap-10">
          <div class="w-1/2">
            <div class="space-y-4">
              <SettingItem field="fullName" :userId="user['_id']" label="Full Name" :value="user['fullName']" />
              <SettingItem field="email" :userId="user['_id']" label="Email" :value="user['email']" />
              <SettingItem field="phone" :userId="user['_id']" label="Phone" :value="user['phone']"  />
              <SettingItem field="dateOfBirth" :userId="user['_id']" label="Date Of Birth" :value="user['dateOfBirth'] || 'add value'" />
              <SettingItem field="gender" :userId="user['_id']" label="Gender" :value="user['gender'] || 'add value'" />
              <SettingItem field="nationality" :userId="user['_id']" label="Nationality" :value="user['nationality'] || 'add value'"  />
            </div>
          </div>
          <div class="w-1/2">
                <div class="space-y-4">
                  <SettingItem field="maritalStatus" :userId="user['_id']" label="Marital Status" :value="user['maritalStatus'] || 'add value'" />
                  <SettingItem field="address" :userId="user['_id']" label="Address" :value="user['address'] || 'add value'" />
                  <SettingItem field="cityPostalCode" :userId="user['_id']" label="City Postal Code" :value="user['cityPostalCode'] || 'add value'"  />
                  <SettingItem field="occupation" :userId="user['_id']" label="Occupation" :value="user['occupation'] || 'add value'" />
                  <SettingItem field="organization" :userId="user['_id']" label="Organization" :value="user['organization'] || 'add value'" />
                  <SettingItem field="joinedDate" :userId="user['_id']" label="Joined Date" :value="user['joinedDate'] || 'add value'"  />
                </div>
          </div>

        </div>
          <button class="text-sm bg-panel-sub-text py-1 px-4 font-medium rounded-sm border border-brdr text-panel-text-light font-jost cursor-pointer mt-5">Save Changes</button>

      </section>

      <!-- Account Settings -->
      <section class="bg-panel-dark border border-panel-sub-text/20 dark:bg-panel-dark  col-span-12 md:col-span-6 lg:col-span-3 rounded-xl p-6 shadow-md">
        <h2 class="text-lg text-panel-text-light font-semibold mb-10">Password Change</h2>
        <div class="space-y-4">
          <SettingItem field="username" :userId="user['_id']" label="Old Password" value="••••••••" />
          <SettingItem :userId="user['_id']" label="New Password" value="••••••••" />
          <button class="text-sm bg-panel-sub-text py-1 px-4 font-medium rounded-sm border border-brdr text-panel-text-light font-jost cursor-pointer mt-12">Save Password</button>
        </div>
      </section>

      <!-- Notification Preferences -->
      <section class="bg-panel-dark border border-panel-sub-text/20 dark:bg-panel-dark rounded-xl p-6 shadow-md col-span-12 md:col-span-6 lg:col-span-3">
        <h2 class="text-lg font-semibold text-panel-text-light mb-10">Notification Preferences</h2>
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

import { computed, onMounted, ref } from 'vue'
import SettingItem from '~/components/settings/SettingItem.vue'
import Breadcrumb from '../../components/panel/Breadcrumb.vue';
import { useAuthStore } from '../../store/auth'
// const user = ref({
//   fullName: 'John Doe',
//   username: 'admin_user',
//   email: 'admin@example.com',
//   phone: '+123456789',
//   dob: '1992-01-01',
//   gender: 'Male',
//   profileImage: `/assets/image/pfl.jpg`, // fallback image
// })

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



const authStore = useAuthStore();
const user = computed(() => authStore.user);

onMounted(() => {
  if (!authStore.user) {
    authStore.fetchUser();
  }
});

// const userData = ref([]);
// onMounted(async () => {
//   try {
//     const res = await fetch(`/api/User/${user.value._id}`)  
//     const data = await res.json();
//     userData.value = data;
//     console.log('📦 Mongoose Models:', userData.value);
//   } catch (error) {
//     console.error('❌ Failed to fetch models:', error);
//   }
// });
</script>

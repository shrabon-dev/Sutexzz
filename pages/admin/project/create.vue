<template>
  <div class="settings-page min-h-screen">
    <Breadcrumb current="Project Management" />

    <div class="grid grid-cols-12 gap-6 mt-4 bg-panel-dark p-5 rounded-md">
      <section
        class="border-panel-sub-text/20 col-span-12 border dark:bg-panel-dark rounded-xl p-6 shadow-md"
      >
        <h2 class="text-xl border-b border-brdr/20 pb-2 text-panel-text-light font-semibold mb-10"><Icon icon="material-symbols-light:add-chart-outline" class="text-4xl inline-block"/> Create Project</h2>

        <div class="flex gap-10 w-full">
          <!-- Left Column -->
          <div class="w-1/2 pr-5 flex flex-col gap-4">
            <label class="text-sm font-medium text-panel-text-light">Project Title</label>
            <input type="text" class="input_style" v-model="form.projectTitle" placeholder="Enter project title" />

            <label class="text-sm font-medium text-panel-text-light">Project Code</label>
            <input type="text" readonly class="input_style" v-model="form.projectCode" placeholder="Auto-generated " />
            <p class="text-panel-sub-text/70 text-xs -mt-4">Auto-generated</p>

            <label class="text-sm font-medium text-panel-text-light">Description</label>
            <textarea rows="3" class="input_style" v-model="form.description" placeholder="Describe the project" />

            <label class="text-sm font-medium text-panel-text-light">Industry</label>
            <select class="input_style" v-model="form.industry">
              <option value="">Select industry</option>
              <option>IT</option>
              <option>Legal</option>
              <option>Construction</option>
              <option>Marketing</option>
              <option>Other</option>
            </select>

            <label class="text-sm font-medium text-panel-text-light">Project Status</label>
            <select class="input_style" v-model="form.status">
              <option value="draft">Draft</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="onhold">On Hold</option>
            </select>

            <label class="text-sm font-medium text-panel-text-light">Client Username</label>
            <input type="text" class="input_style" v-model="form.clientUsername" placeholder="Client's @username" />

            <label class="text-sm font-medium text-panel-text-light">Assigned Team</label>
            <input type="text" class="input_style" v-model="form.assignedTeam" placeholder="Comma-separated Username" />

            <label class="text-sm font-medium text-panel-text-light">Project Manager</label>
            <input type="text" class="input_style" v-model="form.projectManager" placeholder="Team Manager's @username" />

            <label class="text-sm font-medium text-panel-text-light">Start Date</label>
            <input type="date" class="input_style" v-model="form.startDate" />
          </div>

          <!-- Right Column -->
          <div class="w-1/2 flex flex-col gap-4">
            <label class="text-sm font-medium text-panel-text-light">Due Date</label>
            <input type="date" class="input_style" v-model="form.dueDate" />

            <label class="text-sm font-medium text-panel-text-light">Budget Amount</label>
            <input type="number" class="input_style" v-model="form.budgetAmount" placeholder="e.g. 5000" />

            <label class="text-sm font-medium text-panel-text-light">Currency</label>
            <select class="input_style" v-model="form.currency">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="BDT">BDT</option>
            </select>

            <label class="text-sm font-medium text-panel-text-light">Billing Type</label>
            <select class="input_style" v-model="form.billingType">
              <option value="fixed">Fixed</option>
              <option value="hourly">Hourly</option>
              <option value="milestone">Milestone</option>
            </select>

            <label class="text-sm font-medium text-panel-text-light">Hourly Rate</label>
            <input type="number" class="input_style" v-model="form.hourlyRate" placeholder="Rate per hour" />

            <label class="text-sm font-medium text-panel-text-light">Attach Files</label>
            <input type="file" multiple class="input_style" @change="onFileChange" />
            <div v-if="preview" class="text-xs text-gray-400 mt-1">Preview Loaded</div>

            <label class="text-sm font-medium text-panel-text-light">Internal Notes</label>
            <textarea rows="2" class="input_style" v-model="form.internalNotes" placeholder="Private notes for team" />

            <label class="text-sm font-medium text-panel-text-light">Timezone</label>
            <input type="text" class="input_style" v-model="form.timezone" placeholder="e.g., Asia/Dhaka" />

            <label class="text-sm font-medium text-panel-text-light">Preferred Language</label>
            <select class="input_style" v-model="form.language">
              <option value="en">English</option>
              <option value="bn">Bangla</option>
            </select>
          </div>
        </div>

        <button
          @click="createProject"
          class="text-sm bg-panel-sub-text py-1 px-4 font-medium rounded-sm border border-brdr text-panel-text-light font-jost cursor-pointer mt-5"
        >
          Save Changes
        </button>
      </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth',
})
import { Icon } from '@iconify/vue';
import { ref, computed, onMounted } from 'vue'
import Breadcrumb from '~/components/panel/Breadcrumb.vue'
import { useAuthStore } from '~/store/auth'
import { useRouter } from 'vue-router';

const authStore = useAuthStore()
const user = computed(() => authStore.user)
const preview = ref(null)
const router = useRouter();
const pcode =  'PRJ-' + Math.floor(1000 + Math.random() * 9000);

// Removed isValidObjectId helper function as ObjectIds are no longer required for clientUsername, assignedTeam, projectManager.
// 🧠 Project Form
const form = ref({
  projectTitle: '',
  projectCode: pcode,
  description: '',
  industry: '',
  status: 'draft',
  clientUsername: '',
  assignedTeam: '', // Comma-separated string of User IDs
  projectManager: '',
  startDate: '',
  dueDate: '',
  budgetAmount: null,
  currency: 'USD',
  billingType: 'fixed',
  hourlyRate: null,
  internalNotes: '',
  timezone: 'UTC',
  language: 'en'
})



onMounted(() => {
 
  if (!authStore.user) {
    authStore.fetchUser().then(() => {
      if (user.value && user.value._id) {
        // Set clientUsername and projectManager from fetched user ID
        // No ObjectId validation needed here since schema now accepts strings
        form.value.clientUsername = user.value._id;
        form.value.projectManager = user.value._id;
      }
    });
  } else {
    if (user.value && user.value._id) {
      // Set clientUsername and projectManager from existing user ID
      // No ObjectId validation needed here since schema now accepts strings
      form.value.projectManager = user.value.username;
    }
  }

  if (!form.value.timezone) {
    form.value.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
})

const onFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      preview.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const createProject = async () => {
  try {
    // Removed ObjectId validation for clientUsername and projectManager
    // as the schema now accepts string types for these fields.

    // Process assignedTeam: split the string into an array of strings.
    // No ObjectId validation/filtering needed here.
    const assignedTeamArray = form.value.assignedTeam
      .split(',')
      .map(id => id.trim())
      .filter(id => id !== ''); // Still filter out empty strings to avoid empty array elements

    const payload = {
      ...form.value,
      assignedTeam: assignedTeamArray, // Use the array of strings
      startDate: form.value.startDate,
      dueDate: form.value.dueDate,
      freelancerId: user.value?._id,
      projectCode: pcode,
    };

    // Remove empty values for optional fields if not set, to avoid Mongoose validation errors
    if (!payload.projectCode) delete payload.projectCode;
    if (payload.budgetAmount === null) delete payload.budgetAmount;
    if (payload.hourlyRate === null) delete payload.hourlyRate;
    if (!payload.internalNotes) delete payload.internalNotes;
    if (!payload.contractId) delete payload.contractId;
    if (!payload.files || payload.files.length === 0) delete payload.files;

    const response = await $fetch(`/api/project`, {
      method: 'POST',
      body: payload,
    });

    console.log('Project created:', response);
    alert('✅ Project created successfully!');

    // Reset the form after successful submission
    form.value = {
      projectTitle: '',
      projectCode: '',
      description: '',
      industry: '',
      status: 'draft',
      clientUsername: '', // Reset with user ID or empty string
      assignedTeam: '',
      projectManager: user.value?.username || '', // Reset with user ID or empty string
      startDate: '',
      dueDate: '',
      budgetAmount: null,
      currency: 'USD',
      billingType: 'fixed',
      hourlyRate: null,
      internalNotes: '',
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: 'en'
    };
    preview.value = null; // Clear file preview

  } catch (error) {
    console.error('Failed to create project:', error);
    let errorMessage = '❌ Failed to create project.';
    if (error.data && error.data.detail) {
      errorMessage += ` Details: ${error.data.detail}`;
    } else if (error.message) {
      errorMessage += ` Details: ${error.message}`;
    }
    alert(errorMessage);
  }
}
</script>

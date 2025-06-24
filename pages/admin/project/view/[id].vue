<template>
  <div class="settings-page min-h-screen">
    <Breadcrumb current="View Project" />

    <div class="grid grid-cols-12 gap-6 mt-4 bg-panel-dark p-5 rounded-md">
      <section
        class="border-panel-sub-text/20 col-span-12 border dark:bg-panel-dark rounded-xl p-6 shadow-md"
      >
        <h2 class="text-xl border-b border-brdr/20 pb-2 text-panel-text-light font-semibold mb-10">
          <Icon icon="material-symbols:visibility" class="text-3xl inline-block mr-2"/> View Project Details
        </h2>

        <div v-if="loadingProjectData" class="text-panel-text-light text-center py-10">
          <p>Loading project details...</p>
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-panel-sub-text inline-block mt-4"></div>
        </div>
        <div v-else-if="!form.projectTitle" class="text-panel-text-light text-center py-10">
          <p>Project not found or an error occurred.</p>
          <button @click="router.back()" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">Go Back</button>
        </div>
        <div v-else class="flex flex-col md:flex-row gap-10 w-full">
          <div class="w-full md:w-1/2 pr-0 md:pr-5 flex flex-col gap-6">
            <div class="flex flex-col">
              <label class="text-xs font-medium text-panel-sub-text mb-1">Project Title</label>
              <p class="text-panel-text-light text-lg font-bold bg-panel-sub-text/10 p-3 rounded-md">{{ form.projectTitle || 'N/A' }}</p>
            </div>

            <div class="flex flex-col">
              <label class="text-xs font-medium text-panel-sub-text mb-1">Project Code</label>
              <p class="text-panel-text-light text-base bg-panel-sub-text/10 p-3 rounded-md">{{ form.projectCode || 'N/A' }}</p>
            </div>

            <div class="flex flex-col">
              <label class="text-xs font-medium text-panel-sub-text mb-1">Description</label>
              <div class="text-panel-text-light text-base bg-panel-sub-text/10 p-3 rounded-md whitespace-pre-wrap">{{ form.description || 'No description provided.' }}</div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex flex-col">
                <label class="text-xs font-medium text-panel-sub-text mb-1">Industry</label>
                <p class="text-panel-text-light text-base bg-panel-sub-text/10 p-3 rounded-md">{{ form.industry || 'N/A' }}</p>
              </div>

              <div class="flex flex-col">
                <label class="text-xs font-medium text-panel-sub-text mb-1">Project Status</label>
                <span :class="getStatusBadgeClass(form.status)" class="px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center justify-center h-full">
                  {{ form.status ? form.status.charAt(0).toUpperCase() + form.status.slice(1) : 'N/A' }}
                </span>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex flex-col">
                <label class="text-xs font-medium text-panel-sub-text mb-1">Start Date</label>
                <p class="text-panel-text-light text-base bg-panel-sub-text/10 p-3 rounded-md">{{ formatDate(form.startDate) }}</p>
              </div>

              <div class="flex flex-col">
                <label class="text-xs font-medium text-panel-sub-text mb-1">Due Date</label>
                <p class="text-panel-text-light text-base bg-panel-sub-text/10 p-3 rounded-md">{{ formatDate(form.dueDate) }}</p>
              </div>
            </div>
          </div>

          <div class="w-full md:w-1/2 flex flex-col gap-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex flex-col">
                <label class="text-xs font-medium text-panel-sub-text mb-1">Client Username</label>
                <p class="text-panel-text-light text-base bg-panel-sub-text/10 p-3 rounded-md">{{ form.clientUsername ? `@${form.clientUsername}` : 'N/A' }}</p>
              </div>

              <div class="flex flex-col">
                <label class="text-xs font-medium text-panel-sub-text mb-1">Project Manager</label>
                <p class="text-panel-text-light text-base bg-panel-sub-text/10 p-3 rounded-md">{{ form.projectManager ? `@${form.projectManager}` : 'N/A' }}</p>
              </div>
            </div>

            <div class="flex flex-col">
              <label class="text-xs font-medium text-panel-sub-text mb-1">Assigned Team</label>
              <div class="text-panel-text-light text-base bg-panel-sub-text/10 p-3 rounded-md flex flex-wrap gap-2">
                <span v-if="form.assignedTeam && form.assignedTeam.length > 0">
                  <span v-for="member in form.assignedTeam" :key="member" class="bg-blue-600/30 text-blue-300 text-xs px-2 py-1 rounded-full">
                    @{{ member }}
                  </span>
                </span>
                <span v-else class="text-panel-sub-text/70">No team assigned.</span>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex flex-col">
                <label class="text-xs font-medium text-panel-sub-text mb-1">Budget Amount</label>
                <p class="text-panel-text-light text-base bg-panel-sub-text/10 p-3 rounded-md">{{ formatCurrency(form.budgetAmount, form.currency) }}</p>
              </div>

              <div class="flex flex-col">
                <label class="text-xs font-medium text-panel-sub-text mb-1">Billing Type</label>
                <p class="text-panel-text-light text-base bg-panel-sub-text/10 p-3 rounded-md">{{ form.billingType ? form.billingType.charAt(0).toUpperCase() + form.billingType.slice(1) : 'N/A' }}</p>
              </div>
            </div>

            <div class="flex flex-col" v-if="form.billingType === 'hourly'">
              <label class="text-xs font-medium text-panel-sub-text mb-1">Hourly Rate</label>
              <p class="text-panel-text-light text-base bg-panel-sub-text/10 p-3 rounded-md">{{ formatCurrency(form.hourlyRate, form.currency) }}</p>
            </div>

            <div class="flex flex-col">
              <label class="text-xs font-medium text-panel-sub-text mb-1">Attached Files</label>
              <div class="text-panel-text-light text-base bg-panel-sub-text/10 p-3 rounded-md">
                <ul v-if="form.files && form.files.length > 0">
                  <li v-for="(file, index) in form.files" :key="index" class="mb-1">
                    <a :href="file.url || '#'" target="_blank" class="text-blue-400 hover:underline">
                      <Icon icon="material-symbols:attach-file" class="inline-block mr-1"/>{{ file.name || `File ${index + 1}` }}
                    </a>
                  </li>
                </ul>
                <p v-else class="text-panel-sub-text/70">No files attached.</p>
              </div>
            </div>

            <div class="flex flex-col">
              <label class="text-xs font-medium text-panel-sub-text mb-1">Internal Notes</label>
              <div class="text-panel-text-light text-base bg-panel-sub-text/10 p-3 rounded-md whitespace-pre-wrap">{{ form.internalNotes || 'No internal notes.' }}</div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex flex-col">
                <label class="text-xs font-medium text-panel-sub-text mb-1">Timezone</label>
                <p class="text-panel-text-light text-base bg-panel-sub-text/10 p-3 rounded-md">{{ form.timezone || 'N/A' }}</p>
              </div>

              <div class="flex flex-col">
                <label class="text-xs font-medium text-panel-sub-text mb-1">Preferred Language</label>
                <p class="text-panel-text-light text-base bg-panel-sub-text/10 p-3 rounded-md">{{ form.language === 'en' ? 'English' : form.language === 'bn' ? 'Bangla' : 'N/A' }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 text-center">
            <button @click="router.back()" class="text-sm bg-blue-600 hover:bg-blue-700 py-2 px-6 font-medium rounded-md text-white transition-colors">
              <Icon icon="material-symbols:arrow-back-ios-new-rounded" class="inline-block mr-1"/> Back to Projects
            </button>
            <button @click="router.push(`/admin/project/edit/${projectId}`)" class="ml-4 text-sm bg-green-600 hover:bg-green-700 py-2 px-6 font-medium rounded-md text-white transition-colors">
              <Icon icon="material-symbols:edit" class="inline-block mr-1"/> Edit Project
            </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth',
});

import { Icon } from '@iconify/vue';
import { ref, computed, onMounted } from 'vue';
import Breadcrumb from '~/components/panel/Breadcrumb.vue';
import { useAuthStore } from '~/store/auth';
import { useRoute, useRouter } from 'vue-router';

const authStore = useAuthStore();
const user = computed(() => authStore.user);
const route = useRoute();
const router = useRouter();

const projectId = route.params.id;
const loadingProjectData = ref(true);

const form = ref({
  freelancerId: null,
  projectTitle: '',
  projectCode: '',
  description: '',
  industry: '',
  status: 'draft',
  clientUsername: '',
  assignedTeam: [],  
  projectManager: '',
  startDate: '',
  dueDate: '',
  budgetAmount: null,
  currency: 'USD',
  billingType: 'fixed',
  hourlyRate: null,
  internalNotes: '',
  timezone: 'UTC',
  language: 'en',
  files: [], 
});

onMounted(async () => {
  if (!authStore.user) {
    await authStore.fetchUser();
  }

  if (projectId) {
    await fetchProjectDetails(projectId);
  } else {
    console.warn('No project ID provided for viewing.');
    loadingProjectData.value = false;
    router.back();
  }
});

const fetchProjectDetails = async (id) => {
  try {
    loadingProjectData.value = true;

    const response = await $fetch(`/api/query/update/Project/${id}`);
    console.log('Fetched project details:', response);
    if (response.data) {

      form.value = {
        ...response.data,
        assignedTeam: Array.isArray(response.data.assignedTeam)
          ? response.data.assignedTeam
          : (typeof response.data.assignedTeam === 'string'
              ? response.data.assignedTeam.split(',').map(item => item.trim()).filter(item => item !== '')
              : []),
        startDate: response.data.startDate ? new Date(response.data.startDate).toISOString().split('T')[0] : '',
        dueDate: response.data.dueDate ? new Date(response.data.dueDate).toISOString().split('T')[0] : '',
        freelancerId: response.data.freelancerId || user.value?._id,
        files: response.data.files || [],
      };
    } else {
      console.error('Project not found for ID:', id);
      router.back();
    }
  } catch (error) {
    console.error('Error fetching project details:', error);
    router.back();
  } finally {
    loadingProjectData.value = false;
  }
};

const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  try {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  } catch (e) {
    return dateString; 
  }
};

const formatCurrency = (amount, currencyCode) => {
  if (amount === null || amount === undefined) return 'N/A';
  try {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currencyCode || 'USD',
      minimumFractionDigits: 0, 
      maximumFractionDigits: 2, 
    }).format(amount);
  } catch (e) {
    return `${amount} ${currencyCode || ''}`;  
  }
};

const getStatusBadgeClass = (status) => {
  switch (status) {
    case 'active':
      return 'bg-green-500/20 text-green-300';
    case 'completed':
      return 'bg-blue-500/20 text-blue-300';
    case 'onhold':
      return 'bg-yellow-500/20 text-yellow-300';
    case 'draft':
    default:
      return 'bg-gray-500/20 text-gray-300';
  }
};
</script>

<style scoped>
.settings-page {
  background-color: #1a1a1a; 
  color: #e0e0e0;  
  font-family: 'Inter', sans-serif;  
}

.bg-panel-dark {
  background-color: #2a2a2a;  
}

.text-panel-text-light {
  color: #e0e0e0; 
}

.text-panel-sub-text {
  color: #b0b0b0; 
}

.border-brdr\/20 {
  border-color: rgba(255, 255, 255, 0.1);  
}

.bg-panel-sub-text\/10 {
  background-color: rgba(176, 176, 176, 0.1); 
  border: 1px solid rgba(255, 255, 255, 0.05); 
}

</style>

<template>
  <div class="settings-page min-h-screen">
    <Breadcrumb current="Edit Project" />

    <div class="grid grid-cols-12 gap-6 mt-4 bg-panel-dark p-5 rounded-md">
      <section
        class="border-panel-sub-text/20 col-span-12 border dark:bg-panel-dark rounded-xl p-6 shadow-md"
      >
        <h2 class="text-xl border-b border-brdr/20 pb-2 text-panel-text-light font-semibold mb-10"><Icon icon="material-symbols-light:add-chart-outline" class="text-3xl inline-block"/> Edit Project</h2>

        <div v-if="loadingProjectData" class="text-panel-text-light text-center py-10">
          Loading project details...
        </div>
        <div v-else-if="!form.projectTitle" class="text-panel-text-light text-center py-10">
          Project not found or an error occurred.
        </div>
        <div v-else class="flex gap-10 w-full">
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
          @click="updateProject"
          class="text-sm bg-panel-sub-text py-1 px-4 font-medium rounded-sm border border-brdr text-panel-text-light font-jost cursor-pointer mt-5"
        >
          Update Project
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
import { ref, computed, onMounted, watch } from 'vue'
import Breadcrumb from '~/components/panel/Breadcrumb.vue'
import { useAuthStore } from '~/store/auth'
import { useRoute, useRouter } from 'vue-router';  

const authStore = useAuthStore()
const user = computed(() => authStore.user)
const preview = ref(null)
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
  assignedTeam: '',
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
});

watch(user, (newUser) => {
  if (newUser && newUser._id && !form.value.freelancerId) {
    form.value.freelancerId = newUser._id;
  }
}, { immediate: true });

onMounted(async () => {
  if (!authStore.user) {
    await authStore.fetchUser();
  }

  if (projectId) {
    await fetchProjectDetails(projectId);
  } else {
    loadingProjectData.value = false;
    alert('No project ID provided for editing.');
    router.back(); 
  }

  if (!form.value.timezone) {
    form.value.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
});

const fetchProjectDetails = async (id) => {
  try {
    loadingProjectData.value = true;
    const response = await $fetch(`/api/query/update/Project/${id}`); // Fetch a single project
    console.log('Fetched project details:', response.data);
    if (response.data) {
      // Map fetched data to form. Ensure date formats are compatible with input type="date"
      form.value = {
        ...response.data,
        assignedTeam: response.data.assignedTeam ? response.data.assignedTeam.join(', ') : '', // Convert array back to comma-separated string
        startDate: response.data.startDate ? new Date(response.data.startDate).toISOString().split('T')[0] : '',
        dueDate: response.data.dueDate ? new Date(response.data.dueDate).toISOString().split('T')[0] : '',
        // Ensure freelancerId is set for the form, although not editable
        freelancerId: response.data.freelancerId || user.value?._id,
      };
    } else {
      alert('Project not found.');
      router.back(); // Go back if project not found
    }
  } catch (error) {
    console.error('Error fetching project details:', error);
    alert('Failed to load project details.');
    router.back();
  } finally {
    loadingProjectData.value = false;
  }
};

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

const updateProject = async () => {
  try {
    console.log('update project id: ',projectId)
    if (!form.value.freelancerId) {
      alert('Error: User ID (freelancerId) is not available. Cannot update project.');
      return;
    }
    if (!projectId) {
      alert('Error: Project ID is missing for update operation.');
      return;
    }

    const assignedTeamArray = form.value.assignedTeam
      .split(',')
      .map(id => id.trim())
      .filter(id => id !== '');

    const payload = {
      ...form.value,
      assignedTeam: assignedTeamArray,
    };

    if (payload.budgetAmount === null) delete payload.budgetAmount;
    if (payload.hourlyRate === null) delete payload.hourlyRate;
    if (!payload.internalNotes) delete payload.internalNotes;
    if (!payload.contractId) delete payload.contractId;
    if (!payload.files || payload.files.length === 0) delete payload.files;

    console.log('Payload for update:', payload);

    const response = await $fetch(`/api/query/update/Project/${projectId}`, {   
      method: 'PUT', 
      body: payload,
    });

    console.log('Project updated:', response);
    alert('✅ Project updated successfully!');
    router.push('/admin/project/list');  

  } catch (error) {
    console.error('Failed to update project:', error);
    let errorMessage = '❌ Failed to update project.';
    if (error.data && error.data.detail) {
      errorMessage += ` Details: ${error.data.detail}`;
    } else if (error.message) {
      errorMessage += ` Details: ${error.message}`;
    }
    alert(errorMessage);
  }
};
</script>
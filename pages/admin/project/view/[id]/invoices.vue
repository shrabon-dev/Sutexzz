<template>
  <div class="settings-page min-h-screen">
    <Breadcrumb current="View Project" />

    <div class="grid grid-cols-12 gap-6 mt-4 bg-panel-dark p-5 rounded-xl">
       <!-- Project Menus -->
       <Menus/>
       <!-- Task Added Form -->
       <div class="col-span-12 xl:col-span-6">
         <InvoicesList :projectID="projectId"/>
       </div>
       <!-- Task Board -->
       <div class="col-span-12 xl:col-span-6">
         <InvoicePreview/>
       </div>
      
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth',
});

import { ref, computed, onMounted } from 'vue';
import Breadcrumb from '~/components/panel/Breadcrumb.vue';
import { useAuthStore } from '~/store/auth';
import { useRoute, useRouter } from 'vue-router';
import InvoicePreview from '../../../../../components/panel/project/InvoicePreview.vue';
import InvoicesList from '../../../../../components/panel/project/InvoicesList.vue'; 
import Menus from '../../../components/panel/project/Menus.vue';

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
 

</style>

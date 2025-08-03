<template>
  <div class="settings-page min-h-screen">
    <Breadcrumb current="View Project" />

    <div class="grid grid-cols-12 gap-6 mt-4 bg-panel-dark p-5 rounded-xl">
        <!-- Project Menus -->
        <Menus/>
        <!-- owner Profile -->
        <div class="col-span-4">
        <ProjectOwnerCard
        project-title="Blog Content Strategy & Writing"
        project-description="Creating engaging blog content for a new startup in the wellness niche."
        client-name="Wellness Hub"
        freelancer-name="Emily White"
        start-date="2025-06-25"
        industry="Content Marketing"
        :required-skills="['Copywriting', 'SEO', 'Content Strategy']"
        contact-email="emily.w@example.com"
      />
       </div>
       <div class="top col-span-8">
        <div class="bg-panel-ddark/0 border border-panel-text-light/20 rounded-xl p-5">
          <h2 class="font-medium text-4xl text-panel-text-light font-jost flex gap-5 items-center mb-10"><Icon icon="mingcute:flash-fill"/> {{ form.projectTitle }}</h2>
          <div class="flex flex-wrap items-stretch">
            <div class="w-3/5">
              <div class="flex flex-wrap">
                  <div class="w-1/3 p-2">
                    <div class="sml_crd h-full border-2 p-4 rounded-xl bg-panel-sub-dark border-panel-sub-dark">
                        <div class="status text-center h-full">
                          <h6 class="font-jost text-lg text-panel-text-light bg-panel-sub-dark/50 inline-block rounded-full px-3 py-1">Status</h6>
                          <p  class="font-jost text-lg font-medium capitalize text-panel-text-light pt-3 flex gap-3 justify-center items-center">{{ form.status }}
                          <span class="font-jost text-sm shadow-2xl border border-violet-500 bg-violet-700  text-violet-100 inline-flex w-10 h-10 justify-center items-center rounded-full">57%</span>
                          </p>
                        </div>
                    </div>
                  </div>
                  <div class="w-1/3 p-2">
                    <div class="sml_crd h-full border-2 p-4 rounded-xl bg-panel-sub-dark border-panel-sub-dark">
                      <div class="task h-full text-center">
                        <h6 class="font-jost text-lg text-panel-text-light bg-panel-sub-dark/50 inline-block rounded-full px-3 py-1">Total Task</h6>
                        <h6 class="font-jost text-lg font-bold text-panel-text-light pt-3">15/56</h6>
                      </div>
                    </div>
                  </div>
                  <div class="w-1/3 p-2">
                    <div class="sml_crd h-full border-2  p-4 rounded-xl bg-panel-sub-dark border-panel-sub-dark">
                      <div class="task h-full text-center">
                        <h6 class="font-jost text-lg text-panel-text-light bg-panel-sub-dark/50 inline-block rounded-full px-3 py-1">Due Date</h6>
                        <h6 class="font-jost text-lg font-bold text-panel-text-light pt-3">{{ form.dueDate }}</h6>
                      </div>
                    </div>
                  </div>
                  <div class="w-1/2 p-2">
                    <div class="sml_crd h-full border-2  p-4 rounded-xl bg-panel-sub-dark border-panel-sub-dark">
                      <div class="task h-full text-center">
                        <h6 class="font-jost text-lg text-panel-text-light bg-panel-sub-dark/50 inline-block rounded-full px-3 py-1">Budget Spent</h6>
                        <h6 class="font-jost text-lg font-bold text-panel-text-light pt-3">BDT: {{ form.budgetAmount }} TK.</h6>
                      </div>
                    </div>
                  </div>
                  <div class="w-1/2 p-2">
                    <div class="sml_crd h-full  p-4 rounded-xl bg-panel-sub-dark">
                      <div class="task h-full text-center">
                        <h6 class="font-jost text-lg text-panel-text-light bg-panel-sub-dark/50 inline-block rounded-full px-3 py-1">Project Code</h6>
                        <h6 class="font-jost text-lg font-bold text-blue-200 pt-3">{{ form.projectCode }}</h6>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div class="w-2/5 p-2">
                  <div class="sml_crd h-full border-2 p-4 rounded-xl bg-panel-sub-dark border-panel-sub-dark">
                      <div class="status text-left h-full">
                        <h6 class="font-jost text-lg text-panel-text-light bg-panel-sub-dark/50 inline-flex rounded-full py-1 items-center gap-2"><span class="p-1 inline-block border border-panel-text-light/20 rounded-full "><Icon icon="mdi:users-group" /></span> Team Membars</h6>
                        <div  class="font-jost text-lg font-medium capitalize text-panel-text-light pt-3 flex gap-3 items-center">
                            <span class="font-jost text-xs shadow-2xl border border-emerald-400 bg-emerald-600  text-violet-100 inline-flex w-6 h-6 justify-center items-center rounded-full">1</span>
                            <span class="text-sm ">Muhammad Usman Kholil</span>
                            <span class="font-jost text-xs shadow-2xl border border-orange-400/50 bg-panel-sub-text text-violet-100 inline-block px-2 py-1 rounded-full">Member</span>
                        </div>
                        <div  class="font-jost text-lg font-medium capitalize text-panel-text-light pt-3 flex gap-3 items-center">
                            <span class="font-jost text-xs shadow-2xl border border-emerald-400 bg-emerald-600  text-violet-100 inline-flex w-6 h-6 justify-center items-center rounded-full">2</span>
                            <span class="text-sm "> Khairul Haque</span>
                            <span class="font-jost text-xs shadow-2xl border border-orange-400/50 bg-panel-sub-text text-violet-100 inline-block px-2 py-1 rounded-full">Member</span>
                        </div>
                        <div  class="font-jost text-lg font-medium capitalize text-panel-text-light pt-3 flex gap-3 items-center">
                            <span class="font-jost text-xs shadow-2xl border border-emerald-400 bg-emerald-600  text-violet-100 inline-flex w-6 h-6 justify-center items-center rounded-full">3</span>
                            <span class="text-sm ">Misfaul</span>
                            <span class="font-jost text-xs shadow-2xl border border-orange-400/50 bg-panel-sub-text text-violet-100 inline-block px-2 py-1 rounded-full">Member</span>
                        </div>
                        <div  class="font-jost text-lg font-medium capitalize text-panel-text-light pt-3 flex gap-3 items-center">
                            <span class="font-jost text-xs shadow-2xl border border-emerald-400 bg-emerald-600  text-violet-100 inline-flex w-6 h-6 justify-center items-center rounded-full">4</span>
                            <span class="text-sm ">Tariqujjaman Khondokar</span>
                            <span class="font-jost text-xs shadow-2xl border border-orange-400/50 bg-panel-sub-text text-violet-100 inline-block px-2 py-1 rounded-full">Member</span>
                        </div>
                      </div>
                  </div>
            </div>
       
          </div>

        </div>

       </div>
   
       <!-- Task Added Form -->
       <div class="col-span-4">
         <TaskAddCard/>
       </div>
       <!-- Task Board -->
       <div class="col-span-8">
         <TaskBoard/>
       </div>
     
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth',
});

import { Icon, } from '@iconify/vue';
import { ref, computed, onMounted } from 'vue';
import Breadcrumb from '~/components/panel/Breadcrumb.vue';
import { useAuthStore } from '~/store/auth';
import { useRoute, useRouter } from 'vue-router';
import Title from '../../../../components/panel/Title.vue';
import TaskAddCard from '../../../../components/panel/cards/TaskAddCard.vue';
import TaskBoard from '../../../../components/panel/cards/TaskBoard.vue';
import ProjectOwnerCard from '../../../../components/panel/cards/ProjectOwnerCard.vue';
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

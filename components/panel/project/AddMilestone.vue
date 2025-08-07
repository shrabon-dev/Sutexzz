<template>
              <div class="card border border-panel-text-light/20 rounded-xl p-5">
              <Title icon="ic:round-add-task" text="New Milestone Create" />
              <div class="form mt-10">
                <div class="grp mb-5 block">
                  <label for="" class="block text-xs xl:text-lg pb-2 font-jost text-panel-text-light">Title</label>
                  <input type="text" placeholder="ex: responsive fix" v-model="formRef.title" class="border border-panel-text-light/40 text-base p-2 font-jost focus:outline-0 text-panel-text-light rounded-lg w-full">
                </div>
                <div class="grp mb-5 block">
                  <label for="" class="block text-xs xl:text-lg pb-2 font-jost text-panel-text-light">Budget</label>
                  <input type="number" placeholder="budget: $60.00" v-model="formRef.budget" class="border border-panel-text-light/40 text-base p-2 font-jost focus:outline-0 text-panel-text-light rounded-lg w-full">
                </div>
                <div class="grp mb-5 block">
                  <label for="" class="block text-xs xl:text-lg pb-2 font-jost text-panel-text-light">Release Date</label>
                  <input type="date" v-model="formRef.releaseDate" class="border border-panel-text-light/40 text-base p-2 font-jost focus:outline-0 text-panel-text-light rounded-lg w-full">
                </div>
               
                <div class="btn text-end">
                  <button @click="handleMilestone" class="border border-panel-text-light/40 cursor-pointer text-base px-2 py-1 hover:bg-panel-sub-text duration-300 transition-all font-jost text-panel-text-light rounded bg-panel-sub-dark">Add Milestone</button>
                </div>
              </div>
          </div>
</template>
<script setup>
import { reactive, onMounted, ref } from 'vue';
import Title from '../Title.vue';
import { useNuxtApp } from 'nuxt/app';
import { isLoadStore } from '../../../store/isLoad';

const isload = isLoadStore();
const { $swal } = useNuxtApp();

const props = defineProps({
  pDetails: {
    type: Object,
    required: true,
  },
});

const formRef = reactive({
  projectID: '',
  title: '',
  releaseDate: '',
  budget: '',
  whoIssue:'',
  whoGet: '',
  status: 'inprogress',
});

watch(
  () => props.pDetails,
  (newVal) => {
    if (newVal && newVal._id) {
      formRef.projectID = newVal._id;
      formRef.whoGet = newVal.freelancerId;
      formRef.whoIssue = newVal.clientUsername;
    }
  },
  { immediate: true } // Run right away if already available
);

 

const showAlert = ({ value, type }) => {
  const Toast = $swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.style.zIndex = 9999999;
      toast.onmouseenter = Toast.stopTimer;
      toast.onmouseleave = Toast.resumeTimer;
    }
  });

  Toast.fire({
    icon: type,
    title: value,
  });
};

const handleMilestone = async () => {
  try {
    const response = await $fetch('/api/query/Milestone', {
      method: 'POST',
      body: formRef,
    });

    isload.toggleStatus();
    showAlert({ type: 'success', value: 'Assigned a New Milestone' });
    console.log('milestone: ', response)
  } catch (error) {
    showAlert({ type: 'error', value: error?.data?.message || error.message || 'Something went wrong' });
    console.error('Error:', error);
  }
};
</script>

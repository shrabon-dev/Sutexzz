<template>
              <div class="card border border-panel-text-light/20 rounded-xl p-2 md:p-5">
              <Title icon="ic:round-add-task" text="New Task Add" />
              <div class="form mt-10">
                <div class="grp mb-5 block">
                  <label for="" class="block text-lg pb-2 font-jost text-panel-text-light">Title</label>
                  <input hidden  type="text" v-model="formRef.projectID" placeholder="ex: responsive fix" class="border border-panel-text-light/40 text-base p-2 font-jost focus:outline-0 text-panel-text-light rounded-lg w-full">
                  <input type="text" placeholder="ex: responsive fix" v-model="formRef.title" class="border border-panel-text-light/40 text-base p-2 font-jost focus:outline-0 text-panel-text-light rounded-lg w-full">
                </div>
                <div class="grp mb-5 block">
                  <label for="" class="block text-lg pb-2 font-jost text-panel-text-light">End Time</label>
                  <input type="date" placeholder="ex: responsive fix" v-model="formRef.endDate" class="border border-panel-text-light/40 text-base p-2 font-jost focus:outline-0 text-panel-text-light rounded-lg w-full">
                </div>
                <div class="grp mb-5 block">
                  <label for="" class="block text-lg pb-2 font-jost text-panel-text-light">Attach files</label>
                  <input type="file" placeholder="ex: responsive fix" v-on:change="formRef.media" class="border border-panel-text-light/40 text-base p-2 font-jost focus:outline-0 text-panel-text-light rounded-lg w-full">
                </div>
                <div class="grp mb-5 block">
                  <label for="" class="block pb-2 text-lg font-jost text-panel-text-light">Requirement</label>
                  <textarea  placeholder="ex: Requirement" v-model="formRef.requirement" class=" border border-panel-text-light/40 text-base p-2 font-jost focus:outline-0 text-panel-text-light rounded-lg w-full" name="" id=""></textarea>
                </div>
                <div class="btn text-end">
                  <button @click="handleTask" class="border border-panel-text-light/40 cursor-pointer text-base px-2 py-1 hover:bg-panel-sub-text duration-300 transition-all font-jost text-panel-text-light rounded bg-panel-sub-dark">Add Task</button>
                </div>
              </div>
          </div>
</template>
<script setup>
import { ref } from 'vue';
import Title from '../Title.vue';
import { useNuxtApp } from 'nuxt/app';
import { isLoadStore } from '../../../store/isLoad';
   const isload = isLoadStore()

const props = defineProps({
  projectID: {
    required:true,
    type:String

  },
})

const { $swal } = useNuxtApp()

const showAlert = ({value,type}) => {
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
const formRef = ref({
  projectID:props.projectID,
  title:'',
  endDate:'',
  media:'',
  requirement:'',
})

const handleTask = async () => {
  try {
    const response = await $fetch('/api/query/Task', {
      method: 'POST',
      body: formRef.value,
    });

    formRef.value = {
      projectID:props.projectID,
      title:'',
      endDate:'',
      media:'',
      requirement:'',
    }

     isload.toggleStatus()

    showAlert({ type: 'success', value: 'Assigned a New Task' });
    console.log('Task Value :->', formRef.value);
    console.log('Response Value :->', response);
  } catch (error) {
    showAlert({ type: 'error', value: error?.data?.message || error.message || 'Something went wrong' });
    console.error('Error:', error);
  }
};




</script>
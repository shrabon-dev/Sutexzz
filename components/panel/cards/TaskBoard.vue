<template>
              <div class="card border border-panel-text-light/20 rounded-xl p-2 md:p-5">
              <Title icon="ic:sharp-leaderboard" text="Task Board" />
              <div class="flex flex-wrap flex-col-reverse sm:flex-row  mt-10">
                <div :key="taskDetails.id" class="w-full sm:w-3/5 lg:w-1/2 xl:w-3/5">
                      <h6 class="text-base font-jost text-panel-text-light font-medium mt-5 sm:mt-0">Full Details</h6>
                      <div class="borad  mt-5">
                      <ul>
                        <li class="sm:flex lg:block xl:flex justify-content-between items-start bg-panel-sub-dark rounded-lg p-3 mb-2">
                          <span class="img mb-2 md:mb-0 w-20">
                            <img class="w-10 h-10 rounded-full border border-panel-sub-text/50 object-cover" src="https://img.freepik.com/premium-photo/young-man-isolated-blue_1368-124991.jpg?semt=ais_hybrid&w=740" alt="user_img">
                          </span>
                          <div class="gp sm:w-3/5 lg:w-full xl:w-3/5">
                            <span class="title block font-jost text-lg text-panel-text-light font-medium mt-2 md:mt-0 ">{{ taskDetails.title }}</span>
                            <span class="req block  font-jost text-base text-panel-text-light/50 font-normal max-h-52 overflow-auto my-5"> {{ taskDetails.requirement }} </span>
                             
                            <div class="files">
                              <span v-if="taskDetails.media" class="border cursor-pointer m-1 border-panel-text-light/20 bg-[#57685c] rounded-full px-4 py-1 inline-flex items-center gap-1 text-panel-text-light"><Icon icon="ic:outline-file-download"/>{{ taskDetails.media }}</span> 
                            </div>
                          </div>
                          <span class="action sm:w-2/6 pl-10">
                            <div class="end_dte">
                              <p class="border-l-2 border-panel-sub-text text-orange-400 p-1  rounded text-base font-medium font-jost text-start pl-2 ">End Date 
                                <span class="block text-panel-text-light font-normal pt-1">{{ new Date(taskDetails.endDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })  }}</span>
                              </p>
                            </div>

                            <span class="drp_menu"></span>
                          </span>
                        </li>
                      </ul>
                      </div>
                </div>
                <div class="w-full sm:w-2/5 lg:w-1/2 xl:w-2/5 sm:pl-2 md:pl-5">
                  <h6 class="text-base font-jost text-panel-text-light font-medium text-end">All Task Lists</h6>
                  <div class="task_list border border-panel-text-light/20 mt-5 p-1 md:p-5 rounded-xl">
                    <ul v-if="tasks && tasks.length" class="text-end max-h-92 overflow-auto">
                      <li v-for="(value, index) in tasks" :key="tasks.id" @click="handleTaskDetails(value)" class="text-xs md:text-base mb-2 cursor-pointer hover:bg-orange-500 transition-all ease-linear duration-300 font-jost bg-panel-sub-dark pl-5 rounded-full text-panel-text-light font-medium text-end block">{{ value.title }}<span class="ml-10 rounded-full px-5 py-2 inline-block bg-panel-dark shadow-lg border-l-2 border-orange-500">Task #{{ index+1 }}</span></li>
                    </ul>
                     <NoData v-else message="You have no tasks yet" subtext="Start by creating a new task." />
                  </div>
                </div>
              </div>
              
          </div>
</template>
<script setup>
import { onMounted } from 'vue';
import Title from '../Title.vue';
import { Icon, } from '@iconify/vue';
import { isLoadStore } from '../../../store/isLoad';
import NoData from '../NoData.vue';

const isLoad = isLoadStore();

const props = defineProps({
  projectID: {
    required:true,
    type:String
  },
})

const tasks = ref([]);
const taskDetails = ref([]); 
const initialLoad = async () =>{
   const response = await fetch(`/api/task/${props.projectID}`)
    const data = await response.json();
    tasks.value = data.data
    taskDetails.value = data.data[0];
}
onMounted(initialLoad)

watch(() => isLoad.value, () => {
  initialLoad();
});

const handleTaskDetails = (value) =>{
  taskDetails.value = value;
}


</script>
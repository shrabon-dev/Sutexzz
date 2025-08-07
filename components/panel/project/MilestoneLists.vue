<template>
            <div class="card border border-panel-text-light/20 rounded-xl p-5">
              <Title icon="ic:sharp-leaderboard" text="All Milestone Board" />
              <div class="overflow-x-auto w-auto md:w-full mt-10">
                <table v-if="milestons && milestons.length" class="max-w-full min-w-4xl border overflow-y-auto border-panel-text-light/20 rounded-lg table">
                  <thead class="bg-primary">
                    <tr class="bg-panel-sub-dark">
                      <th class="th_style text-left">SL.</th>
                      <th class="th_style text-left">Title</th>
                      <th class="th_style text-left">Budget</th>
                      <th class="th_style text-left">Client</th>
                      <th class="th_style text-left">Release Date</th>
                      <th class="th_style text-left">Status</th>
                      <th class="th_style text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody class=" overflow-y-auto">
                    <tr v-for=" (data, index) in milestons" class="border-b border-brdr/10">
                      <td class="td_style">#ML00{{ ++index }}</td>
                      <td class="td_style">{{ data.title }}</td>
                      <td class="td_style ">
                        <span class="border-b border-panel-sub-text">
                          ${{ data.budget }}
                        </span>
                      </td>
                      <td class="td_style">{{ data.whoIssue }}</td>
                      <td class="td_style">{{ data.releaseDate }}</td>
                      <td class="td_style">
                         <button  :class="data.status == 'inprogress' ? 'inprogres':
                         data.status == 'completed' ? 'completed':''">{{ data.status ?'In Progress' :'Completed' }}</button>
                      </td>
                      <td class="td_style">
                          <button  class="view">View</button>
                          <button  class="download ml-1"><Icon icon="tabler:cloud-download" class="inline-block"/> Invoice</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <NoData v-else message="You have no tasks yet" subtext="Start by creating a new task." />
              </div>
          </div>
</template>
<script setup>
import Title from '../Title.vue';
import { Icon, } from '@iconify/vue';

 


import { isLoadStore } from '../../../store/isLoad';
import { onMounted, watch } from 'vue';
import NoData from '../NoData.vue';

const isLoad = isLoadStore();

const props = defineProps({
  projectID: {
    required:true,
    type:String
  },
})

const milestons = ref([]);
const milestonsDetails = ref([]); 
const initialLoad = async () =>{
   const response = await fetch(`/api/milestone/${props.projectID}`)
    const data = await response.json();
    milestons.value = data.data
    milestonsDetails.value = data.data[0];

 
}
onMounted(initialLoad)

watch(() => isLoad.value, () => {
  initialLoad();
});



</script>
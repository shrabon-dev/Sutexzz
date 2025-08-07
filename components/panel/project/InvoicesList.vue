<template>
  <div class="card border border-panel-text-light/20 rounded-xl p-5">
    <Title icon="ic:baseline-group" text="Invoices List" />
    <div class="mt-10">
      <table class="w-full border h-[400px] overflow-y-auto border-panel-text-light/20 rounded-lg">
        <thead class="bg-primary">
          <tr class="bg-panel-sub-dark">
            <th class="th_style text-left">ID</th>
            <th class="th_style text-left">Invoice</th>
            <th class="th_style text-left">Budget</th>
            <th class="th_style text-left">Release Date</th>
            <th class="th_style text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(invoce,index) in milestons" :key="invoce.id" class="border-b border-brdr/10">
            <td class="td_style">#INV100{{ ++index }}</td>
            <td class="td_style">{{ invoce.title }}</td>
            <td class="td_style">${{ invoce.budget }}</td>
            <td class="td_style">{{ invoce.releaseDate }}</td>
            <td class="td_style">
              <button class="download"> <Icon icon="tabler:cloud-download" class="inline-block"/> download</button>
              <button class="ml-1 inprogres"> Preview</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import Title from '../Title.vue'
import { Icon } from '@iconify/vue'

 
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

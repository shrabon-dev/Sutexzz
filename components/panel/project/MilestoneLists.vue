<template>
              <div class="card border border-panel-text-light/20 rounded-xl p-5">
              <Title icon="ic:sharp-leaderboard" text="All Milestone Board" />
              <div class=" mt-10">
                <table class="w-full border h-[400px] overflow-y-auto border-panel-text-light/20 rounded-lg table">
                  <thead class="bg-primary">
                    <tr class="bg-panel-sub-dark">
                      <th class="th_style text-left">SL.</th>
                      <th class="th_style text-left">Title</th>
                      <th class="th_style text-left">Budget</th>
                      <th class="th_style text-left">Issue Date</th>
                      <th class="th_style text-left">Expire Date</th>
                      <th class="th_style text-left">Status</th>
                      <th class="th_style text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody class="h-[400px] overflow-y-auto">
                    <tr v-for=" data in datas" class="border-b border-brdr/10">
                      <td class="td_style">{{ data.id }}</td>
                      <td class="td_style">{{ data.title }}</td>
                      <td class="td_style">{{ data.budget }}</td>
                      <td class="td_style">{{ data.issueDate }}</td>
                      <td class="td_style">{{ data.expireDate }}</td>
                      <td class="td_style">
                         <button  :class="data.status == 'Pending' ? 'pending':
                         data.status == 'Completed' ? 'completed':
                         data.status == 'In Progress' ? 'inprogres':''">{{ data.status }}</button>
                      </td>
                      <td class="td_style">
                          <button  class="view">View</button>
                          <button  class="download ml-1"><Icon icon="tabler:cloud-download" class="inline-block"/> Invoice</button>
                      </td>
                    </tr>
                     
                  </tbody>
                </table>
       
      
              </div>
              
          </div>
</template>
<script setup>
import Title from '../Title.vue';
import { Icon, } from '@iconify/vue';

const datas = [
  {
    id: 1,
    title: "Fix login bug",
    budget: "$2,500",
    issueDate: "2025-07-25",
    expireDate: "2025-08-01",
    status: "In Progress"
  },
  {
    id: 2,
    title: "Implement dark mode",
    budget: "$2,500",
    issueDate: "2025-07-27",
    expireDate: "2025-08-03",
    status: "Pending"
  },
  {
    id: 3,
    title: "Update user profile UI",
    budget: "$2,500",
    issueDate: "2025-07-20",
    expireDate: "2025-07-27",
    status: "Completed"
  },
  {
    id: 4,
    title: "Add email verification",
    budget: "$2,500",
    issueDate: "2025-07-29",
    expireDate: "2025-08-05",
    status: "In Progress"
  },
  {
    id: 5,
    title: "Optimize database queries",
    budget: "$2,500",
    issueDate: "2025-08-03",
    expireDate: "2025-08-10",
    status: "Pending"
  },
  {
    id: 6,
    title: "Implement 2FA",
    budget: "$2,500",
    issueDate: "2025-08-01",
    expireDate: "2025-08-08",
    status: "In Progress"
  },
  {
    id: 7,
    title: "Redesign landing page",
    budget: "$2,500",
    issueDate: "2025-08-08",
    expireDate: "2025-08-15",
    status: "Pending"
  },
  {
    id: 8,
    title: "Write unit tests",
    budget: "$2,500",
    issueDate: "2025-07-13",
    expireDate: "2025-07-20",
    status: "Completed"
  },
  {
    id: 9,
    title: "Set up CI/CD pipeline",
    budget: "$2,500",
    issueDate: "2025-08-05",
    expireDate: "2025-08-12",
    status: "In Progress"
  },
  {
    id: 10,
    title: "Fix mobile menu",
    budget: "$2,500",
    issueDate: "2025-07-28",
    expireDate: "2025-08-04",
    status: "Pending"
  }
];



</script>
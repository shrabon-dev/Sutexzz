<template>
  <div class="card border border-panel-text-light/20 rounded-xl p-5">
    <Title icon="ic:baseline-group" text="Project Members" />
    <div class="mt-10 overflow-x-auto w-auto md:w-full">
      <table class="max-w-full min-w-xl border h-[400px] overflow-y-auto border-panel-text-light/20 rounded-lg">
        <thead class="bg-primary">
          <tr class="bg-panel-sub-dark">
            <th class="th_style text-left">ID</th>
            <th class="th_style text-left">Handover Date</th>
            <th class="th_style text-left">Status</th>
            <th class="th_style text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="member in members" :key="member.id" class="border-b border-brdr/10">
            <td class="td_style">{{ member.id }}</td>
            <td class="td_style">{{ member.handover }}</td>

            <td class="td_style">
              <span
                :class="member.status === 'Approved' ? 'completed' :
                        member.status === 'Rejected' ? 'delete' : ''"
              >
                {{ member.status }}
              </span>
            </td>
            <td class="td_style">
              <button class="download"> <Icon icon="tabler:cloud-download" class="inline-block"/> download</button>
              <button class="ml-1 inprogres"> Approve</button>
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

const members = [
  {
    id: 1,
    handover: "2024-11-10",
    status: "Rejected"
  },
  {
    id: 2,
    handover: "2025-01-15",
    status: "Approved"
  },
  {
    id: 3,
    handover: "2024-12-01",
    status: "Rejected"
  },
  {
    id: 4,
    handover: "2025-02-20",
    status: "Approved"
  },
  {
    id: 5,
    handover: "2025-03-01",
    status: "Rejected"
  },
  {
    id: 6,
    handover: "2025-03-25",
    status: "Approved"
  },
  {
    id: 7,
    handover: "2025-04-10",
    status: "Approved"
  },
  {
    id: 8,
    handover: "2025-05-12",
    status: "Rejected"
  },
  {
    id: 9,
    handover: "2025-06-05",
    status: "Rejected"
  },
  {
    id: 10,
    handover: "2025-06-28",
    status: "Approved"
  }
]
</script>

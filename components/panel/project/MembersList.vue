<template>
  <div class="card border border-panel-text-light/20 rounded-xl p-5">
    <Title icon="ic:baseline-group" text="Project Members" />
    <div class="mt-10 overflow-x-auto w-auto md:w-full">
      <table class="max-w-full min-w-4xl  border h-[400px] overflow-y-auto border-panel-text-light/20 rounded-lg">
        <thead class="bg-primary">
          <tr class="bg-panel-sub-dark">
            <th class="th_style text-left">ID</th>
            <th class="th_style text-left">Name</th>
            <th class="th_style text-left">Role</th>
            <th class="th_style text-left">Joined Date</th>
            <th class="th_style text-left">Contact</th>
            <th class="th_style text-left">Status</th>
            <th class="th_style text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="member in members" :key="member.id" class="border-b border-brdr/10">
            <td class="td_style">{{ member.id }}</td>
            <td class="td_style">{{ member.name }}</td>
            <td class="td_style">{{ member.role }}</td>
            <td class="td_style">{{ member.joinedDate }}</td>
            <td class="td_style">{{ member.contact }}</td>
            <td class="td_style">
              <span
                :class="member.status === 'Active' ? 'completed' :
                        member.status === 'Inactive' ? 'pending' :
                        member.status === 'Invited' ? 'inprogres' : ''"
              >
                {{ member.status }}
              </span>
            </td>
            <td class="td_style">
              <button class="view">View</button>
              <button class="ml-1 download"><Icon icon="mdi:message-outline" class="inline-block" /> Mes.</button>
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
    name: "Alice Johnson",
    role: "Project Manager",
    joinedDate: "2024-11-10",
    contact: "alice@example.com",
    status: "Active"
  },
  {
    id: 2,
    name: "Mark Thompson",
    role: "Frontend Developer",
    joinedDate: "2025-01-15",
    contact: "mark@example.com",
    status: "Active"
  },
  {
    id: 3,
    name: "Sabrina Lee",
    role: "UI/UX Designer",
    joinedDate: "2024-12-01",
    contact: "sabrina@example.com",
    status: "Inactive"
  },
  {
    id: 4,
    name: "Daniel Kim",
    role: "Backend Developer",
    joinedDate: "2025-02-20",
    contact: "daniel@example.com",
    status: "Active"
  },
  {
    id: 5,
    name: "Nina Patel",
    role: "QA Engineer",
    joinedDate: "2025-03-01",
    contact: "nina@example.com",
    status: "Invited"
  },
  {
    id: 6,
    name: "Leo Green",
    role: "DevOps Engineer",
    joinedDate: "2025-03-25",
    contact: "leo@example.com",
    status: "Active"
  },
  {
    id: 7,
    name: "Zara Khan",
    role: "Business Analyst",
    joinedDate: "2025-04-10",
    contact: "zara@example.com",
    status: "Active"
  },
  {
    id: 8,
    name: "Tom Wu",
    role: "Mobile Developer",
    joinedDate: "2025-05-12",
    contact: "tom@example.com",
    status: "Inactive"
  },
  {
    id: 9,
    name: "Emily Smith",
    role: "Marketing Lead",
    joinedDate: "2025-06-05",
    contact: "emily@example.com",
    status: "Invited"
  },
  {
    id: 10,
    name: "Chris Walker",
    role: "Security Analyst",
    joinedDate: "2025-06-28",
    contact: "chris@example.com",
    status: "Active"
  }
]
</script>

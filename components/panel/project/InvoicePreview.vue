<template>
  <div class="card border border-panel-text-light/20 rounded-xl p-5">
    <Title icon="ic:baseline-group" text="Invoices Preview" />
    <div class="mt-10">
      <table class="w-full border h-[400px] overflow-y-auto border-panel-text-light/20 rounded-lg">
        <thead class="bg-primary">
          <tr class="bg-panel-sub-dark">
            <th class="th_style text-left">ID</th>
            <th class="th_style text-left">Invoice</th>
            <th class="th_style text-left">Budget</th>
            <th class="th_style text-left">Issue Date</th>
            <th class="th_style text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="invoce in invoces" :key="invoce.id" class="border-b border-brdr/10">
            <td class="td_style">{{ invoce.id }}</td>
            <td class="td_style">{{ invoce.invoice }}</td>
            <td class="td_style">{{ invoce.budget }}</td>
            <td class="td_style">{{ invoce.issueDate }}</td>
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

const invoces = [
  {
    id: 1,
    invoice: "INV-1001",
    budget: "$5,000",
    issueDate: "2024-10-15",
    status: "Rejected"
  },
  {
    id: 2,
    invoice: "INV-1002",
    budget: "$7,200",
    issueDate: "2025-01-01",
    status: "Approved"
  },
  {
    id: 3,
    invoice: "INV-1003",
    budget: "$6,000",
    issueDate: "2024-11-20",
    status: "Rejected"
  },
  {
    id: 4,
    invoice: "INV-1004",
    budget: "$9,000",
    issueDate: "2025-02-05",
    status: "Approved"
  },
  {
    id: 5,
    invoice: "INV-1005",
    budget: "$4,500",
    issueDate: "2025-03-10",
    status: "Rejected"
  },
  {
    id: 6,
    invoice: "INV-1006",
    budget: "$12,000",
    issueDate: "2025-03-25",
    status: "Approved"
  },
  {
    id: 7,
    invoice: "INV-1007",
    budget: "$3,800",
    issueDate: "2025-04-05",
    status: "Approved"
  },
  {
    id: 8,
    invoice: "INV-1008",
    budget: "$10,000",
    issueDate: "2025-05-01",
    status: "Rejected"
  },
  {
    id: 9,
    invoice: "INV-1009",
    budget: "$8,400",
    issueDate: "2025-06-01",
    status: "Rejected"
  },
  {
    id: 10,
    invoice: "INV-1010",
    budget: "$5,750",
    issueDate: "2025-06-25",
    status: "Approved"
  }
]

</script>

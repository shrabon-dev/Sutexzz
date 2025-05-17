<template>
     <div class="card h-full border border-panel-sub-text/50 rounded-lg p-2 md:p-4 shadow-lg">
          <div class="title flex items-center justify-between  bg-panel-text-light/5 rounded-lg p-2 mb-2">
            <div class="tl_lft">
              <h6 class="font-jost text-base 2xl:text-lg text-panel-text-light">User List</h6>
              <p class="font-jost text-xs 2xl:text-sm text-panel-sub-text">All user lists</p>
            </div>
            <div class="actn">
              <Icon class="text-panel-sub-text text-xl 2xl:text-3xl cursor-pointer duration-300 ease-in-out hover:text-panel-text-light" icon="mynaui:dots-vertical-circle"/>
            </div>
          </div>
          <div class="datas pt-5">
            <table class="w-full text-left">
              <thead class="border-b pb-2 border-panel-sub-dark">
                <tr>
                  <th class="text-xs 2xl:text-base font-medium font-jost text-panel-text-light">ID.</th>
                  <th class="text-xs 2xl:text-base font-medium font-jost text-panel-text-light">Name</th>
                  <th class="text-xs 2xl:text-base font-medium font-jost text-panel-text-light">Phone</th>
                  <th class="text-xs 2xl:text-base font-medium font-jost text-panel-text-light">Email</th>
                  <th class="text-xs 2xl:text-base font-medium font-jost text-panel-text-light">Status</th>
                </tr>
              </thead>
              <tbody>

                <tr v-for="(user,key,index) in users" :key="key" >
                  <td class="text-xs 2xl:text-base text-panel-text-light py-2 px-4"> {{ user.id }}.</td>
                  <td class="text-xs 2xl:text-base text-panel-text-light py-2 px-4"> {{ user.name }} </td>
                  <td class="text-xs 2xl:text-base text-panel-text-light py-2 px-4"> {{ user.phone }} </td>
                  <td class="text-xs 2xl:text-base text-panel-text-light py-2 px-4"> {{ user.email }} </td>
                  <td class="text-xs 2xl:text-base py-2 px-4">
                    <span class="bg-blue-700/40 text-sm xl:text-[10px] 2xl:text-sm text-blue-400 rounded-sm block xl:w-[40px] 2xl:w-auto px-0 2xl:px-2 py-1 text-center">
                      {{ user.status }}
                    </span>
                  </td>
                </tr>
             
             
              </tbody>
            </table>
          </div>
        </div>
</template>
<script setup>
import { Icon } from '@iconify/vue';

  const users = [
    { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', phone: '234-567-8901', email: 'jane@example.com', status: 'Inactive' },
    { id: 3, name: 'Alice Johnson', phone: '345-678-9012', email: 'alice@example.com', status: 'Active' },
    { id: 4, name: 'Bob Williams', phone: '456-789-0123', email: 'bob@example.com', status: 'Pending' },
    { id: 5, name: 'Emily Brown', phone: '567-890-1234', email: 'emily@example.com', status: 'Active' },
  ]

</script>
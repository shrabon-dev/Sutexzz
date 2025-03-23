<template>
     <div class="card border border-panel-sub-text/50 rounded-lg p-4 shadow-lg">
          <div class="title flex items-center justify-between  bg-panel-text-light/5 rounded-lg p-2 mb-2">
            <div class="tl_lft">
              <h6 class="font-jost text-lg text-panel-text-light">User List</h6>
              <p class="font-jost text-sm text-panel-sub-text">All user lists</p>
            </div>
            <div class="actn">
              <Icon class="text-panel-sub-text text-3xl cursor-pointer duration-300 ease-in-out hover:text-panel-text-light" icon="mynaui:dots-vertical-circle"/>
            </div>
          </div>
          <div class="datas pt-5">
            <table class="w-full text-left">
              <thead class="border-b pb-2 border-panel-sub-dark">
                <tr>
                  <th class="text-base font-medium font-jost text-panel-text-light">ID.</th>
                  <th class="text-base font-medium font-jost text-panel-text-light">Name</th>
                  <th class="text-base font-medium font-jost text-panel-text-light">Phone</th>
                  <th class="text-base font-medium font-jost text-panel-text-light">Email</th>
                  <th class="text-base font-medium font-jost text-panel-text-light">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-base text-panel-text-light py-2 px-4"> 1.</td>
                  <td class="text-base text-panel-text-light py-2 px-4"> Kabir </td>
                  <td class="text-base text-panel-text-light py-2 px-4"> 01786119237 </td>
                  <td class="text-base text-panel-text-light py-2 px-4"> kabir@gmail.com </td>
                  <td class="text-base py-2 px-4">
                    <span class="bg-blue-700/40 text-sm text-blue-400 rounded-sm block px-2 py-1 text-center">
                      Active
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="text-base text-panel-text-light py-2 px-4"> 2.</td>
                  <td class="text-base text-panel-text-light py-2 px-4"> Kabir </td>
                  <td class="text-base text-panel-text-light py-2 px-4"> 01786119237 </td>
                  <td class="text-base text-panel-text-light py-2 px-4"> kabir@gmail.com </td>
                  <td class="text-base py-2 px-4">
                    <span class="bg-red-700/40 text-sm text-red-400 rounded-sm block px-2 py-1 text-center">
                      Deactive
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="text-base text-panel-text-light py-2 px-4"> 3.</td>
                  <td class="text-base text-panel-text-light py-2 px-4"> Kabir </td>
                  <td class="text-base text-panel-text-light py-2 px-4"> 01786119237 </td>
                  <td class="text-base text-panel-text-light py-2 px-4"> kabir@gmail.com </td>
                  <td class="text-base py-2 px-4">
                    <span class="bg-blue-700/40 text-sm text-blue-400 rounded-sm block px-2 py-1 text-center">
                      Active
                    </span>
                  </td>
                </tr>
               
                <tr>
                  <td class="text-base text-panel-text-light py-2 px-4"> 4.</td>
                  <td class="text-base text-panel-text-light py-2 px-4"> Kabir </td>
                  <td class="text-base text-panel-text-light py-2 px-4"> 01786119237 </td>
                  <td class="text-base text-panel-text-light py-2 px-4"> kabir@gmail.com </td>
                  <td class="text-base py-2 px-4">
                    <span class="bg-blue-700/40 text-sm text-blue-400 rounded-sm block px-2 py-1 text-center">
                      Active
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="text-base text-panel-text-light py-2 px-4"> 5.</td>
                  <td class="text-base text-panel-text-light py-2 px-4"> Kabir </td>
                  <td class="text-base text-panel-text-light py-2 px-4"> 01786119237 </td>
                  <td class="text-base text-panel-text-light py-2 px-4"> kabir@gmail.com </td>
                  <td class="text-base py-2 px-4">
                    <span class="bg-blue-700/40 text-sm text-blue-400 rounded-sm block px-2 py-1 text-center">
                      Active
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
</script>
<template>
  <div class="w-full  bg-panel-dark text-9xl rounded-lg p-6">
    <div class="breadcrumb flex gap-1 items-center pb-6">
      <nuxt-link  class="font-inter text-base text-panel-sub-text" to="/admin">Dashboard</nuxt-link>
      <p class="font-inter text-base text-panel-text-light"> / User list </p>
    </div>
    <div class="grid grid-cols-12 gap-5">
      <div class="col-span-8">
        <div class="card border border-panel-sub-text/50 rounded-lg p-4 shadow-lg">
          <div class="flex flex-wrap justify-between">
             <div class="w-[49%] p-5 border border-panel-text-light/20 rounded">
                <div class="title flex items-center justify-between  bg-panel-text-light/5 rounded-lg p-2 mb-2">
                  <div class="tl_lft">
                    <h6 class="font-jost text-lg text-panel-text-light">Category List</h6>
                    <p class="font-jost text-sm text-panel-sub-text">All category lists</p>
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
                        <th class="text-base font-medium font-jost text-panel-text-light">Status</th>
                        <th class="text-base font-medium font-jost text-panel-text-light w-20">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-base text-panel-text-light py-2 px-4"> 1.</td>
                        <td class="text-base text-panel-text-light py-2 px-4"> Kabir </td>
                        <td class="text-base py-2 px-4">
                          <span class="bg-green-700/40 text-sm text-green-400 flex justify-center items-center px-2 py-1 w-6 h-6 rounded-full text-center">
                            A
                          </span>
                        </td>
                        <td class="text-base py-2 px-4">
                          <span class="bg-blue-700/40 text-sm text-blue-400 rounded-sm px-2 py-1 flex justify-between items-center">
                            <nuxt-link class="text-lg" to="/admin"><Icon icon="ic:baseline-edit" /></nuxt-link>
                            <nuxt-link class="text-lg"  to="/admin"><Icon icon="ic:baseline-delete" /></nuxt-link>
                            <nuxt-link class="text-lg"   to="/admin"><Icon icon="ic:sharp-arrow-right-alt" /></nuxt-link>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-base text-panel-text-light py-2 px-4"> 2.</td>
                        <td class="text-base text-panel-text-light py-2 px-4"> Kabir </td>
                        <td class="text-base py-2 px-4">
                          <span class="bg-orange-700/40 text-sm text-orange-400 flex justify-center items-center px-2 py-1 w-6 h-6 rounded-full text-center">
                            D
                          </span>
                        </td>
                        <td class="text-base py-2 px-4">
                          <span class="bg-blue-700/40 text-sm text-blue-400 rounded-sm px-2 py-1 flex justify-between items-center">
                            <nuxt-link class="text-lg" to="/admin"><Icon icon="ic:baseline-edit" /></nuxt-link>
                            <nuxt-link class="text-lg"  to="/admin"><Icon icon="ic:baseline-delete" /></nuxt-link>
                            <nuxt-link class="text-lg"   to="/admin"><Icon icon="ic:sharp-arrow-right-alt" /></nuxt-link>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-base text-panel-text-light py-2 px-4"> 1.</td>
                        <td class="text-base text-panel-text-light py-2 px-4"> Kabir </td>
                        <td class="text-base py-2 px-4">
                          <span class="bg-green-700/40 text-sm text-green-400 flex justify-center items-center px-2 py-1 w-6 h-6 rounded-full text-center">
                            A
                          </span>
                        </td>
                        <td class="text-base py-2 px-4">
                          <span class="bg-blue-700/40 text-sm text-blue-400 rounded-sm px-2 py-1 flex justify-between items-center">
                            <nuxt-link class="text-lg" to="/admin"><Icon icon="ic:baseline-edit" /></nuxt-link>
                            <nuxt-link class="text-lg"  to="/admin"><Icon icon="ic:baseline-delete" /></nuxt-link>
                            <nuxt-link class="text-lg"   to="/admin"><Icon icon="ic:sharp-arrow-right-alt" /></nuxt-link>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-base text-panel-text-light py-2 px-4"> 2.</td>
                        <td class="text-base text-panel-text-light py-2 px-4"> Kabir </td>
                        <td class="text-base py-2 px-4">
                          <span class="bg-orange-700/40 text-sm text-orange-400 flex justify-center items-center px-2 py-1 w-6 h-6 rounded-full text-center">
                            D
                          </span>
                        </td>
                        <td class="text-base py-2 px-4">
                          <span class="bg-blue-700/40 text-sm text-blue-400 rounded-sm px-2 py-1 flex justify-between items-center">
                            <nuxt-link class="text-lg" to="/admin"><Icon icon="ic:baseline-edit" /></nuxt-link>
                            <nuxt-link class="text-lg"  to="/admin"><Icon icon="ic:baseline-delete" /></nuxt-link>
                            <nuxt-link class="text-lg"   to="/admin"><Icon icon="ic:sharp-arrow-right-alt" /></nuxt-link>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-base text-panel-text-light py-2 px-4"> 2.</td>
                        <td class="text-base text-panel-text-light py-2 px-4"> Kabir </td>
                        <td class="text-base py-2 px-4">
                          <span class="bg-orange-700/40 text-sm text-orange-400 flex justify-center items-center px-2 py-1 w-6 h-6 rounded-full text-center">
                            D
                          </span>
                        </td>
                        <td class="text-base py-2 px-4">
                          <span class="bg-blue-700/40 text-sm text-blue-400 rounded-sm px-2 py-1 flex justify-between items-center">
                            <nuxt-link class="text-lg" to="/admin"><Icon icon="ic:baseline-edit" /></nuxt-link>
                            <nuxt-link class="text-lg"  to="/admin"><Icon icon="ic:baseline-delete" /></nuxt-link>
                            <nuxt-link class="text-lg"   to="/admin"><Icon icon="ic:sharp-arrow-right-alt" /></nuxt-link>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
             </div>
             <div class="w-[49%] p-5 border border-panel-text-light/20 rounded">
                <div class="title flex items-center justify-between  bg-panel-text-light/5 rounded-lg p-2 mb-2">
                  <div class="tl_lft">
                    <h6 class="font-jost text-lg text-panel-text-light">Sub Category List</h6>
                    <p class="font-jost text-sm text-panel-sub-text">All sub category lists</p>
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
                        <th class="text-base font-medium font-jost text-panel-text-light">P. Catg. </th>
                        <th class="text-base font-medium font-jost text-panel-text-light">Status</th>
                        <th class="text-base font-medium font-jost text-panel-text-light w-20">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-base text-panel-text-light py-2 px-4"> 1.</td>
                        <td class="text-base text-panel-text-light py-2 px-4"> Sing </td>
                        <td class="text-base text-panel-text-light py-2 px-4"> Kabir </td>
                        <td class="text-base py-2 px-4">
                          <span class="bg-green-700/40 text-sm text-green-400 flex justify-center items-center px-2 py-1 w-6 h-6 rounded-full text-center">
                            A
                          </span>
                        </td>
                        <td class="text-base py-2 px-4">
                          <span class="bg-blue-700/40 text-sm text-blue-400 rounded-sm px-2 py-1 flex justify-between items-center">
                            <nuxt-link class="text-lg duration-300 ease-in-out hover:text-white" to="/admin"><Icon icon="ic:baseline-edit" /></nuxt-link>
                            <nuxt-link class="text-lg duration-300 ease-in-out hover:text-white"  to="/admin"><Icon icon="ic:baseline-delete" /></nuxt-link>
                            <nuxt-link class="text-lg duration-300 ease-in-out hover:text-white"   to="/admin"><Icon icon="ic:sharp-arrow-right-alt" /></nuxt-link>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-base text-panel-text-light py-2 px-4"> 1.</td>
                        <td class="text-base text-panel-text-light py-2 px-4"> Sing </td>
                        <td class="text-base text-panel-text-light py-2 px-4"> Kabir </td>
                        <td class="text-base py-2 px-4">
                          <span class="bg-green-700/40 text-sm text-green-400 flex justify-center items-center px-2 py-1 w-6 h-6 rounded-full text-center">
                            A
                          </span>
                        </td>
                        <td class="text-base py-2 px-4">
                          <span class="bg-blue-700/40 text-sm text-blue-400 rounded-sm px-2 py-1 flex justify-between items-center">
                            <nuxt-link class="text-lg duration-300 ease-in-out hover:text-white" to="/admin"><Icon icon="ic:baseline-edit" /></nuxt-link>
                            <nuxt-link class="text-lg duration-300 ease-in-out hover:text-white"  to="/admin"><Icon icon="ic:baseline-delete" /></nuxt-link>
                            <nuxt-link class="text-lg duration-300 ease-in-out hover:text-white"   to="/admin"><Icon icon="ic:sharp-arrow-right-alt" /></nuxt-link>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-base text-panel-text-light py-2 px-4"> 1.</td>
                        <td class="text-base text-panel-text-light py-2 px-4"> Sing </td>
                        <td class="text-base text-panel-text-light py-2 px-4"> Kabir </td>
                        <td class="text-base py-2 px-4">
                          <span class="bg-green-700/40 text-sm text-green-400 flex justify-center items-center px-2 py-1 w-6 h-6 rounded-full text-center">
                            A
                          </span>
                        </td>
                        <td class="text-base py-2 px-4">
                          <span class="bg-blue-700/40 text-sm text-blue-400 rounded-sm px-2 py-1 flex justify-between items-center">
                            <nuxt-link class="text-lg duration-300 ease-in-out hover:text-white" to="/admin"><Icon icon="ic:baseline-edit" /></nuxt-link>
                            <nuxt-link class="text-lg duration-300 ease-in-out hover:text-white"  to="/admin"><Icon icon="ic:baseline-delete" /></nuxt-link>
                            <nuxt-link class="text-lg duration-300 ease-in-out hover:text-white"   to="/admin"><Icon icon="ic:sharp-arrow-right-alt" /></nuxt-link>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-base text-panel-text-light py-2 px-4"> 1.</td>
                        <td class="text-base text-panel-text-light py-2 px-4"> Sing </td>
                        <td class="text-base text-panel-text-light py-2 px-4"> Kabir </td>
                        <td class="text-base py-2 px-4">
                          <span class="bg-green-700/40 text-sm text-green-400 flex justify-center items-center px-2 py-1 w-6 h-6 rounded-full text-center">
                            A
                          </span>
                        </td>
                        <td class="text-base py-2 px-4">
                          <span class="bg-blue-700/40 text-sm text-blue-400 rounded-sm px-2 py-1 flex justify-between items-center">
                            <nuxt-link class="text-lg duration-300 ease-in-out hover:text-white" to="/admin"><Icon icon="ic:baseline-edit" /></nuxt-link>
                            <nuxt-link class="text-lg duration-300 ease-in-out hover:text-white"  to="/admin"><Icon icon="ic:baseline-delete" /></nuxt-link>
                            <nuxt-link class="text-lg duration-300 ease-in-out hover:text-white"   to="/admin"><Icon icon="ic:sharp-arrow-right-alt" /></nuxt-link>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-base text-panel-text-light py-2 px-4"> 1.</td>
                        <td class="text-base text-panel-text-light py-2 px-4"> Sing </td>
                        <td class="text-base text-panel-text-light py-2 px-4"> Kabir </td>
                        <td class="text-base py-2 px-4">
                          <span class="bg-green-700/40 text-sm text-green-400 flex justify-center items-center px-2 py-1 w-6 h-6 rounded-full text-center">
                            A
                          </span>
                        </td>
                        <td class="text-base py-2 px-4">
                          <span class="bg-blue-700/40 text-sm text-blue-400 rounded-sm px-2 py-1 flex justify-between items-center">
                            <nuxt-link class="text-lg duration-300 ease-in-out hover:text-white" to="/admin"><Icon icon="ic:baseline-edit" /></nuxt-link>
                            <nuxt-link class="text-lg duration-300 ease-in-out hover:text-white"  to="/admin"><Icon icon="ic:baseline-delete" /></nuxt-link>
                            <nuxt-link class="text-lg duration-300 ease-in-out hover:text-white"   to="/admin"><Icon icon="ic:sharp-arrow-right-alt" /></nuxt-link>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
             </div>
          
          </div>
        </div>
      </div>
      <div class="col-span-4">
        <div class="card border border-panel-sub-text/50 rounded-lg p-4 shadow-lg">
          <div class="title flex items-center justify-between  bg-panel-text-light/5 rounded-lg p-2 mb-2">
            <div class="tl_lft">
              <h6 class="font-jost text-lg text-panel-text-light">Income Analytics</h6>
              <p class="font-jost text-sm text-panel-sub-text">Summery of business</p>
            </div>
            <div class="actn">
              <Icon class="text-panel-sub-text text-3xl cursor-pointer duration-300 ease-in-out hover:text-panel-text-light" icon="mynaui:dots-vertical-circle"/>
            </div>
          </div>

          <div class="datas py-5">
            <Billingchart/>
          </div>

        </div>
      </div>
      <div class="col-span-12">
        <div class="card border border-panel-sub-text/50 rounded-lg p-4 shadow-lg">
          <div class="title flex items-center justify-between  bg-panel-text-light/5 rounded-lg p-2 mb-2">
            <div class="tl_lft">
              <h6 class="font-jost text-lg text-panel-text-light">Subscription Analytics</h6>
              <p class="font-jost text-sm text-panel-sub-text">last 30 Days Subscription</p>
            </div>
            <div class="actn">
              <Icon class="text-panel-sub-text text-3xl cursor-pointer duration-300 ease-in-out hover:text-panel-text-light" icon="mynaui:dots-vertical-circle"/>
            </div>
          </div>

          <div class="datas py-5">
            <SubcriptionChart />
          </div>

        </div>
      </div>
      <div class="col-span-12">
       <PostList/>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-5 pt-5">
      <div class="col-span-4">
        <UserList/>
      </div>
      <div class="col-span-4">
        <NotificationList/>
      </div>
      <div class="col-span-4">
        <AccountPlan/>
      </div>
    </div>
  </div>   
</template>
<script setup>
import { Icon } from '@iconify/vue';
import Billingchart from '../../components/panel/Billingchart.vue';
import NotificationList from '../../components/panel/NotificationList.vue';
import UserList from '../../components/panel/UserList.vue';
import AccountPlan from '../../components/panel/AccountPlan.vue';
import PostList from '../../components/panel/PostList.vue';
import SubcriptionChart from '../../components/panel/SubcriptionChart.vue';
 definePageMeta({
  layout: 'admin',
  middleware: 'auth',
});
</script>
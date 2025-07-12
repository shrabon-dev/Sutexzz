<template>
              <div class="card border border-panel-text-light/20 rounded-xl p-5">
              <Title icon="ic:sharp-leaderboard" text="Task Board" />
              <div class="flex mt-10">
                <div class="w-3/5">
                      <h6 class="text-base font-jost text-panel-text-light font-medium">Full Details</h6>
                      <div class="borad  mt-5">
                      <ul>
                        <li class="flex justify-content-between items-start bg-panel-sub-dark rounded-lg p-3 mb-2">
                          <span class="img w-20">
                            <img class="w-10 h-10 rounded-full border border-panel-sub-text/50 object-cover" src="https://img.freepik.com/premium-photo/young-man-isolated-blue_1368-124991.jpg?semt=ais_hybrid&w=740" alt="user_img">
                          </span>
                          <div class="gp w-3/5">
                            <span class="title block font-jost text-lg text-panel-text-light font-medium ">You have a bug that needs to be fixed.</span>
                            <span class="req block  font-jost text-base text-panel-text-light/50 font-normal max-h-52 overflow-auto my-5">Lorem ipsum, dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint est autem error quibusdam, dolore aliquid a commodi illum consectetur enim. amet consectetur adipisicing elit. Quod, molestias?</span>
                            <div class="files">
                              <span class="border cursor-pointer m-1 border-panel-text-light/20 bg-[#57685c] rounded-full px-4 py-1 inline-flex items-center gap-1 text-panel-text-light"><Icon icon="ic:outline-file-download"/> newtask.pdf</span>
                              <span class="border cursor-pointer m-1 border-panel-text-light/20 bg-[#57685c] rounded-full px-4 py-1 inline-flex items-center gap-1 text-panel-text-light"><Icon icon="ic:outline-file-download"/> newtask.pdf</span>
                              <span class="border cursor-pointer m-1 border-panel-text-light/20 bg-[#57685c] rounded-full px-4 py-1 inline-flex items-center gap-1 text-panel-text-light"><Icon icon="ic:outline-file-download"/> newtask.pdf</span>
                            </div>
                          </div>
                          <span class="action w-2/6 pl-10">
                            <div class="end_dte">
                              <p class="border-l-2 border-panel-sub-text text-orange-400 p-1  rounded text-base font-medium font-jost text-start pl-2 ">End Date 
                                <span class="block text-panel-text-light font-normal pt-1">3/02/2026</span>
                              </p>
                            </div>

                            <span class="drp_menu"></span>
                          </span>
                        </li>
                      </ul>
                      </div>
                </div>
                <div class="w-2/5 pl-5">
                  <h6 class="text-base font-jost text-panel-text-light font-medium text-end">All Task Lists</h6>
                  <div class="task_list border border-panel-text-light/20 mt-5 p-5 rounded-xl">
                    <ul class="text-end max-h-92 overflow-auto">
                      <li class="text-base mb-2 cursor-pointer hover:bg-orange-500 transition-all ease-linear duration-300 font-jost bg-panel-sub-dark pl-10 rounded-full text-panel-text-light font-medium text-end block">Bug Fix<span class="ml-10 rounded-full px-5 py-2 inline-block bg-panel-dark shadow-lg border-l-2 border-orange-500">Task 1</span></li>
                      <li class="text-base mb-2 cursor-pointer hover:bg-orange-500 transition-all ease-linear duration-300 font-jost bg-panel-sub-dark pl-10 rounded-full text-panel-text-light font-medium text-end block">Bug Fix<span class="ml-10 rounded-full px-5 py-2 inline-block bg-panel-dark shadow-lg border-l-2 border-orange-500">Task 1</span></li>
                      <li class="text-base mb-2 cursor-pointer hover:bg-orange-500 transition-all ease-linear duration-300 font-jost bg-panel-sub-dark pl-10 rounded-full text-panel-text-light font-medium text-end block">Bug Fix<span class="ml-10 rounded-full px-5 py-2 inline-block bg-panel-dark shadow-lg border-l-2 border-orange-500">Task 1</span></li>
                      <li class="text-base mb-2 cursor-pointer hover:bg-orange-500 transition-all ease-linear duration-300 font-jost bg-panel-sub-dark pl-10 rounded-full text-panel-text-light font-medium text-end block">Bug Fix<span class="ml-10 rounded-full px-5 py-2 inline-block bg-panel-dark shadow-lg border-l-2 border-orange-500">Task 1</span></li>
                      <li class="text-base mb-2 cursor-pointer hover:bg-orange-500 transition-all ease-linear duration-300 font-jost bg-panel-sub-dark pl-10 rounded-full text-panel-text-light font-medium text-end block">Bug Fix<span class="ml-10 rounded-full px-5 py-2 inline-block bg-panel-dark shadow-lg border-l-2 border-orange-500">Task 1</span></li>
                      <li class="text-base mb-2 cursor-pointer hover:bg-orange-500 transition-all ease-linear duration-300 font-jost bg-panel-sub-dark pl-10 rounded-full text-panel-text-light font-medium text-end block">Bug Fix<span class="ml-10 rounded-full px-5 py-2 inline-block bg-panel-dark shadow-lg border-l-2 border-orange-500">Task 1</span></li>
                      <li class="text-base mb-2 cursor-pointer hover:bg-orange-500 transition-all ease-linear duration-300 font-jost bg-panel-sub-dark pl-10 rounded-full text-panel-text-light font-medium text-end block">Bug Fix<span class="ml-10 rounded-full px-5 py-2 inline-block bg-panel-dark shadow-lg border-l-2 border-orange-500">Task 1</span></li>
                      <li class="text-base mb-2 cursor-pointer hover:bg-orange-500 transition-all ease-linear duration-300 font-jost bg-panel-sub-dark pl-10 rounded-full text-panel-text-light font-medium text-end block">Bug Fix<span class="ml-10 rounded-full px-5 py-2 inline-block bg-panel-dark shadow-lg border-l-2 border-orange-500">Task 1</span></li>
                      <li class="text-base mb-2 cursor-pointer hover:bg-orange-500 transition-all ease-linear duration-300 font-jost bg-panel-sub-dark pl-10 rounded-full text-panel-text-light font-medium text-end block">Bug Fix<span class="ml-10 rounded-full px-5 py-2 inline-block bg-panel-dark shadow-lg border-l-2 border-orange-500">Task 1</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              
          </div>
</template>
<script setup>
import Title from '../Title.vue';
import { Icon, } from '@iconify/vue';



</script>
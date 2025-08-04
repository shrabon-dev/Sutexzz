<template>
              <div class="card border border-panel-text-light/20 rounded-xl p-5">
              <Title icon="ic:round-add-task" text="New Milestone Create" />
              <div class="form mt-10">
                <div class="grp mb-5 block">
                  <label for="" class="block text-xs xl:text-lg pb-2 font-jost text-panel-text-light">Title</label>
                  <input type="text" placeholder="ex: responsive fix" class="border border-panel-text-light/40 text-base p-2 font-jost focus:outline-0 text-panel-text-light rounded-lg w-full">
                </div>
                <div class="grp mb-5 block">
                  <label for="" class="block text-xs xl:text-lg pb-2 font-jost text-panel-text-light">Budget</label>
                  <input type="text" placeholder="budget: $60.00" class="border border-panel-text-light/40 text-base p-2 font-jost focus:outline-0 text-panel-text-light rounded-lg w-full">
                </div>
                <div class="grp mb-5 block">
                  <label for="" class="block text-xs xl:text-lg pb-2 font-jost text-panel-text-light">Duration</label>
                  <input type="date" placeholder="ex: responsive fix" class="border border-panel-text-light/40 text-base p-2 font-jost focus:outline-0 text-panel-text-light rounded-lg w-full">
                </div>
               
                <div class="btn text-end">
                  <button class="border border-panel-text-light/40 cursor-pointer text-base px-2 py-1 hover:bg-panel-sub-text duration-300 transition-all font-jost text-panel-text-light rounded bg-panel-sub-dark">Add Task</button>
                </div>
              </div>
          </div>
</template>
<script setup>
import Title from '../Title.vue';



</script>
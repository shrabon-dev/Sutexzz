<template>
              <div class="card border border-panel-text-light/20 rounded-xl p-2 md:p-5">
              <Title icon="ic:round-add-task" text="New Task Add" />
              <div class="form mt-10">
                <div class="grp mb-5 block">
                  <label for="" class="block text-lg pb-2 font-jost text-panel-text-light">Title</label>
                  <input type="text" placeholder="ex: responsive fix" class="border border-panel-text-light/40 text-base p-2 font-jost focus:outline-0 text-panel-text-light rounded-lg w-full">
                </div>
                <div class="grp mb-5 block">
                  <label for="" class="block text-lg pb-2 font-jost text-panel-text-light">End Time</label>
                  <input type="date" placeholder="ex: responsive fix" class="border border-panel-text-light/40 text-base p-2 font-jost focus:outline-0 text-panel-text-light rounded-lg w-full">
                </div>
                <div class="grp mb-5 block">
                  <label for="" class="block text-lg pb-2 font-jost text-panel-text-light">Attach files</label>
                  <input type="file" placeholder="ex: responsive fix" class="border border-panel-text-light/40 text-base p-2 font-jost focus:outline-0 text-panel-text-light rounded-lg w-full">
                </div>
                <div class="grp mb-5 block">
                  <label for="" class="block pb-2 text-lg font-jost text-panel-text-light">Requirement</label>
                  <textarea  placeholder="ex: Requirement" class=" border border-panel-text-light/40 text-base p-2 font-jost focus:outline-0 text-panel-text-light rounded-lg w-full" name="" id=""></textarea>
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
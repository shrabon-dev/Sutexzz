<template>
              <div class="card border border-panel-text-light/20 min-h-80 rounded-xl p-5">
              <Title icon="ic:round-add-task" text="Handover The Project" />
              <div class="form max-w-1/2 m-auto mt-10">
                <div class="grp mb-5 block">
                  <label for="" class="block text-lg pb-2 font-jost text-panel-text-light">File Upload <sub class="text-panel-sub-text">*must be zip*</sub></label>
                  <input type="file" class="border bg-panel-text-light/10 border-panel-text-light/40 text-base p-2 font-jost focus:outline-0 text-panel-text-light rounded-lg w-full">
                </div>
              
                <div class="btn text-end">
                  <button class="border border-panel-text-light/40 cursor-pointer text-base px-2 py-1 hover:bg-panel-sub-text duration-300 transition-all font-jost text-panel-text-light rounded bg-panel-sub-dark">Submit</button>
                </div>
              </div>
          </div>
</template>
<script setup>
import Title from '../Title.vue';



</script>
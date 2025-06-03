<template>
  <div class="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
    <span class="text-sm text-panel-text-light dark:text-gray-400">{{ label }}</span>

    <span
      v-if="!isEditing"
      @dblclick="enableEditing"
      class="text-sm font-medium text-panel-text-light dark:text-white cursor-pointer"
    >
      {{ editedValue }}
    </span>

    <input
      v-else
      v-model="editedValue"
      @blur="saveChanges"
      @keyup.enter="saveChanges"
      class="text-sm font-medium text-panel-text-light dark:text-white bg-transparent border border-gray-300 dark:border-gray-600 px-1 py-0.5 rounded"
      :placeholder="label"
      autofocus
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Props
const props = defineProps({
  label: String,
  value: String,
})

// Local state
const isEditing = ref(false)
const editedValue = ref(props.value)

// Methods
function enableEditing() {
  isEditing.value = true
}

function saveChanges() {
  isEditing.value = false

  // 🔄 Optionally emit the change
  emit('update-value', {
    label: props.label,
    value: editedValue.value,
  })

  // ✅ OR: call an API/method to update via Mongoose backend
  // await $fetch('/api/update-field', {
  //   method: 'POST',
  //   body: {
  //     label: props.label,
  //     value: editedValue.value,
  //   },
  // })
}

const emit = defineEmits(['update-value'])
</script>

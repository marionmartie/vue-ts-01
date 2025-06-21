<script setup lang="ts">
import { reactive, ref } from 'vue';
import { nanoid } from 'nanoid';

type TaskData = {
  id: String,
  title: String,
  description?: String,
  completed: Boolean,
  priority?: Number
}

const emit = defineEmits<{
  'new-task': [form: TaskData]
}>()

const showTitleError = ref(false)

const addTask = () => {
  if (formData.title == '') {
    showTitleError.value = true
    return false
  }
  emit('new-task', { ...formData })

  formData.title = ''
  formData.description = ''

  showTitleError.value = false
}

const formData = reactive<TaskData>({
  id: nanoid(),
  title: '',
  description: '',
  completed: false,
  priority: undefined
})
</script>

<template>
  <form @submit.prevent="addTask()">
    <div class="max-w-3xl mx-auto mt-4 mb-2 p-4">
      <input placeholder="Enter a task title" 
        v-model="formData.title" 
        type="text"
        class="w-full p-1 rounded border-1 border-gray-400 shadow-xl bg-white"
        :class="{ 'border-red-400': showTitleError }">
      <span v-if="showTitleError" class="block text-red-600 text-sm">Please enter title</span>

      <input v-model="formData.description" 
        type="text"
        class="w-full mt-2 p-1 rounded border-1 border-gray-400 shadow-xl bg-white" placeholder="Task description">

      <button class="rounded bg-green-400 p-2 shadow-xl mt-4">
        <i class="pi pi-plus"></i>
        Add Task
      </button>
    </div>
  </form>
</template>
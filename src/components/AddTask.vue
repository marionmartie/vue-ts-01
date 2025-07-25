<script setup lang="ts">
import { reactive, ref } from 'vue';
import { nanoid } from 'nanoid';
import { type TaskData } from '@/TaskType';
import PriorityButton from './PriorityButton.vue';

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

      <div class="border-1 border-gray-300 bg-white p-2 rounded">
        <input type="text" name="" id="" placeholder="Task title"
          class="w-full p-1 border-b-1 border-b-gray-300 focus:outline-none font-bold" v-model="formData.title">

        <input type="text" name="" id="" placeholder="Task description" class="w-full p-1 focus:outline-none"
          v-model="formData.description">

        <div class="my-4 text-sm">
          <p class="text-gray-500 mb-2">Priority:</p>
          <div class="flex gap-4 items-center">
            <PriorityButton v-model="formData.priority" bgColor="has-checked:bg-yellow-300" priorityName="Low" />
            <PriorityButton v-model="formData.priority" bgColor="has-checked:bg-orange-300" priorityName="Medium" />
            <PriorityButton v-model="formData.priority" bgColor="has-checked:bg-red-400" priorityName="High" />
          </div>
        </div>

        <div class="border-gray-300 border-t-1 pt-4">
          <button class="btn btn-success btn-sm">
            <i class="pi pi-plus"></i>
            Add Task
          </button>
        </div>
      </div>

      <span v-if="showTitleError" class="block text-red-600 text-sm">Please enter title</span>
    </div>
  </form>
</template>
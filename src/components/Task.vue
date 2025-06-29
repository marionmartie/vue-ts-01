<script setup lang="ts">
import { type TaskData } from '@/TaskType';

defineProps <{
  task: TaskData
}>()

const emit = defineEmits <{
  'change-task': [id: String | Number]
}>()

// If a task is checked, emit an action an edit that id
const changeTask = (id: String | Number) => {

  emit('change-task', id)
}
</script>

<template>
    <div class="border-1 py-2 border-b-gray-400 border-t-0 border-s-0 border-e-0">
      <div class="flex p-2">
        <input v-model="task.completed" @change="changeTask(task.id)" class="w-7 h-5 accent-green-400" type="checkbox">
        <div class="">
          <label>{{ task.title }}</label>
          <p class="text-gray-500">{{ task.description }}</p>
        </div>
      </div>
    </div>
</template>
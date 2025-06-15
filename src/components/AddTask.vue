<script setup lang="ts">
import { reactive } from 'vue';

type TaskData = {
  id: Number,
  title: String,
  description?: String,
  completed?: Boolean,
  priority?: Number
}

const emit = defineEmits<{
  'new-task': [form: TaskData]
}>()

const addTask = () => {
  if (formData.title == '') {
    alert('Empty title')
    return false
  }
  emit('new-task', { ...formData })
}

const formData = reactive<TaskData>({
  id: 3,
  title: '',
  description: '',
  completed: false,
  priority: undefined
})
</script>

<template>
  <form @submit.prevent="addTask()">
    <div class="max-w-3xl mx-auto  my-6 flex gap-4 justify-center">
      <input v-model="formData.title" type="text" class="w-3/4 rounded border-1 border-gray-400 shadow-xl bg-white">
      <button class="rounded bg-green-400 p-2 shadow-xl">
        <i class="pi pi-plus"></i>
        Add Task
      </button>
    </div>
  </form>
</template>
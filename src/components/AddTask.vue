<script setup lang="ts">

type TaskData = {
  id: number,
  title: string,
}

const emit = defineEmits<{
  'new-task': [form: TaskData]
}>()

const addTask = (form: TaskData) => {
  emit('new-task', form)
}
</script>

<template>
    <div class="max-w-3xl mx-auto  my-6 flex gap-4 justify-center">
    <input type="text" class="w-3/4 rounded border-1 border-gray-400 shadow-xl bg-white">
    <button @click="addTask({id: 1, title: 'Test task 1'})" class="rounded bg-green-400 p-2 shadow-xl">
      <i class="pi pi-plus"></i>
      Add Task
    </button>
  </div>
</template>
<script setup lang="ts">
import Task from '@/components/Task.vue'
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 py-2 my-6 flex gap-4 justify-center">
    <input type="text" class="rounded border-1 p-1">
    <button class="rounded bg-green-400 p-2">
      <i class="pi pi-plus"></i>
      Add Task
    </button>
  </div>

  <div class="max-w-3xl mx-auto px-4 py-2">
    <Task name="Hello" />
  </div>
</template>
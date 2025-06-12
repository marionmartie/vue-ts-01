<script setup lang="ts">
defineProps <{
  task: {
    id: Number,
    title: String,
    description: String,
    completed: Boolean,
    priority: Number,
  }
}>()
</script>

<template>
    <div class="border-1 py-2 border-b-gray-400 border-t-0 border-s-0 border-e-0">
      <div class="flex p-2">
        <input id="" v-model="task.completed" class="w-7 h-5 accent-green-400" type="checkbox">
        <div class="">
          <label>{{ task.title }}</label>
          <p class="text-gray-500">{{ task.description }}</p>
        </div>
      </div>
    </div>
</template>
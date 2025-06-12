<script setup lang="ts">
import Task from '@/components/Task.vue'
import AddTask from '@/components/AddTask.vue'
import { ref } from 'vue'

const tasks = ref([
  {
    id: 1,
    title: 'Do laundry',
    description: 'Lorem ipsum dolor',
    completed: false,
    priority: 1
  },
  {
    id: 2,
    title: 'Buy groceries',
    description: 'Lorem ipsum dolor sit amet',
    completed: false,
    priority: 2
  }
])
</script>

<template>

  <AddTask />

  <div v-for="task in tasks" class="max-w-3xl mx-auto py-2">
    <Task :task="task" />
  </div>
  
</template>
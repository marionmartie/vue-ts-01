<script setup lang="ts">
import Task from '@/components/Task.vue'
import AddTask from '@/components/AddTask.vue'
import { ref } from 'vue'

type TaskData = {
  id: number,
  title: string,
}

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

const onAddTask = (form: TaskData) => {
  alert(`Child says ${form.id} ${form.title}`)
}

const updateTask = (update: number) => {
  alert(`Child updates task id: ${update}`)
}
</script>

<template>

  <AddTask @new-task="onAddTask"  />

  <div v-for="task in tasks" class="max-w-3xl mx-auto py-2">
    <Task :task="task" />
  </div>
  
</template>
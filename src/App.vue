<script setup lang="ts">
import Task from '@/components/Task.vue'
import AddTask from '@/components/AddTask.vue'
import { ref } from 'vue'

type TaskData = {
  id: Number,
  title: String,
  description?: String,
  completed?: Boolean,
  priority?: Number
}

const tasks = ref<TaskData[]>([
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
  tasks.value.push(form)
  console.log(form);
  
}
</script>

<template>

  <AddTask @new-task="onAddTask"  />

  <div v-for="task in tasks as TaskData[]" key="task.id" class="max-w-3xl mx-auto py-2">
    <Task :task="task" />
  </div>
  
</template>
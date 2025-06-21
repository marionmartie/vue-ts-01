<script setup lang="ts">
import Task from '@/components/Task.vue'
import AddTask from '@/components/AddTask.vue'
import { ref, type Ref, onMounted } from 'vue'
import axios from 'axios'

type TaskData = {
  id: Number | String,
  title: String,
  description?: String,
  completed: Boolean,
  priority?: Number
}

const tasks = ref<TaskData[]>([])

const onAddTask = async (form: TaskData) => {
  tasks.value.push(form)

  try {
    const res = await axios.post('http://localhost:3000/tasks', form)
  } catch (err) {
    console.log(err)
  } finally {

  }

  console.log(form);
}

const onChangeTask = (id: String | Number) => {
  const obj: TaskData | undefined = tasks.value.find( (el) => el.id === id )
}

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3000/tasks')
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data: TaskData[] = await res.json()
    tasks.value = data
  } catch (err) {
    console.log(err)
  } finally {

  }
})
</script>

<template>

  <AddTask @new-task="onAddTask"  />

  <div v-for="task in tasks as TaskData[]" key="task.id" class="max-w-3xl mx-auto py-2">
    <Task :task="task" @change-task="onChangeTask" />
  </div>
  
</template>
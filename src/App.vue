<script setup lang="ts">
import Task from '@/components/Task.vue'
import AddTask from '@/components/AddTask.vue'
import { ref, type Ref, onMounted } from 'vue'
import axios from 'axios'
import { type TaskData } from './TaskType'

const tasks = ref<TaskData[]>([])

const isLoading = ref<Boolean>(false)

const onAddTask = async (form: TaskData) => {
  
  try {    

    isLoading.value = true
    const res = await axios.post('http://localhost:5001/tasks', form)
    tasks.value.push(res.data)

  } catch (err) {
    console.log(err)
  } finally {
    isLoading.value = false

  }

  console.log(form);
}

const onChangeTask = (id: String | Number) => {
  const obj: TaskData | undefined = tasks.value.find( (el) => el.id === id )
}

onMounted(async () => {
  try {
    isLoading.value = true
    const res = await fetch('http://localhost:5001/tasks')
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data: TaskData[] = await res.json()
    tasks.value = data
  } catch (err) {
    console.log(err)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>

  <AddTask @new-task="onAddTask"  />

  <div v-for="task in tasks as TaskData[]" key="task.id" class="max-w-3xl mx-auto py-2">
    <Task v-if="!isLoading" :task="task" @change-task="onChangeTask" />
  </div>
  
</template>
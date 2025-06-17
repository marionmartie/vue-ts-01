<script setup lang="ts">
import Task from '@/components/Task.vue'
import AddTask from '@/components/AddTask.vue'
import { ref, type Ref } from 'vue'

type TaskData = {
  id: Number | String,
  title: String,
  description?: String,
  completed?: Boolean,
  priority?: Number
}

const tasks: Ref<TaskData[]> = ref<TaskData[]>([
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

const onChangeTask = (id: String | Number) => {
  const obj: TaskData | undefined = tasks.value.find( (el) => el.id === id )
  console.log(obj?.completed);
  
  if ( obj?.completed != undefined ) {
    obj.completed = !obj.completed
  }
  
}
</script>

<template>

  <AddTask @new-task="onAddTask"  />

  <div v-for="task in tasks as TaskData[]" key="task.id" class="max-w-3xl mx-auto py-2">
    <Task :task="task" @change-task="onChangeTask" />
  </div>
  
</template>
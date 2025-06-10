<script setup lang="ts">
defineProps({
    name: String,
})
</script>

<template>
    <div class="rounded border-1 border-gray-500">
      <div class="flex gap-2 p-2">
        <input class="mt-2" type="checkbox">
        <div class="">
          <p>Task Title</p>
          <p class="italic text-gray-500">Task description</p>
        </div>
      </div>
    </div>
</template>
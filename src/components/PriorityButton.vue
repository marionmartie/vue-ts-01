<script setup lang="ts">
defineProps<{
    priorityName: "Low" | "Medium" | "High",
    bgColor: String,
}>()
</script>

<template>
    <div :class="bgColor" class="flex gap-2 items-center rounded py-2 px-4">
        <input type="checkbox" :id="priorityName">
        <label :for="priorityName">{{ priorityName }}</label>
    </div>
</template>
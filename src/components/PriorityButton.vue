<script setup lang="ts">
defineProps<{
    priorityName: "Low" | "Medium" | "High",
    bgColor: String,
}>()
</script>

<template>
    <div :class="bgColor" class="flex gap-2 items-center rounded py-1 px-2 text-sm">
        <input class="radio radio-xs bg-white" type="radio" name="priorityOptions" :id="priorityName">
        <label :for="priorityName">{{ priorityName }}</label>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
  title: {
    default: "Activity!"
  }
})
</script>

<template>
  <div bg-blue-100 dark:bg-blue-900 p-4 pb-2 m-2 rounded-lg border-2 border-blue-500>
    <strong>
      <fluent-emoji-check-mark-button /> {{ props.title }}
    </strong>

    <slot />
  </div>
</template>

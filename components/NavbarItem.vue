<template>
  <span class="text-gray-100 hover:text-indigo-400">
    <NuxtLink :to="uri" :target="newTab ? '_blank' : '_self'">
      {{ label }}
    </NuxtLink>
  </span>
</template>

<script setup lang="ts">
interface Props {
  uri: string
  label: string
  newTab: boolean
}

const props = defineProps<Props>()

const { uri, label } = toRefs(props)
</script>

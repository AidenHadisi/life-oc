<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import 'animate.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init()
})

useHead({
  meta: [{ name: 'description', content: 'Life Church of Orange California.' }],
  titleTemplate: (title) => {
    return title ? `${title} - Life Church of Orange` : 'Life Church of Orange'
  }
})
</script>

<style>
@tailwind utilities;
@layer utilities {
  .cut-image {
    clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0 100%);
  }
}
body {
  font-family: 'Montserrat', sans-serif;
}
</style>

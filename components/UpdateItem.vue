<template>
  <article class="gap-4 my-2">
    <NuxtImg class="block w-full rounded-xl" :src="imageUrl" width="300" />
    <div class="p-2">
      <h2 class="font-bold text-xl mb-3">
        {{ convert(props.title) }}
      </h2>
      <p class="text-md mb-1">
        {{ convert(props.content.substring(0, 400)) }}...
      </p>
      <small>{{ moment(props.date).fromNow() }} by {{ props.author }}</small>
    </div>
  </article>
</template>

<script setup lang="ts">
import { convert } from 'html-to-text'
import moment from 'moment'

interface Props {
  title: string
  date: string
  imageUrl: string
  content: string
  author: string
}

const props = defineProps<Props>()
</script>

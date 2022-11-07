<template>
  <article
    class="gap-4 my-2 flex flex-col bg-white rounded-xl justify-between overflow-hidden max-h-[500px] max-lg:mb-3 shadow-lg"
  >
    <NuxtImg class="block w-full max-h-[200px] hover:scale-110 duration-500" :src="imageUrl" width="400" />
    <div class="px-3">
      <h2 class="font-bold text-xl mb-3">
        {{ convert(props.title) }}
      </h2>
      <p class="text-sm mb-1">
        {{ convert(props.content.substring(0, 350)) }}...
      </p>
    </div>
    <div class="px-3 pb-3">
      <a
        class="p-2 my-1 text-xs inline-block uppercase rounded-lg cursor-pointer bg-brown text-white hover:bg-red-brown transition-all duration-700"
        href="#"
        target="_blank"
      >
        Read More
      </a>
      <div class="text-[0.7rem]">
        {{ moment(props.date).fromNow() }} by {{ props.author }}
      </div>
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

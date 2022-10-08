<!-- eslint-disable vue/html-self-closing -->
<template>
  <div
    class="relative flex items-center justify-center text-center w-full h-screen overflow-hidden bg-black text-white animate__animated animate__fadeIn animate__slower"
  >
    <video
      playsinline
      autoplay
      muted
      loop
      class="absolute top-0 bottom-0 w-full h-full object-cover opacity-50"
    >
      <source src="/img/video.mp4" type="video/mp4" />
    </video>

    <div class="relative px-12">
      <div
        class="mb-8 text-6xl lg:text-8xl font-display font-extrabold drop-shadow-lg animate__animated animate__slow animate__fadeInUp"
      >
        Life Church of Orange
      </div>

      <div
        v-if="isLive"
        class="p-3 animate__animated animate__zoomIn animate__slow animate__delay-2s"
      >
        <HeaderButton class="text-xl">
          Watch Live Stream
        </HeaderButton>
      </div>
      <div class="font-display font-bold flex-col flex items-center">
        <TheCounter :duration="timeUntil" />
        <div class="text-3xl lg:text-5xl mb-8">
          Until Next Live Stream
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import moment from 'moment-timezone'

const now = ref(moment.tz('America/Los_Angeles'))
const nextLiveStream = moment
  .tz('America/Los_Angeles')
  .endOf('isoWeek')
  .set({ hour: 10, minute: 45, second: 0 })

const timeUntil = ref(moment.duration(nextLiveStream.diff(now.value)))

onMounted(() => {
  setInterval(() => {
    now.value = moment.tz('America/Los_Angeles')
  }, 1000)
})

watch(now, () => {
  timeUntil.value = moment.duration(nextLiveStream.diff(now.value))
})

const isLive = computed(() => {
  const startTime = now.value.set({ hour: 10, minute: 45, second: 0 })
  const endTime = now.value.set({ hour: 12, minute: 0, second: 0 })

  return now.value.isoWeekday() === 7 && now.value.isBetween(startTime, endTime)
})
</script>

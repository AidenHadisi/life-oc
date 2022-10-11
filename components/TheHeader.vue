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
      <img
        class="max-h-[calc(100vh_-_300px)] opacity-80 animate__animated animate__zoomIn animate__slow"
        src="/img/logo.png"
        alt="logo"
      />
    </div>
    <footer class="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-5">
      <div
        class="container mx-auto flex flex-wrap flex-col lg:flex-row justify-center lg:justify-between items-center gap-3 lg:gap-6"
      >
        <div class="text-left">
          <div class="text-lg lg:text-xl inline lg:block">
            Join Us
          </div>
          <div class="text-lg lg:text-2xl inline lg:block">
            Sundays • 10:15 AM
          </div>
        </div>
        <TheCounter />
        <div class="flex justify-center gap-2">
          <a
            href="https://www.youtube.com/channel/UCoVX240Rcw6ek5Opx2J84QA"
            target="_blank"
          ><img
            src="/img/youtube.svg"
            class="w-[40px] lg:w-[50px]"
          /></a>
          <a
            href="https://www.facebook.com/lifechurchorangeca"
            target="_blank"
          ><img
            src="/img/facebook.svg"
            class="w-[40px] lg:w-[50px]"
          /></a>
        </div>
      </div>
    </footer>
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
</script>

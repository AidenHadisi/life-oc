<!-- eslint-disable vue/html-self-closing -->
<template>
  <div
    class="w-full h-screen relative overflow-hidden flex items-center justify-center bg-black text-center p-2 animate__animated animate__fadeIn animate__slower"
  >
    <video
      playsinline
      autoplay
      muted
      loop
      class="object-cover w-full h-full absolute top-0 bottom-0 opacity-50"
    >
      <source src="/img/video.mp4" type="video/mp4" />
    </video>

    <div class="relative">
      <div
        class="text-8xl text-white font-display font-extrabold drop-shadow-lg opacity-70 animate__animated animate__slow animate__fadeInUp"
      >
        Life Church Of Orange
      </div>

      <div class="mt-8 animate__animated animate__zoomIn animate__slow animate__delay-2s">
        <HeaderButton class="text-2xl">Watch Live Stream</HeaderButton>
      </div>
    </div>
  </div>
</template>

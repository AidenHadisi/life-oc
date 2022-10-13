<template>
  <div>
    <TheNavbar />
    <TheHeader />
    <section
      class="container mx-auto p-8 flex flex-wrap lg:flex-nowrap gap-3 justify-between"
    >
      <div class="p-5" data-aos="fade-right" data-aos-duration="2000">
        <h2
          class="text-3xl inline-block border-b-4 border-brown pr-8 pb-2 mb-3 text-left font-bold"
        >
          About Us
        </h2>
        <p class="text-xl">
          We are a Spirit-filled, multicultural church in the City of Orange,
          CA. Disciples of Jesus Christ, in following Him we make disciples, as
          His people, God’s family, we live this life together on His mission to
          bring Him glory. Life Church of Orange CA is part of the C2C family of
          churches.
        </p>
      </div>
      <img
        class="min-w-0 rounded-xl shadow-lg shadow-gray-600 ring-4 ring-brown min-h-[200px]"
        src="/img/exterior.webp"
        alt="exterior image"
        data-aos="zoom-in-left"
        data-aos-duration="2000"
      >
    </section>
    <div
      class="bg-[url('/img/OrangeCircle.webp')] relative bg-cover bg-center text-white text-right bg-fixed h-[300px] font-display"
    >
      <div class="bg-black opacity-80 absolute w-full h-full top-0 left-0" />
      <div class="relative ml-auto text-2xl bg-black bg-opacity-0 p-10">
        <a
          class="p-4 px-10 inline-block uppercase opacity-100 rounded-md border cursor-pointer text-white hover:bg-brown transition-all duration-700"
          href="https://www.facebook.com/lifechurchorangeca"
          target="_blank"
        >
          Give Online
        </a>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})
</script>

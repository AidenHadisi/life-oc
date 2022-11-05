<template>
  <footer class="bg-gray-900 text-white p-4">
    <div class="container mx-auto mb-3">
      <div
        class="flex flex-col lg:flex-row gap-6 lg:justify-between justify-center lg:items-center"
      >
        <nuxt-img
          src="/img/logo.png"
          width="130"
          class="max-auto self-center"
        />
        <div>
          <h3 class="border-b-2 mb-2 font-bold">
            Links
          </h3>
          <NavbarItem
            v-for="menu of menuItems"
            :key="menu.label"
            :uri="menu.uri"
            :label="menu.label"
            :new-tab="menu.newTab"
            class="block"
          />
        </div>
        <div>
          <h3 class="border-b-2 mb-2 font-bold">
            Contact Us
          </h3>
          <div>3524 E Chapman Ave, Orange, CA 92869</div>
          <div>(714) 771-2522</div>
          <div>info@lifeoc.org</div>
        </div>
      </div>
    </div>
    <div class="text-center text-sm">
      Copyright &copy; {{ new Date().getFullYear() }} Life Church of Orange |
      <NuxtLink
        to="https://github.com/AidenHadisi/life-oc"
        target="_blank"
        class="text-indigo-400"
      >
        Source Code
      </NuxtLink>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const menuItems = useMenu()
</script>

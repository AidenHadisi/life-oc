<template>
  <nav
    class="w-full fixed top-0 right-0 z-20 font-display  uppercase bg-red-brown p-1"
  >
    <nav
      class="container mx-auto py-2 px-3 md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-center">
          <NuxtLink
            to="/"
            class="text-lg text-gray-100 md:text-xl hover:text-brown"
          >
            Life Church Of Orange
          </NuxtLink>
        </div>
        <!-- Mobile menu button -->
        <div class="flex md:hidden" @click="toggleNav">
          <button
            type="button"
            class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="[
          showMenu ? 'flex' : 'hidden',
          'flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 text-md font-display'
        ]"
      >
        <NavbarItem
          v-for="menu of menuItems"
          :key="menu.label"
          :uri="menu.uri"
          :label="menu.label"
          :new-tab="menu.newTab"
        />
      </ul>
    </nav>
  </nav>
</template>
<script setup lang="ts">
const menuItems = useMenu()

const showMenu = ref(false)
const toggleNav = () => {
  showMenu.value = !showMenu.value
}
</script>

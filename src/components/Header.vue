<template>
  <header class="h-16 bg-gradient-to-r from-cambridge_blue to-jet opacity-95 top-0 fixed w-screen flex items-center justify-between">
    <a href="" class="flex items-center font-bold text-3xl font-playfair opacity-90">
      <i class="fa-solid fa-otter text-4xl p-3 animate-waving-hand cursor-pointer"></i>
      Fabien Fleisch
    </a>
    <a href="https://github.com/LileFab" target="_blank" class="ml-auto h-full p-3">
      <i class="fa-brands fa-github text-4xl text-baby_powder hover:text-cambridge_blue-600 duration-200"></i>
    </a>
    <a href="https://www.linkedin.com/in/fabien-fleisch/" target="_blank" class="flex items-center h-full p-3">
      <i class="fa-brands fa-linkedin-in text-4xl text-baby_powder hover:text-jet-800 duration-200"></i>
    </a>
  </header>
</template>

<script lang="ts">
    export default {
  name: 'HeaderVue'
};
</script>
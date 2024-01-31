<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="bg-baby_powder h-screen scroll-smooth font-roboto">
    <header class="h-16 bg-reseda_green">
    <i class="fa-solid fa-terminal text-4xl p-3"></i>
    <a href="" class="font-bold text-3xl font-playfair"> Fabien Fleisch</a>
    </header>
    <div id="main" class="p-20 pt-4">
      <RouterView />
    <i class="animate-spin text-indigo-500 fas fa-spinner fa-lg"></i>
      <span class="text-2xl ml-3">Work In Progress</span>
    </div>
     <!-- <a href="@/assets/pdf/document.pdf" download="CV_Fabien_Fleisch.pdf" class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-baby_powder bg-cinereous-500 hover:bg-cinereous-400 ml-20">
        <i class="fas fa-download mr-2"></i> Télécharger mon CV
      </a>
     -->
  </div>
</template>
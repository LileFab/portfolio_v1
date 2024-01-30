<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
</script>

<template>
  <div class="bg-baby_powder h-screen mt-20 scroll-smooth font-roboto">
    
      <Header />
    <div id="main" class="p-20 pt-4">
      <RouterView />
    <i class="animate-spin text-indigo-500 fas fa-spinner fa-lg"></i>
      <span class="text-2xl ml-3">Work In Progress</span>
    </div>
     <a href="@/assets/pdf/document.pdf" download="CV_Fabien_Fleisch.pdf" class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-baby_powder bg-cinereous-500 hover:bg-cinereous-400 ml-20">
        <i class="fas fa-download mr-2"></i> Télécharger mon CV
      </a>
    
  </div>
</template>
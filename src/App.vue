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
    
  </div>
</template>
<template>
  <div class="bg-baby_powder h-screen scroll-smooth font-roboto">

  <HeaderVue/>
  <MainTitle/>

    <div id="corps" class="p-8 bg-baby_powder">
      <AboutMe/>
      <!-- <TechnicalStack/> -->
    </div>
  </div>
</template>


<script lang="ts">
import HeaderVue from '../Header.vue';
import AboutMe from "./components/AboutMe.vue";
import MainTitle from './components/MainTitle.vue';
import TechnicalStack from './components/TechnicalStack.vue';
  export default {
  name: 'App',
  components: {
    MainTitle,
    AboutMe,
    TechnicalStack,
    HeaderVue
  },
};
</script>
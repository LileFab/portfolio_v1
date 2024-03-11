<template>
  <div class="bg-baby_powder h-full opacity-85">
    <div id="" class="ml-0">
      <ul class="p-4">
        <li> _ Angular</li>
        <li>_ Vue</li>
        <li>_ Bootstrap</li>
        <li>_ Tailwind</li>
        <li>_ Javascript</li>
        <li>_ Laravel</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import anime from 'animejs/lib/anime.es.js';

export default {
  name: 'FrontEnd',
  mounted() {
    this.runAnimation();
  },
  methods: {
    runAnimation() {
anime({
  targets: '#main',
  translateX: 250,
  scale: 1,
  rotate: '1turn'
});
    }
  }
};
</script>


<script setup lang="ts">
</script>

<template>
  <div class="bg-baby_powder h-screen scroll-smooth font-roboto">
    <header class="h-16 bg-gradient-to-r from-cambridge_blue to-jet opacity-95 top-0 fixed w-screen flex items-center justify-between">
      <a href="" class="flex items-center font-bold text-3xl font-playfair opacity-90">
        <i class="fa-solid fa-otter text-4xl p-3 animate-waving-hand cursor-pointer"></i>
        Fabien Fleisch
      </a>
      <a href="https://github.com/LileFab" class="flex items-center h-full p-3">
        <i class="fa-brands fa-github text-4xl text-baby_powder"></i>
      </a>
    </header>

    <div id="titre" class="p-20 pt-36 pb-32 animate-title-bounce">
      <h1 class="font-bold text-5xl md:text-7xl text-center mt-6 font-playfairb bg-gradient-to-r from-cambridge_blue  to-jet text-transparent bg-clip-text">Fabien's Portfolio</h1>
    </div>
    <div id="corps" class="m-8">
    <h2 class="font-bold text-4xl text-center font-playfairb text-brown_sugar pb-10">About me</h2>
    <div class="grid grid-cols-5 gap-6 text-center">
      <img src="@/assets/png/gojo.jpg" alt="moi" class="border-2 rounded-full h-40 w-40 shadow-md shadow-jet border-jet relative ml-auto mr-auto animate-title-bounce">
      
      <div class="col-span-3 text-justify">Je suis Fabien Fleisch, un étudiant en dernière année de formation en école d'ingénieur au sein de <a href="https://www.telecom-st-etienne.fr/" class="font-bold text-cinereous ">Télécom Saint-Étienne</a>. Je suis en filière <a href="https://www.telecom-st-etienne.fr/formation/ingenieur-en-apprentissage-data-engineering/" class="font-bold text-cinereous ">Data Engineering</a>, qui est une filière en apprentissage formant les étudiants aux technologies et outils liés à la data. J'ai aussi été formé aux technologies Web, à l'IA, à l'électronique, aux réseaux, et à d'autres domaines. Étant passionné de technologies avant d'être étudiant ingénieur, je me suis formé par moi-même sur la modélisation et l'impression 3D, la programmation sur Arduino ainsi que son implémentation dans les systèmes électroniques.
</div>
      <div><img src="@\assets\svg\tasse.svg" alt=""></div>

    </div>
    </div>
  </div>
</template>
<template>
  <h2 class="font-bold text-4xl text-center font-playfairb text-brown_sugar pb-10">About me</h2>
  <div class="grid grid-cols-5 gap-6 text-center">
    <img src="@/assets/png/gojo.jpg" alt="moi" class="border-2 rounded-full h-40 w-40 shadow-md shadow-jet border-jet relative ml-auto mr-auto animate-title-bounce">
  
    <div class="col-span-3 text-justify pr-10 pl-10">Je suis Fabien Fleisch, un étudiant en dernière année de formation en école d'ingénieur au sein de <a href="https://www.telecom-st-etienne.fr/" class="font-bold text-cinereous ">Télécom Saint-Étienne</a>. Je suis en filière <a href="https://www.telecom-st-etienne.fr/formation/ingenieur-en-apprentissage-data-engineering/" class="font-bold text-cinereous ">Data Engineering</a>, qui est une filière en apprentissage formant les étudiants aux technologies et outils liés à la data. J'ai aussi été formé aux technologies Web, à l'IA, à l'électronique, aux réseaux, et à d'autres domaines. Étant passionné de technologies avant d'être étudiant ingénieur, je me suis formé par moi-même sur la modélisation et l'impression 3D, la programmation sur Arduino ainsi que son implémentation dans les systèmes électroniques.
    </div>

    <img src="@\assets\svg\tasse.svg" alt="">
  </div>
</template>

<script lang="ts">
    export default {
  name: 'AboutMe'
};
</script>
<template>
  <h2 class="font-bold text-4xl text-center font-playfairb text-brown_sugar mt-28">Technical Stack</h2>
  <div class="grid grid-cols-5 gap-6 text-center mt-10 bg-baby_powder">
    <div>mettre un truc un jour</div>
    <div class="col-span-3 shadow-lg shadow-cinereous" id="contenu">
      <FrontEnd v-if="activeComponent === 'frontend' || activeComponent ===''"/>
      <BackEnd v-if="activeComponent === 'backend'"/>
      <DataBase v-if="activeComponent === 'database'"/>
      <DataScience v-if="activeComponent === 'datascience'"/>
      <DataViz v-if="activeComponent === 'dataviz'"/>
    </div>
    <div class=" flex items-center">
      <ul class="text-left pl-10 space-y-6">
        <li class="hover:cursor-pointer"><a @click="changeTechnicalView('frontend')"><i class="fa-solid fa-display pr-3"></i>Front-End</a></li>
        <li class="hover:cursor-pointer"><a @click="changeTechnicalView('backend')"><i class="fa-solid fa-code pr-3"></i>Back-End</a></li>
        <li class="hover:cursor-pointer"><a @click="changeTechnicalView('dataviz')"><i class="fa-solid fa-chart-line pr-3"></i>DataViz</a></li>
        <li class="hover:cursor-pointer"><a @click="changeTechnicalView('database')"><i class="fa-solid fa-database pr-3"></i>DataBase</a></li>
        <li class="hover:cursor-pointer"><a @click="changeTechnicalView('datascience')"><i class="fa-solid fa-flask pr-3"></i>DataScience</a></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import BackEnd from './TechnicalStackComponents/BackEnd.vue';
import DataBase from './TechnicalStackComponents/DataBase.vue';
import DataScience from './TechnicalStackComponents/DataScience.vue';
import DataViz from './TechnicalStackComponents/DataViz.vue';
import FrontEnd from './TechnicalStackComponents/FrontEnd.vue';



    export default {
  name: 'TechnicalStack',
  components: {
    FrontEnd,
    BackEnd,
    DataBase,
    DataScience,
    DataViz
  },
  data() {
    return {
      activeComponent: '' 
    };
  },
  methods: {
    changeTechnicalView(elem: string) {
      this.activeComponent = elem;
    }
  }
};
</script>
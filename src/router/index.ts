import MainPageVue from '@/components/MainPage/MainPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{path: '/', component: MainPageVue}
	],
});

export default router

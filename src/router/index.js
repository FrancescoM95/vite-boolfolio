import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../pages/HomePage.vue';

import ProjectShow from '../pages/ProjectShow.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/projects/:id', component: ProjectShow, name: 'project-show' },
        { path: '/:pathMatch(.*)*', component: NotFoundPage },
    ]
})
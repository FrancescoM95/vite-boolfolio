<script>
import { RouterLink } from 'vue-router';

export default{
  name: 'ProjectCard',
  props: { project: Object, isDetail: Boolean}
};
</script>

<template>
    <div class="card mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h3 class="card-title">{{ project.title }}</h3>
            <RouterLink v-if="!isDetail" :to ="{name: 'project-show', params:{id: project.id}}" class="btn btn-sm btn-primary">Vedi</RouterLink>
        </div>
        <div class="card-body">
            <img :src="project.image" class="card-img-top img-fluid mb-3" :alt="project.title">
            <p class="card-text">{{ project.content }} </p>
        </div>
    </div>
</template>

<style>
</style>
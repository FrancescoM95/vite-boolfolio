<script>
export default{
  name: 'ProjectCard',
  props: { project: Object}
};
</script>

<template>
    <div class="card mb-4">
        <div class="card-header">
            <h3 class="card-title">{{ project.title }}</h3>
        </div>
        <div class="card-body">
            <img :src="project.image" class="card-img-top img-fluid mb-3" :alt="project.title">
            <p class="card-text">{{ project.content }} </p>
        </div>
    </div>
</template>

<style>
</style>
<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
const endpoint = 'http://localhost:8000/api/projects/';

export default{
  name: 'ProjectShow',
  components: { ProjectCard},
  data: () => ({
    project: null,
    isLoading: false,
}),  
  methods:{
    getProject() {
        this.isLoading = true;
        axios.get(endpoint + this.$route.params.id)
        .then(res => {this.project = res.data })
        .catch(err => {console.error(err.message)})
        .then(() => {this.isLoading = false })
    },
    
  },
  created() {
        this.getProject();
    },
}
</script>

<template>
    <div class="container py-4">
        <div v-if="isLoading && !project">Caricamento...</div>
        <ProjectCard v-if="!isLoading && project" :project="project" :isDetail="true"/>
    </div>
    
</template>

<style>
</style>
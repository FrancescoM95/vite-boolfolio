<script>
import axios from 'axios';
import ProjectsList from '../components/ProjectsList.vue';
const endpoint = 'http://localhost:8000/api/projects/';

export default{
  name: 'HomePage',
  components: { ProjectsList},
  data: () => ({projects: []}),
  methods:{
    fetchProject(){
      axios.get(endpoint).then(res => {
        this.projects= res.data;
      })
    }
  },
  created(){
    this.fetchProject();
  }
}
</script>

<template>
<div class="container py-4">
  <h1 class="mb-3">Boolfolio</h1>
  <ProjectsList :projects="projects"/>
</div>

</template>

<style>
</style>
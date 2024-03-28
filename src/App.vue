<script>
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';
import ProjectsList from './components/ProjectsList.vue';
const endpoint = 'http://localhost:8000/api/projects/';

export default{
  name: 'Boolfolio',
  components: {AppHeader, ProjectsList},
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
<AppHeader />
<div class="container">
  <h1>Boolfolio</h1>
  <ProjectsList :projects="projects"/>
</div>

</template>

<style>
</style>
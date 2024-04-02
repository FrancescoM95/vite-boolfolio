<script>
import axios from 'axios';
import ProjectsList from '../components/ProjectsList.vue';
const endpoint = 'http://localhost:8000/api/projects/';

export default{
  name: 'HomePage',
  components: { ProjectsList},
  data: () => ({projects: [], isLoading: false}),
  methods:{
    fetchProject(){
      this.isLoading = true;
      axios.get(endpoint)
      .then(res => {
        this.projects= res.data;
      }).catch(err =>{
        console.error(err.message);
      }).then(() => {
        this.isLoading = false;
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
  <AppLoader v-if="isLoading"/>
  <ProjectsList v-else :projects="projects"/>
</div>

</template>

<style>
</style>
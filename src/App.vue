<script>
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';

export default{
  name: 'Boolfolio',
  components: {AppHeader},
  data: () => ({projects: []}),
  methods:{
    fetchProject(){
      axios.get(endpoint).then(res => {
        console.log(res.data);
       
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
<h1>Boolfolio</h1>
<ul>
  <li v-for="project in projects" :key="project.id">
    <h4 v-text="project.title"></h4>
  </li>
</ul>
</template>

<style>
</style>
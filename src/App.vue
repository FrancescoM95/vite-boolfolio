<script>
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';

export default{
  name: 'Boolfolio',
  components: {AppHeader},
  
}
</script>

<template>
<AppHeader />
<h1>Boolfolio</h1>

</template>

<style>
</style>
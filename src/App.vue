<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './pages/HomePage.vue';
import ProjectShow from './pages/ProjectShow.vue';

export default{
  name: 'Boolfolio',
  components: {AppHeader, HomePage}
}
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>

</template>

<style>
</style>
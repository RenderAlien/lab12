<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="navbar">
    <RouterLink to="/" class="logo">Lab12</RouterLink>
    <RouterLink to="/cats" class="navlink">Cats from API</RouterLink>
    <RouterLink to="/forms" class="navlink">Forms</RouterLink>
  </div>

  <RouterView />
</template>

<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.logo {
  font-size: 25pt;
  padding-left: 2%;
  padding-right: 5%;
}

.navlink{
  font-size: 15pt;
  padding-right: 4%;
}

.text{
  font-size: 20pt;
}

.form_container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form_row{
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 300px;
}

</style>

<template>
  <main class="home">
    <NavbarComponent/>

    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <select class="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </main>
</template>

<script>
  import NavbarComponent from '@/components/NavbarComponent.vue';

  export default {
    components: {
      NavbarComponent
    }
  }
</script>
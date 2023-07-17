<template>
  <main class="Sobre">
    <NavbarComponent ativo='5'/>
    
    <div class="imgFundo">
      <h1>Este site é um projeto de TCC <br>
        desenvolvido pela Universidade <br>
        Estadual de Campinas no Curso <br>
        Bacharelado em Sistemas de <br>
        Informação.</h1>

      <h1>Desenvolvido Por Flávio Vinícius <br>
          e Orientado Por Marli Freitas.</h1>
    </div>

    <FooterComponent/>
  </main>
</template>

<style>
  h1{
    color: white;
  }
</style>

<script>
  import NavbarComponent from '@/components/NavbarComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';

  export default {
    components: {
      NavbarComponent,
      FooterComponent
    }
  }
</script>
<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mt-5 Estimado aprendiz bienvenido al componente formativo “Programando el cerebro de las máquinas” Para iniciar se debe visualizar el siguiente video para conocer una introducción a la temática:
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ZHMYKEQmUkE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno 
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Controladores lógicos programables
    .row.mt-5(data-aos="fade-left")
      .col-12.col-lg-7
        .bloque-texto-b.color-acento-contenido.p-4
          .bloque-texto-b__texto
            
              p La automatización industrial está en continuo cambio con la necesidad de mejorar los procesos, aunque aún existen empresas que hacen estas actividades de manera cableada mediante el uso de contactores y relevos, en un alto porcentaje se hace uso de los controladores lógicos programables (PLC). En este componente se busca que el aprendiz aprenda sobre la programación del cerebro de las máquinas utilizadas en la industria. Sobre todo, teniendo en cuenta que cada vez los procesos se tornan más complejos y estos no se pueden llevar a cabo con tecnologías cableadas, para ello se hace necesario conocer aspectos sobre tecnologías programadas, ver figura 1.
      .col-4.col-lg-5.offset-4.offset-lg-0.mt-4.mt-lg-0.align-self-center
        figure
          img(src='@/assets/template/tema-1-1.png', alt='Texto que describa la imagen').floating
    .row.mt-5
      .col-10.offset-1
        .titulo-sexto.color-secundario
          h5 Figura 1
          p.italic Controlador Lógico Programable – PLC   
        figure.mt-4
          img(src='@/assets/template/tema-1-2.png', alt='Texto que describa la imagen')
        figcaption.mt-3 Referencia Nota. Genera Tecnologías. (s.f.). Controlador Lógico Programable – PLC 
    .h4.mt-5 Autómatas programables
    .row.mt-4(data-aos="fade-right")
      .col-4.col-lg-5.offset-4.offset-lg-0.mt-4.mt-lg-0.align-self-center
        figure
          img(src='@/assets/template/tema-1-3.png', alt='Texto que describa la imagen').floating
      .col-12.col-lg-7
        .bloque-texto-b.color-acento-contenido.p-4
          .bloque-texto-b__texto
            
              p Los Autómatas Programables Industriales (API) surgen de la necesidad de #[strong controlar los circuitos electrónicos] utilizados en la automatización de procesos robustos; estos elementos son aparatos elaborados con componentes que permiten la automatización/programación de los sistemas; a los cuales se les conectan los captadores como #[strong transductores, contactos, botones], sensores; y actuadores como las bobinas de contactores, lámparas, motores, entre otros, según sea la necesidad del control a desarrollar, ver figura 2.
    .row.mt-5
      .col-10.offset-1
        .titulo-sexto.color-secundario
          h5 Figura 2
          p.italic Estructura general PCL   
        figure.mt-4
          img(src='@/assets/template/tema-1-4.png', alt='Texto que describa la imagen')
        figcaption.mt-3  Referencia Nota. Innovaticias. (2012). Autómatas Programables.
    .row.mt-5(data-aos="fade-left")
      .col-12.col-lg-7
        .bloque-texto-b.color-acento-contenido.p-4
          .bloque-texto-b__texto
            
              p Los PLC son elementos que se pueden programar, por lo tanto, son como una computadora y contienen características que permiten distintas operaciones como: las matemáticas; instrucciones para el manejo de los datos; #[strong conversiones de sistemas numéricos como BCD, binario, hexadecimal, entre otros según sea la necesidad, comunicaciones con distintos dispositivos, contadores, temporizadores, programación de rutinas e interrupciones], entre otras. Existen PLC de distintos tipos y marcas, por ello es importante conocer la necesidad en la cual se desea implementar para buscar el más acorde para no hacer gastos innecesarios. En la figura 3 se presenta el diagrama de bloque PCL, ver figura 3:
      .col-4.col-lg-5.offset-4.offset-lg-0.mt-4.mt-lg-0.align-self-center
        figure
          img(src='@/assets/template/tema-1-5.png', alt='Texto que describa la imagen').floating
    .row.mt-5
      .col-10.offset-1
        .titulo-sexto.color-secundario
          h5 Figura 3 
          p.italic Diagrama de bloques PLC
        figure.mt-4
          img(src='@/assets/template/tema-1-6.png', alt='Texto que describa la imagen')
        figcaption.mt-3 
    figure.mt-5
      img(src='@/assets/template/tema-1-7.png', alt='Texto que describa la imagen')
    .row.mt-5(data-aos="fade-right")
      .col-4.col-lg-5.offset-4.offset-lg-0.mt-4.mt-lg-0.align-self-center
        figure
          img(src='@/assets/template/tema-1-8.svg', alt='Texto que describa la imagen').floating
      .col-12.col-lg-7
        .bloque-texto-b.color-acento-contenido.p-4
          .bloque-texto-b__texto
            
              p El #[strong PLC] es un elemento electrónico diseñado para controlar los procesos secuenciales industriales de manera programada y en tiempo real. Existen los Micro PLC los cuales pueden ser utilizados en pequeñas aplicaciones y por personas del común, que no son necesariamente para el uso industrial. Estos elementos, aunque cumplen funciones como los computadores de uso general, son dispositivos diseñados para manejar múltiples señales de entradas y salidas, donde se pueden conectar los dispositivos de capturas de información y los dispositivos que actúan para la operación de las diferentes tareas. 
    .row.mt-5
      .tabla-a.color-acento-secundario.mb-5 
        table
          thead
            tr
              th 
                .col-8.offset-2.py-2
                  .titulo-sexto.color-secundario.mb-0
                    h5 Figura 4 
                    p.italic Ejemplo controlador  turbina de avión
              th 
                .col-8.offset-2.py-2
                  .titulo-sexto.color-secundario.mb-0
                    h5 Figura 5 
                    p.italic Cableado
          tbody
            tr
              td.p-0
                figure
                  img(src='@/assets/template/tema-1-9.png', alt='Texto que describa la imagen')
              td.p-0 
                figure
                  img(src='@/assets/template/tema-1-10.png', alt='Texto que describa la imagen')
            tr
              td Un ejemplo de la aplicación un PLC en la industria es el control de encendido y apagado de turbinas o toma de medidas de peso. 
              td.p-4
                p En los hogares también sea aprecia el uso de los sistemas micro PLC en las alarmas y en sistemas de riego.
                figcaption.mt-3 Referencia Nota. García, B. (2019). Cableado. Industrialshields
    .h4.mt-5 Funciones del PLC
    figure.mt-4
      img(src='@/assets/template/tema-1-11.png', alt='Texto que describa la imagen')              
    p.mt-5 En el siguiente video se conocerán las principales funciones del PCL: 
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .h4.mt-5 Aplicaciones
    .row.mt-5(data-aos="fade-left")
      .col-4.col-lg-5.offset-4.offset-lg-0.mt-4.mt-lg-0.align-self-center
        figure
          img(src='@/assets/template/tema-1-12.svg', alt='Texto que describa la imagen').floating
      .col-12.col-lg-7
        .bloque-texto-b.color-acento-contenido.p-4
          .bloque-texto-b__texto
              p Gracias a sus características de diseño y constante evolución tanto en el <em>software</em> como en el <em>hardware</em>, hace que las aplicaciones cada vez sean mayores, con la finalidad de satisfacer necesidades de automatización que aparezcan en cualquier ámbito existente. Entre algunas aplicaciones en la industria están los procesos de fabricación, control de instalaciones, señalización, maquinarias de ensamblaje, logística, etc.; en el hogar se pueden encontrar algunos utilizados (menos robustos) en domótica para control de luces, riego de jardines, control de accesos, entre otros, ver figura 6. 
      .col-10.offset-1.mt-5
        .titulo-sexto.color-secundario
          h5 Figura 6 
          p.italic  Arquitectura de un PLC
        figure.mt-4
          img(src='@/assets/template/tema-1-13.png', alt='Texto que describa la imagen')
        figcaption.mt-3 Referencia Nota. Blogs Deusto. (S.F.). Tipos de sistemas de control industrial.
    .h4.mt-5 Ventajas e inconvenientes en la utilización
    figure.mt-5
      img(src='@/assets/template/tema-1-14.png', alt='Texto que describa la imagen')
    p.mt-4 En la siguiente infografía se presentan las ventajas e inconvenientes a la hora de utilizar un PLC: 
    .row.mt-5
      .col-12.col-md-10.col-lg-8.offset-md-1.offset-lg-2
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/template/tema-1-15.png', alt='Texto que describa la imagen')

          .tarjeta.bg-blanco(x="38%" y="12%" numero=" ").row.p-0
            .col-3.bg-morado.rounded-20-izq.text-white.text-center
              .h3.font-3rem.mt-3 01
            .col-9.p-4
              p Radica en las reducidas dimensiones y facilidad de montaje que permite su rápida utilización y capacidad de almacenar la programación acorde con la aplicación deseada.

          .tarjeta.bg-blanco(x="17.4%" y="23%" numero=" ").row.p-0
            .col-3.bg-morado.rounded-20-izq.text-white.text-center
              .h3.font-3rem.mt-3 02
            .col-9.p-4
              p Facilidad de manejo al momento programarlo.

          .tarjeta.bg-blanco(x="5.4%" y="41%" numero=" ").row.p-0
            .col-3.bg-morado.rounded-20-izq.text-white.text-center
              .h3.font-3rem.mt-3 03
            .col-9.p-4
              p No requiere dibujo de esquemático.

          .tarjeta.bg-blanco(x="5.4%" y="63%" numero=" ").row.p-0
            .col-3.bg-morado.rounded-20-izq.text-white.text-center
              .h3.font-3rem.mt-3 04
            .col-9.p-4
              p No requiere elaborar ecuaciones lógicas. 

          .tarjeta.bg-blanco(x="17.4%" y="81%" numero=" ").row.p-0
            .col-3.bg-morado.rounded-20-izq.text-white.text-center
              .h3.font-3rem.mt-3 05
            .col-9.p-4
              p Los cambios de programa no requieren cambios de <em>hardware</em>, menor costo de mantenimiento y de instalación. 

          .tarjeta.bg-blanco(x="38%" y="92%" numero=" ").row.p-0
            .col-3.bg-morado.rounded-20-izq.text-white.text-center
              .h3.font-3rem.mt-3 06
            .col-9.p-4
              p Puede dirigir varias máquinas con un solo PLC.
              
          .tarjeta.bg-blanco(x="62%" y="92%" numero=" ").row.p-0
            .col-3.bg-morado.rounded-20-izq.text-white.text-center
              .h3.font-3rem.mt-3 07
            .col-9.p-4
              p Permite el uso en espacios reducidos, en procesos de producción cambiantes, en procesos secuenciales, en maquinaria con procesos variables, en instalaciones con procesos amplios y complejos, permite el chequeo da la programación de cada parte del proceso.
          .tarjeta.bg-blanco(x="62%" y="12%" numero=" ").row.p-0
            .col-3.bg-naranja.rounded-20-izq.text-center
              .h3.font-3rem.mt-3 01
            .col-9.p-4
              p Requiere de un programador, lo que indica que debe haber una persona capacitada para tal fin (mano de obra especializada).
          .tarjeta.bg-blanco(x="83%" y="23%" numero=" ").row.p-0
            .col-3.bg-naranja.rounded-20-izq.text-center
              .h3.font-3rem.mt-3 02
            .col-9.p-4
              p El costo de inversión inicial puede ser alta, para ajustar la automatización a la medida deseada.
          .tarjeta.bg-blanco(x="95%" y="41%" numero=" ").row.p-0
            .col-3.bg-naranja.rounded-20-izq.text-center
              .h3.font-3rem.mt-3 03
            .col-9.p-4
              p Centraliza los procesos.
          .tarjeta.bg-blanco(x="95%" y="63%" numero=" ").row.p-0
            .col-3.bg-naranja.rounded-20-izq.text-center
              .h3.font-3rem.mt-3 04
            .col-9.p-4
              p Debe contener los elementos acordes a la necesidad del proyecto, puede ser costoso para controlar aplicaciones o tareas muy pequeñas o nada complejas. 
          .tarjeta.bg-blanco(x="83%" y="81%" numero=" ").row.p-0
            .col-3.bg-naranja.rounded-20-izq.text-center
              .h3.font-3rem.mt-3 05
            .col-9.p-4
              p Debe tener un espacio que cumpla con las condiciones ambientales acordes al proceso a desarrollar.




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.tabla-a th
  text-align: left !important
.img-infografica__item:nth-child(n+8) .img-infografica__item__dot::before
  background-color: #D29A21 !important
.img-infografica__item:nth-child(n+8) .img-infografica__item__dot::after
  background-color: #D29A21 !important
</style>

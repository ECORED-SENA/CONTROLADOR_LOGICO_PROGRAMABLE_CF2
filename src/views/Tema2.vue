<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Estructura del PLC
    p.mt-5 La estructura del dispositivo está compuesta por dos partes, ver figura 7:
    .row.mt-5(data-aos="slide-right")
      .col-10.col-lg-8.offset-1.offset-lg-2.rounded-20.border-gris.p-5.floating
        .row
          .col-4.d-none.d-lg-flex.px-4.border-right-gris
            figure
              img(src='@/assets/template/tema-2-1.svg', alt='Texto que describa la imagen')
          .col-12.col-lg-8.px-4.align-self-center
            p Una física #[strong (hardware)], compuesta de todo lo que se puede ver y tocar, es donde se pueden conectar los distintos dispositivos como los módulos de memoria, módulos de entrada y salida, batería, entre otros.
    .row.mt-4(data-aos="slide-left")
      .col-10.col-lg-8.offset-1.offset-lg-2.rounded-20.border-gris.p-5.floating
        .row
          .col-4.d-none.d-lg-flex.px-4.border-right-gris
            figure
              img(src='@/assets/template/tema-2-2.svg', alt='Texto que describa la imagen')
          .col-12.col-lg-8.px-4.align-self-center
            p La programada (software), esta se encuentra ubicada en un banco de memoria y es donde están localizadas las instrucciones que debe ejecutar el PCL para comandar los distintos dispositivos.
    .row.mt-4
      .col-10.offset-1.mt-5
        .titulo-sexto.color-secundario
          h5 Figura 7 
          p.italic Estructura básica de controlador lógico programable (PLC).             
        figure.mt-5.px-4
          img(src='@/assets/template/tema-2-3.png', alt='Texto que describa la imagen')
        figcaption.mt-3 Referencia Nota. Guzmán, R. Quevedo, A. Tijerina, L. Y Castro, M. (2017). Sistema de adquisición de datos meteorológicos en tiempo real con PLC. 
    .row.mt-5(data-aos="slide-right")
      .col-12.col-lg-7
        .bloque-texto-b.color-acento-contenido.p-4
          .bloque-texto-b__texto            
              p Los PLC para su funcionamiento incorporan microprocesadores, cuya parte del cerebro de la máquina, se encarga de recibir y enviar la información para ejecutar las instrucciones de control (entradas y salidas), según la programación depositada en la memoria de datos y de programa, en ella puede haber otras funciones de uso general, instaladas por el fabricante, como los controladores PID. Dicha memoria permite, la reprogramación (variar los procesos), conocer el estado de los procesos y los datos para luego hacer su respectivo análisis.
              p.mt-3 En el siguiente recurso se profundizará en cada una de las partes del PCL:
      .col-4.col-lg-5.offset-4.offset-lg-0.mt-4.mt-lg-0.align-self-center
        figure
          img(src='@/assets/template/tema-2-4.png', alt='Texto que describa la imagen').floating
    TabsC.color-acento-botones.mt-5.bg-verde-claro
      .div(titulo="")
        .row
          figure
            img(src='@/assets/template/tema-2-6.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Estructura externa")
        .row.my-5
          .col-10.col-lg-6.offset-1
            .titulo-sexto.color-secundario
              h5 Estructura externa
            p.mt-3 Es un bloque compacto en el que están contenidos todos sus elementos, con indicadores y conectores; son cajas que varían según su modelo y fabricante, su forma modular permite la fijación de distintos módulos mediante rieles normalizados, haciendo que sea un conjunto compacto y resistente; consta de dos estructuras (americana y europea); la americana separa las entradas y salidas del resto del dispositivo, en la otra, cada módulo es una función, CPU, entradas/salidas, fuente de alimentación y entre otras. Los micro PLC son una clase de elementos que normalmente están contenidos dentro de otros sistemas de control más grandes, pueden venir en formatos de kits.
          .col-8.col-lg-4.offset-2.offset-lg-0.align-self-center
            figure
              img(src='@/assets/template/tema-2-7.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Estructura interna")
        .row.my-5
          .col-10.offset-1
            TabsB.color-secundario.mb-5.bg-blanco
              .py-4.py-md-5(titulo="Estructura Interna")
                .row
                  .col-12.col-lg-7.px-5
                    .h4 Estructura interna
                    p.mt-4 En la estructura interna está contenida la unidad central de procesamiento de los datos, la memoria, el microprocesador, el reloj para el conteo de eventos, el sistema de registro de unidades para las entradas y salidas que es donde se conectan los sensores y actuadores; buses, conectores o puertos para expansión, la fuente de alimentación. 
                  .col-8.col-lg-5.offset-2.offset-lg-0.px-5.mt-4.mt-lg-0.align-self-center
                    figure
                      img(src='@/assets/template/tema-2-8.png', alt='Texto que describa la imagen')
              .py-4.py-md-5(titulo="Estructura Interna" )
                .row.px-4
                  figure
                    img(src='@/assets/template/tema-2-9.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Memoria")
        .row.my-5
          .col-10.col-lg-6.offset-1
            .titulo-sexto.color-secundario
              h5 Memoria
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | La memoria de programa, en la cual el usuario introduce el programa a ejecutar de manera cíclica
              li 
                i.fas.fa-angle-right
                | La memoria de tabla de datos, la cual debe estar dividida por zonas (depende del fabricante), Aquí se encuentra la información de los elementos y componentes a emparejar con el PLC, ejemplo los contactore, temporizadores, memorias, etc.
              li 
                i.fas.fa-angle-right
                | La memoria del sistema, es donde se encuentra el programa en código binario (lenguaje máquina) por el cual Se monitoriza el sistema y es ejecutado por el procesador que posee el PLC.
              li 
                i.fas.fa-angle-right
                | La memoria de almacenamiento, en la cual se guarda el programa del usuario y puede ser programa según la necesidad del mismo.
          .col-8.col-lg-4.offset-2.offset-lg-0.align-self-center.align-self-center
            figure
              img(src='@/assets/template/tema-2-10.png', alt='Texto que describa la imagen')

      .py-3.py-md-4(titulo="CPU")
        .row.my-5
          .col-10.col-lg-6.offset-1
            .titulo-sexto.color-secundario
              h5 Memoria
            p.mt-3 La unidad de procesamiento central, se encarga de ejecutar el programa del  usuario interpretado por el programa del sistema, sus funciones son las de ejecutar el programa de usuario, alertar los tiempos máximos de ejecución de los programas #[strong (watchdog)], crear las imágenes de las entradas para que el programa acceda a estas, renovar los estados de las salidas en función de sus imágenes al final de los ciclos de ejecución, y verificar el sistema; el ciclo de trabajo en el PLC se ejecuta de forma continua. 
          .col-8.col-lg-4.offset-2.offset-lg-0.align-self-center.align-self-center
            figure
              img(src='@/assets/template/tema-2-11.png', alt='Texto que describa la imagen')
          .col-10.offset-1.mt-3
            figure
              img(src='@/assets/template/tema-2-12.png', alt='Texto que desc')
      .py-3.py-md-4(titulo="Unidades de entrada y salida (E/S)")
        .row.my-5
          .col-10.offset-1
            .titulo-sexto.color-secundario
              h5 Unidades de entrada y salida (E/S)
            p.mt-3 Las secciones de entradas y salidas son las líneas en las cuales se conectan los sensores (para las E) y los actuadores (para las S), pueden ser de tipo digitales a análogas, la CPU. Las señales digitales responden a señales de pulsos eléctricos correspondientes a 1(uno) y 0(cero), se determinan bits; todo o nada. Por su parte, las señales analógicas pueden tener diferentes valores y pueden depender de decodificadores de señales análogo/digital (A/D) o al contrario D/A y se determinan por palabras o byte. La lectura y escritura de las E/S depende del fabricante del PLC, puede incluir imágenes en el campo de la memoria o a través de las instrucciones específicas de entrada y salida. Las señales de entrada pueden provenir de encoders, fotocélulas, pulsadores, teclados, entre otros y mediante sus salidas puede activar válvulas, solenoides, contactores, indicadores luminosos y demás.
            figure.mt-4
              img(src='@/assets/template/tema-2-13.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Interfaces")
        .row.my-5
          .col-10.col-lg-6.offset-1
            .titulo-sexto.color-secundario
              h5 Interfaces
            p.mt-3 Las interfaces son las que permiten que estos dispositivos se puedan comunicar con otros,  por ejemplo: la conexión con los computadores, todo depende del protocolo de comunicaciones utilizado por el PLC y por el puerto que este tenga destinado para sus conexiones. 
            p.mt-3 Normalmente disponen de puertos RS232, RS422, RS485. Por medio del cual se puede acceder a las características de programación interna del elemento.
          .col-8.col-lg-4.offset-2.offset-lg-0.align-self-center.align-self-center
            figure
              img(src='@/assets/template/tema-2-14.png', alt='Texto que describa la imagen')

      .py-3.py-md-4(titulo="Unidades de programación")
        .row.my-5
          .col-10.col-lg-6.offset-1
            .titulo-sexto.color-secundario
              h5 Unidades de programación
            p.mt-3 Estas deben ser de la forma más fácil para operar por el usuario, las sencillas por lo general tienen forma de calculadora, donde se introducen los datos por medio de pulsadores alfanuméricos y/o flechas de direccionamiento, pueden ser pantallas táctiles; se utiliza también las consolas de programación, por medio de una pantalla y teclado permite hacer la programación de manera más cómoda, dando posibilidad de observar parámetros más complejos y detallados durante su esta, se limitan a las funciones destinadas. Los PC, son equipos de mayor pertenencia y los más empleados, los cuales permiten programar los PLC, utilizar mayor cantidad de herramientas con más aplicaciones y potentes, capacidad mayor de almacenamiento magnéticos, mayor capacidad de transferencia de datos, monitorización mediante softwares especializados, impresiones, etc. 
          .col-8.col-lg-4.offset-2.offset-lg-0.align-self-center.align-self-center
            figure
              img(src='@/assets/template/tema-2-15.png', alt='Texto que describa la imagen')

      .py-3.py-md-4(titulo="Periféricos")
        .row.my-5
          .col-10.offset-1
            .titulo-sexto.color-secundario
              h5 Periféricos
            p.mt-4 La mayoría de PLC permiten la expansión de aplicaciones a través de módulos auxiliares de entradas/salidas, memoria adicional, redes internas y además se pueden conectar con otros autómatas compatibles, lo cual depende del fabricante.
          .col-10.col-lg-6.offset-1.offset-lg-3.mt-4
            figure
              img(src='@/assets/template/tema-2-16.png', alt='Texto que describa la imagen')
          .col-10.offset-1
            figcaption.mx-5.mt-3 Referencia Nota. Guzmán, R. Quevedo, A. Tijerina, L. Y Castro, M. (2017). Sistema de adquisición de datos meteorológicos en tiempo real con PLC.   
    .h4.mt-4 Ciclo de trabajo
    .row.mt-5(data-aos="slide-left")
      .col-4.col-lg-5.offset-4.offset-lg-0.mt-4.mt-lg-0.align-self-center
        figure
          img(src='@/assets/template/tema-2-17.png', alt='Texto que describa la imagen').floating
      .col-12.col-lg-7
        .bloque-texto-b.color-acento-contenido.p-4
          .bloque-texto-b__texto            
              p Es la ejecución del programa que el usuario haya introducido para que elabore las acciones, este depende de un tiempo determinado y depende del contenido o las rutinas del programa, cada instrucción tarda un tiempo determinado de ejecutarse, los tiempos que intervienen en esta programación son: #[strong el retardo de entrada, la vigilancia y exploración de las entradas, la ejecución del programa del usuario, la transmisión de las salidas y el retardo en las salidas.] Los tiempos totales del ciclo del PLC están dados por la vigilancia y exploración de las entradas, los retardos de entrada y la ejecución del programa introducido por el usuario.
      .col-lg-10.offset-1.mt-4
        figure
          img(src='@/assets/template/tema-2-18.png', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    indicadorTarjetaFlip: true,
    mostrarIndicador: true,
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
.tabs-c__header .row .tabs-c__tab:first-child
  background-image: url(../assets/template/tema-2-5.svg)
  background-repeat: no-repeat
  background-position: 50% 50%

.tabs-c.color-acento-botones .tabs-c__tab--active
  font-weight: bold
.tabs-c__tab
  border: none
.tabs-c__header
  margin: 0
</style>

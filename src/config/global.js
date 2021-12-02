export default {
  global: {
    componenteFormativo: 'Programando el cerebro de las máquinas',
    descripcionCurso:
      'Para hacer que las máquinas puedan operar y que sean capaces de funcionar de manera autónoma, el cerebro debe ser programado mediante el lenguaje apropiado según su fabricante. Solo de esta manera la máquina podrá ser configurada y que sea posible ejecutar todas las instrucciones impartidas.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Controladores lógicos programables',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estructura del PLC',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Areatecnología. (S.F.). Siemens PLC Logo.',
      link: 'https://www.areatecnologia.com/electricidad/plc-logo.html',
    },
    {
      referencia:
        'Blogs Deusto. (S.F). Tipos de sistemas de control industrial.',
      link:
        'https://blogs.deusto.es/master-informatica/tag/control/?print=print-search',
    },
    {
      referencia: 'Castillo, W. (2010). Controlador lógico programable. PLC.',
      link:
        'https://docplayer.es/34835439-Controlador-logico-programable-plc.html',
    },
    {
      referencia:
        'Daneri, P. (2009). PLC: automatización y control industrial. Editorial HispanoAmericana HASA.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/66558?page=1',
    },
    {
      referencia:
        'Delgado, E. (2017). ¿Qué es y para qué sirve un PLC? Intrave.',
      link: 'https://intrave.com/que-es-y-para-que-sirve-un-plc/',
    },
    {
      referencia:
        'Escalona, I. (2007). Transductores y sensores en la automatización industrial. El Cid Editor.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/34463?page=1',
    },
    {
      referencia:
        'García, B. (2019). Cómo usar un variador de frecuencia con un PLC industrial basado en Arduino. Industrial shields.',
      link:
        'https://www.industrialshields.com/es_ES/blog/blog-industrial-open-source-1/post/como-usar-un-variador-de-frecuencia-con-un-plc-industrial-basado-en-arduino-98',
    },
    {
      referencia:
        'Genera Tecnologías. (s.f.). Controlador Lógico Programable – PLC.',
      link:
        'https://www.generatecnologias.es/programmable_logic_controller.html',
    },
    {
      referencia:
        'Guzmán, R. Quevedo, A. Tijerina, L. Y Castro, M. (2017). Sistema de adquisición de datos meteorológicos en tiempo real con PLC.',
      link:
        'https://www.researchgate.net/figure/Figura-1-Estructura-basica-de-controlador-logico-programable-PLC-Figure-1-Basic_fig3_322692520',
    },
    {
      referencia: 'Industrialshields. (2021). Periféricos.',
      link:
        'https://www.industrialshields.com/case-study-communications-for-4-0-industry-with-plc-arduino-gr',
    },
    {
      referencia: 'Innovaticias. (2012). Autómatas Programables.',
      link:
        'http://www.innovaticias.com/tecnologias/8505/2012/07/31/automatas-programables-curso-automatas-programables-seas',
    },
    {
      referencia:
        'Izaguirre, E. (2012). Sistemas de automatización. Editorial Feijóo.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/124330?page=1',
    },
    {
      referencia:
        'Medina, J. (2015). La automatización en la industria química. Universitat Politècnica de Catalunya.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/61458?page=1',
    },
  ],
  glosario: [
    {
      termino: 'Bus de datos  ',
      significado:
        'Conductor común a varios dispositivos que permite distribuir información.',
    },
    {
      termino: 'Consola',
      significado:
        'Dispositivo que, integrado o no en una máquina, contiene los instrumentos para su control y operación.',
    },
    {
      termino: 'Lenguaje de programación',
      significado:
        'Conjunto de instrucciones codificadas que una computadora interpreta y ejecuta directamente.',
    },
    {
      termino: 'Regulación PID',
      significado:
        'Acción de regular una magnitud física de un sistema mediante una acción combinada proporcional, integral y derivada.',
    },
  ],
  complementario: [
    {
      texto: 'Álvarez Pulido, M. (2007). Controladores lógicos. Marcombo.',
      tipo: 'Libro Capítulo 1',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/45911',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Hernando José Góngora Valencia',
        cargo: 'Profesional de diseño curricular',
        centro: 'Centro de Diseño Industrial - Regional Valle del Cauca',
      },
      {
        nombre: 'Paola Moya Peralta',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Fernando Sarmiento Betancourth',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Regional Tolima - Centro de Comercio y Servicios',
      },
      {
        nombre: 'Lizeth Karina Manchego Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

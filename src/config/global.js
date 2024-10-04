export default {
  global: {
    componenteFormativo: 'Alimentación bovina',
    descripcionCurso:
      'La ganadería tiene un impacto económico significativo en Colombia, pero también genera efectos ambientales adversos, como emisiones de gases y degradación del suelo. Alternativas como los sistemas silvopastoriles, cercas vivas y bancos de proteínas buscan reducir el daño ambiental, mejorando la producción y la sostenibilidad. Las Buenas Prácticas Ganaderas promueven la producción responsable y sostenible de carne y leche.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Impacto económico y ambiental de la ganadería',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistemas silvopastoriles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Arreglos silvopastoriles',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Pastoreo en plantaciones',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Cercas vivas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Barreras rompevientos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Barreras vivas',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Bancos de proteínas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Buenas Prácticas Ganaderas (BPG)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Impacto económico y ambiental de la ganadería',
      referencia:
        'Caracol Radio. (2023). ¿Cómo reducir el impacto ambiental de la ganadería?. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=1TpGG15s9c0&ab_channel=RuralMercadeoResponsable',
    },
    {
      tema: 'Sistemas silvopastoriles',
      referencia:
        'FEDEGAN. (2022). Capítulo 21 - Sistemas Silvopastoriles - Generalidades -- #ManualPrácticoGanadero. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Wp5qbTODkuQ&ab_channel=FEDEGAN',
    },
    {
      tema: 'Cercas vivas',
      referencia:
        'La Finca de Hoy. (2022). Estos son los beneficios de las cercas vivas en las explotaciones bovinas - La Finca de Hoy. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Y9wKlEmrGfY',
    },
    {
      tema: 'Bancos de proteínas',
      referencia:
        'Tierrapastosyganado (2018). Bancos de Proteína como alternativa en la suplementación nutricional | Tierra Pastos y Ganado [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=z7Nzg4VsQmI',
    },
    {
      tema: 'Buenas Prácticas Ganaderas (BPG)',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Características y simbología de las Buenas Prácticas Ganaderas. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=BHwq211HfWU&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
  ],
  glosario: [
    {
      termino: 'Banco de proteínas',
      significado:
        'cultivos intensivos de leguminosas que se utilizan como suplemento alimenticio para el ganado, mejorando su dieta y el aporte de nutrientes.',
    },
    {
      termino: 'Buenas Prácticas Ganaderas (BPG)',
      significado:
        'conjunto de normas y procedimientos que garantizan la producción de alimentos de origen animal de manera segura, eficiente y respetuosa con el medio ambiente.',
    },
    {
      termino: 'Cercas vivas',
      significado:
        'barreras naturales formadas por hileras de árboles o arbustos, utilizadas para delimitar áreas dentro de las fincas, aportando además beneficios ecológicos.',
    },
    {
      termino: 'Compactación de suelos',
      significado:
        'proceso en el cual el peso del ganado reduce la porosidad del suelo, impidiendo la adecuada circulación de agua y aire, lo que afecta la fertilidad del terreno.',
    },
    {
      termino: 'Ganadería extensiva',
      significado:
        'sistema de producción ganadera que utiliza grandes extensiones de tierra, donde el ganado se cría en condiciones naturales, con bajo uso de insumos.',
    },
    {
      termino: 'Gases de efecto invernadero',
      significado:
        'gases como el dióxido de carbono (CO₂) y el metano (CH₄), que atrapan el calor en la atmósfera, contribuyendo al calentamiento global y cambio climático.',
    },
    {
      termino: 'Pastoreo en plantaciones',
      significado:
        'técnica en la que el ganado se cría dentro de plantaciones de árboles, aprovechando tanto la sombra como los recursos forrajeros que estos proporcionan.',
    },
    {
      termino: 'Potrerización',
      significado:
        'proceso mediante el cual se transforman terrenos forestales o agrícolas en potreros para la cría de ganado, afectando la biodiversidad.',
    },
    {
      termino: 'Reconversión agrícola',
      significado:
        'proceso de transformación de la producción agrícola o ganadera hacia modelos más sostenibles y productivos, mediante cambios en técnicas y manejos del terreno.',
    },
    {
      termino: 'Sistemas silvopastoriles',
      significado:
        'modelos de producción que combinan árboles, arbustos, pastos y ganado en un mismo terreno, promoviendo la sostenibilidad y mayor productividad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alonso, J. (2011). Los sistemas silvopastoriles y su contribución al medio ambiente. Revista Cubana de Ciencia Agrícola, 45(2), 117-115.',
      link: '',
    },
    {
      referencia:
        'Arguedas, R., Casasola, F., Ibrahim, M., & Villanueva, C. (2005). Las cercas vivas en las fincas ganaderas.',
      link:
        'http://www.produccion-animal.com.ar/informacion_tecnica/instalaciones/16-cercasvivas.pdf',
    },
    {
      referencia:
        'Arias A., R. (2007). Alternativas de producción ganadera. Guatemala: ICTA.',
      link: '',
    },
    {
      referencia:
        'Centro Internacional de Agricultura Tropical (CIAT). (s.f.). Barreras rompevientos.',
      link: '',
    },
    {
      referencia:
        'Gallego, J., Ojeda, P., Restrepo, J., & Villada, D. (2003). Sistemas silvopastoriles, una opción para el manejo sustentable de la ganadería. Santiago de Cali, Colombia: FIDAR.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2007). Buenas prácticas ganaderas. Bogotá: ICA.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (s.f.). Buenas prácticas ganaderas en la producción de ganado bovino y bufalino destinado al sacrificio para el consumo humano.',
      link:
        'https://www.ica.gov.co/getattachment/35f0d70e-b2dd-4bfc-ac1f-ba169b5ccdca/Publicacion-5.aspx',
    },
    {
      referencia:
        'Ministerio de Agricultura y Ganadería de Costa Rica (MAG). (s.f.). Establecimiento de barreras rompevientos.',
      link: 'http://www.mag.go.cr/bibliotecavirtual/AV-1326.pdf',
    },
    {
      referencia:
        'Murgueitio, E., Ochoa, L., Uribe, F., Valencia, L., & Zuluaga, A. (2011). Proyecto ganadería colombiana sostenible. Bogotá: FEDEGAN.',
      link: '',
    },
    {
      referencia:
        'Navas, A. (2010). Importancia de los sistemas silvopastoriles en la reducción del estrés calórico en sistemas de producción ganadera tropical. Revista de Medicina Veterinaria, 19, 113-122.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (s.f.). Cercas vivas.',
      link: '',
    },
    {
      referencia:
        'Secretaría de Agricultura, Ganadería, Desarrollo Rural, Pesca y Alimentación (SAGARPA). (s.f.). Sistemas silvopastoriles. Texcoco, México: SAGARPA.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta temática',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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

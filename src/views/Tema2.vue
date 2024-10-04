<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistemas silvopastoriles

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-9
        .bg-color-3
          .row.justify-content-center.align-items-center
            .col-xl-auto(data-aos="fade-right")
              img(src="@/assets/curso/tema2/1.svg", style="max-width: 420px", alt="").m-auto.mt-xl-0.mt-4
            .col-xl(data-aos="fade-left")
              .p-4
                p.mb-0 Un sistema silvopastoril combina elementos silvestres con la actividad de pastoreo. En otras palabras, es una mezcla de árboles, arbustos, pasto y ganado en un mismo terreno, en donde se busca una integración de todos los elementos silvestres con los asociados a la actividad ganadera. También existen sistemas agroforestales que consisten en la integración de árboles, arbustos y forraje con cultivos agrícolas. Ambos sistemas surgen como una alternativa para mitigar el impacto medioambiental ocasionado por las prácticas extensivas de producción de carne y cultivos. 
      .col-xl-3(data-aos="fade-left")
        img(src="@/assets/curso/tema2/2.png", style="max-width: 295px", alt="").m-auto.mt-lg-0.d-none.d-xl-block
          
    p(data-aos="fade-left").mb-5 Como se presenta en la siguiente figura, los sistemas silvopastoriles buscan que exista una relación entre la actividad ganadera y forestal a nivel del predio. El sistema está conformado por tres factores: 

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="flip-up")
      h5 Figura 1. 
      span Factores del sistema silvopastoril

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10(data-aos="zoom-in")
            img(src="@/assets/curso/figuras/1.png", style="max-width: 100%", alt="La figura presenta  un diagrama circular que relaciona tres elementos clave en la producción ganadera: pastos, ganado, y árboles. Estos tres componentes están interconectados, lo que sugiere una relación de dependencia y beneficios mutuos entre ellos en un sistema de producción sostenible.").m-auto.d-none.d-md-block
            img(src="@/assets/curso/figuras/1b.png", style="max-width: 100%", alt="La figura presenta  un diagrama circular que relaciona tres elementos clave en la producción ganadera: pastos, ganado, y árboles. Estos tres componentes están interconectados, lo que sugiere una relación de dependencia y beneficios mutuos entre ellos en un sistema de producción sostenible.").m-auto.d-md-none
        p(data-aos="fade-right") En un sistema silvopastoril, todos los componentes, tanto silvestres como ganaderos, se organizan de manera inteligente, buscando siempre que prevalezca una armonía ecológica y económica entre ambas partes. La adecuada implementación de estos sistemas no solo permite disminuir el impacto ambiental en gran medida, sino que también puede incrementar los niveles de productividad pecuaria. 

        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/tema2/3.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Es importante diseñar de manera inteligente el sistema silvopastoril, pues debe evitarse que se generen interferencias entre los componentes silvestres y el pastoreo. Por ejemplo, no deben sembrarse plantas que puedan enfermar o lastimar al ganado, ni árboles que atraigan la presencia de animales que puedan incomodar a los bovinos. 

        p(data-aos="fade-right") Algunos beneficios adicionales que pueden obtenerse con la utilización de estos sistemas son los siguientes: 
        p(data-aos="fade-right") El uso de sistemas silvopastoriles en terrenos ganaderos no solo mejora la producción, sino que también contribuye a la conservación del medio ambiente y la biodiversidad. 
        p(data-aos="fade-right") #[strong Los beneficios de los sistemas silvopastoriles son:]

    .bg-full-width.bg-fondo-4(data-aos="fade-down").mb-5
      .p-4.p-md-5
        .tarjeta.bg-color-white.p-4.p-lg-5.pb-lg-4.shadow-soft(data-aos="fade-up")
          SlyderA(tipo='b')
            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Fijación de dióxido de carbono 
                  p.mt-4 Los árboles y arbustos actúan como sumideros de carbono, absorbiendo dióxido de carbono y transformándolo en oxígeno, contribuyendo a reducir el calentamiento global. 
              .col-lg-4
                img(src='@/assets/curso/tema2/4.png', style="max-width: 419px").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Conservación de la biodiversidad 
                  p.mt-4 Los sistemas silvopastoriles crean hábitats naturales, favoreciendo la biodiversidad de aves, invertebrados y plantas, promoviendo un ecosistema equilibrado con la ganadería.
              .col-lg-4
                img(src='@/assets/curso/tema2/5.png', style="max-width: 419px").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Mejora en la absorción y flujo de agua
                  p.mt-4 Las raíces de los árboles mejoran la absorción de agua en el subsuelo, reduciendo la erosión y aumentando la retención de agua, lo que incrementa la productividad del suelo.
              .col-lg-4
                img(src='@/assets/curso/tema2/6.png', style="max-width: 419px").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Restauración del nitrógeno en el suelo
                  p.mt-4 Las plantas leguminosas y las raíces de los árboles restituyen nitrógeno y reciclan nutrientes de las capas más profundas del suelo, mejorando la fertilidad del mismo.
              .col-lg-4
                img(src='@/assets/curso/tema2/7.png', style="max-width: 419px").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Regulación de la temperatura del ganado
                  p.mt-4 Los árboles proporcionan sombra que regula la temperatura de los animales, lo que mejora su bienestar, incrementa la ingesta de forraje y favorece la productividad de leche y carne.
              .col-lg-4
                img(src='@/assets/curso/tema2/8.png', style="max-width: 419px").mx-auto


    p(data-aos="fade-left").mb-5 Se invita a revisar el video completo para obtener información detallada sobre cómo los sistemas silvopastoriles pueden ofrecer una solución efectiva frente a los desafíos ambientales ocasionados por la ganadería tradicional. 

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/4MWi-eQbmmU?si=V96k_9bU4vcAi0Mj" title="Planificación de un sistema silvopastoril" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Planificación de un sistema silvopastoril


    Separador

    .titulo-segundo.color-secundario(data-aos='fade-right')#t_2_1
      h2 2.1 Arreglos silvopastoriles 

    p La disposición de árboles y arbustos en terrenos ganaderos, conocida como arreglo silvopastoril, puede variar según los objetivos del productor, desde la mejora del suelo hasta el aumento de la productividad ganadera. 

    p #[strong A continuación, se describen algunos de los arreglos silvopastoriles más comúnmente utilizados: ]


    .bg-full-width.bg-fondo-4.mb-5
      .p-4.p-md-5
        .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4.shadow-soft(data-aos="fade-down")
          LineaTiempoC.color-acento-contenido(text-small).px-4(data-aos="fade-up")
            .row(titulo="Callejones para pastura").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Callejones para pastura
                p.mb-4 Organiza filas de árboles o arbustos que forman callejones, utilizando árboles forrajeros de rápido crecimiento en conjunto con pastos y leguminosas. Incrementa la producción de forraje, mejora el suelo y reduce las emisiones de gases. 
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema2/9.png", style="max-width:100%", alt="").mx-auto.mb-4

            .row(titulo="Hilera simple de baja densidad").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Hilera simple de baja densidad 
                p.mb-4 Los árboles se siembran a una distancia de 2 a 3 metros entre sí, y las hileras se separan por distancias de 4 a 6 metros. 
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema2/10.png", style="max-width:100%", alt="").mx-auto.mb-4

            .row(titulo="Hilera simple de alta densidad").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Hilera simple de alta densidad 
                p.mb-4 Cada árbol o arbusto se siembra a 1 metro de distancia del siguiente, manteniendo una distancia equidistante entre ellos. 
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema2/11.png", style="max-width:100%", alt="").mx-auto.mb-4


            .row(titulo="Hilera doble").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Hilera doble
                p.mb-4 Se siembran árboles en dos hileras paralelas, con árboles ubicados en diagonal respecto a los de la otra hilera. Las hileras se separan por una distancia de 6 metros. 
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema2/12.png", style="max-width:100%", alt="").mx-auto.mb-4

            .row(titulo="Hileras alternadas").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Hileras alternadas  
                p.mb-4 Las hileras de árboles se organizan en un solo eje, pero con secciones desplazadas hacia un lado, dejando espacios entre grupos de árboles.
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema2/13.png", style="max-width:100%", alt="").mx-auto.mb-4

            .row(titulo="Arreglo de árboles dispersos").justify-content-center
              .col-lg-7.mb-4.mb-md-0
                h4 Arreglo de árboles dispersos 
                p.mb-4 Árboles y arbustos se distribuyen aleatoriamente en el terreno destinado al ganado, proporcionando sombra y refugio. Se evita la concentración excesiva de árboles en una zona, permitiendo que el ganado paste alrededor de ellos. 
              .col-lg-4
                img.img-fluid(src="@/assets/curso/tema2/14.png", style="max-width:100%", alt="").mx-auto.mb-4

    Separador

    .titulo-segundo.color-secundario(data-aos='fade-right')#t_2_2
      h2 2.2 Pastoreo en plantaciones 

    p(data-aos="fade-left").mb-5 Este modelo combina plantaciones de árboles con la actividad ganadera. Consiste en criar ganado dentro de una plantación, la cual también cuenta con los elementos propios de un potrero, como pastos y plantas herbáceas. Este arreglo silvoforestal es económicamente conveniente, ya que integra dos actividades productivas en un mismo terreno, reduciendo significativamente los costos operativos. 

    .bg-color-4.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-auto(data-aos="fade-left")
          img(src="@/assets/curso/tema2/15.png", style="max-width: 505px", alt="").m-auto.mb-4.mb-lg-0
        .col-lg(data-aos="fade-right")
          .p-4
            p Los forrajes producidos por las plantas y los árboles de la plantación generan nuevas fuentes de alimento para los bovinos, además de ser una fuente de semillas que reabastecen la producción de forraje. Los árboles también proporcionan sombra y refugio para los animales en días de lluvia. 

            p #[strong A pesar de sus ventajas, este tipo de arreglo tiene algunas desventajas, como: ]


    .row
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .custom-image-card
          img.custom-image-card__image(src="@/assets/curso/tema2/16.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0 La vegetación del terreno compite constantemente por espacio, agua, nutrientes y luz, lo que afecta su productividad.
      .col-lg-4.mb-4(data-aos="zoom-in-down")
        .custom-image-card
          img.custom-image-card__image(src="@/assets/curso/tema2/17.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0 La presencia de plantas herbáceas puede atraer plagas, que a su vez transmiten enfermedades a los árboles o incluso al ganado.
      .col-lg-4.mb-4(data-aos="zoom-in-right")
        .custom-image-card
          img.custom-image-card__image(src="@/assets/curso/tema2/18.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0 Los bovinos pueden dañar los arbustos, disminuyendo su valor económico.

    Separador

    .titulo-segundo.color-secundario(data-aos='fade-right')#t_2_3
      h2 2.3 Cercas vivas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        img(src="@/assets/curso/tema2/20.png", style="max-width: 400px", alt="").m-auto.mb-lg-0.mb-4.d-lg-none
        p(data-aos="fade-right") Este sistema de cercas vivas es común en áreas tropicales y consiste en establecer hileras de árboles y arbustos para delimitar áreas dentro de la finca, como los potreros. Este método es mucho más económico que las cercas convencionales. Una cerca viva puede estar formada por una sola especie de árbol leñoso o postes muertos leñosos.  
        .bg-color-5.p-4.py-lg-3.brounded
          .row.justify-content-center.align-items-center
            .col-auto(data-aos="fade-right")
              img(src="@/assets/curso/tema2/19.svg", style="max-width: 80px", alt="").m-auto.mt-lg-0
            .col
              p(data-aos="fade-left").mb-0 La distancia entre los árboles puede variar, pero la más recomendable es de 1 a 3 metros.
      .col-lg-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/20.png", style="max-width: 400px", alt="").m-auto.mt-lg-0.d-none.d-lg-block


    p(data-aos="fade-left").mb-5 #[strong Los beneficios que ofrecen las cercas vivas son:]

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5.brounded-md.mb-4.mb-lg-0(data-aos="zoom-in-up")
        .row.justify-content-center.align-items-end.mb-4
          .col-auto
            img(src='@/assets/curso/tema2/21.svg', alt='')
          .col
            .bg-color-acento-contenido.p-3.py-2.d-inline-block
              h5.mb-0.text-color-black Beneficios para la finca 

        ul.custom-list.mb-0
          li.mb-2 Son especies de larga duración. 
          li.mb-2 Dividen potreros. 
          li.mb-2 Proporcionan sombra al ganado. 
          li.mb-2 Producen madera. 
          li.mb-2 Producen frutos para el consumo humano. 
          li.mb-2 Sirven como alimento para el ganado. 

      .col-md.tarjeta.bg-color-5.p-5.brounded-md.mb-4.mb-lg-0(data-aos="zoom-in-down")
        .row.justify-content-center.align-items-end.mb-4
          .col-auto
            img(src='@/assets/curso/tema2/22.svg', alt='')
          .col
            .bg-color-acento-contenido.p-3.d-inline-block
              h5.mb-0.text-color-black Beneficios ambientales 
        ul.custom-list.mb-0
          li.mb-2 Funcionan como cortafuegos. 
          li.mb-2 Reducen la presión sobre los bosques. 
          li.mb-2 Mejoran la calidad del aire.
          li.mb-2 Mantienen y mejoran los suelos. 
          li.mb-2 Aumentan la presencia de diferentes especies animales. 
          li.mb-2 Embellecen el entorno de la finca. 


    .titulo-tres.mb-4(data-aos="flip-up").mb-5
      h4 Tipos de cercas vivas


    p(data-aos="fade-right").mb-5 Las cercas vivas juegan un papel importante en la conservación ambiental y la mejora de la producción en fincas ganaderas. Estas se dividen en dos tipos principales: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10

        .bg-color-6.mb-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-auto(data-aos="zoom-in-down")
              img(src="@/assets/curso/tema2/23.png", style="max-width: 400px", alt="").m-auto.mt-lg-0.mt-4
            .col-lg(data-aos="zoom-in-up")
              .p-4
                p #[strong Cercas vivas simples:]

                ul.custom-list.mb-0
                  li.mb-2 Compuestas por una sola especie de árbol, como matarratón, guayabo común, ciruela de husito (Spondias spp.), o pachote (Pachira quinata). 
                  li.mb-2 Los árboles se pueden podar cada dos años y son utilizados principalmente para delimitación y control de potreros. 

        .bg-color-6.mb-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-auto(data-aos="zoom-in-down")
              img(src="@/assets/curso/tema2/24.png", style="max-width: 400px", alt="").m-auto.mt-lg-0.mt-4
            .col-lg(data-aos="zoom-in-up")
              .p-4
                p #[strong Cercas vivas multiestratos:]

                ul.custom-list.mb-0
                  li.mb-2 Formadas por dos o tres especies diferentes, como árboles maderables, frutales, forrajeros, ornamentales o medicinales. 
                  li.mb-2 Ofrecen mayor cobertura vegetal en menos tiempo y proporcionan un lugar seguro para la fauna silvestre, especialmente para la anidación de aves. 
                  li.mb-2 Combinan árboles de diferentes alturas, lo que maximiza el uso del espacio y genera diversos productos para consumo y venta durante todo el año. 



    .bg-full-width.bg-fondo-5
      .px-4.px-md-5.pb-0.pb-md-5

        p(data-aos="fade-right").mb-5 #[strong Para seleccionar las especies para las cercas vivas, se debe tener en cuenta lo siguiente:]

        .carousel-bg
          .row.justify-content-center.align-items-center.my-5
            .col-lg-3.d-none.d-lg-block(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/25.png', style="max-width: 100%", alt='').m-auto
            .col-lg-8
              SlyderF.mb-5(columnas="col-lg-6")(data-aos="zoom-in-up")
                .tarjeta.color-primario.p-4.shadow-top-left-right.text-center
                  img(src='@/assets/curso/tema2/26.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                  p.text-center Utilizar especies de la zona o adaptadas a esta.

                .tarjeta.color-primario.p-4.shadow-top-left-right
                  img(src='@/assets/curso/tema2/27.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                  p.text-center Seleccionar especies que representen rentabilidad para la finca en el mercado.

                .tarjeta.color-primario.p-4.shadow-top-left-right
                  img(src='@/assets/curso/tema2/28.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                  p.text-center Elegir especies que no sean tóxicas para el ganado.
                
                .tarjeta.color-primario.p-4.shadow-top-left-right
                  img(src='@/assets/curso/tema2/29.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                  p.text-center Seleccionar especies de usomúltiple, es decir, que proporcionen madera, leña y forraje.

                .tarjeta.color-primario.p-4.shadow-top-left-right
                  img(src='@/assets/curso/tema2/30.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                  p.text-center Garantizar una buena disponibilidad del material para propagar, plántulas o estacas.
                
                .tarjeta.color-primario.p-4.shadow-top-left-right
                  img(src='@/assets/curso/tema2/31.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                  p.text-center Elegir especies que puedan albergar animales silvestres y además provean alimento.
                  
    Separador

    .titulo-segundo.color-secundario(data-aos='fade-right')#t_2_4
      h2 2.4 Barreras rompevientos

    .bg-full-width.bg-fondo-10
      .px-4.px-md-5.pb-4
        p(data-aos="fade-left").mb-5 Las barreras rompevientos consisten en hileras de árboles o arbustos distribuidos según su altura máxima, ubicados en contraposición a la dirección del viento. Estas forman una barrera que cumple la función de disminuir la velocidad con la que el viento impacta las zonas de cultivo o pastoreo, evitando que se dañen las plantas y que el suelo sufra erosión eólica.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Figura 2. 
              span Barreras rompevientos

            img(src="@/assets/curso/figuras/2.svg", style="max-width: 100%", alt="La imagen presenta  un sistema agroforestal, en el que se observan cultivos en la parte principal y una barrera de árboles al fondo. La flecha indica la dirección del viento dominante, sugiriendo que los árboles sirven como protección para los cultivos contra los efectos del viento. Este tipo de sistema promueve la protección de los cultivos y es una técnica común en prácticas agroecológicas.").m-auto(data-aos="zoom-in")

        p(data-aos="fade-right").mb-5 Para la distribución de los árboles en un terreno, es esencial considerar varios factores que influyen en la protección del cultivo y el aprovechamiento del espacio. Estos son #[strong los factores a considerar:] 

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4
            .tarjeta--boton.bg-color-1.p-4.text-center.h-100(data-aos="flip-up")
              img(src='@/assets/curso/tema2/32.svg', alt='', style="max-width: 90px").mx-auto.mb-4
              .bg-color-primario.d-inline-block.p-2.mb-3
                h6.text-center.text-white.mb-0 #[strong Topografía del terreno]
              p.text-center Aprovechar las zonas elevadas del terreno para maximizar su uso y crear una barrera natural que brinde protección adicional.
          .col-lg-4.mb-4
            .tarjeta--boton.bg-color-1.p-4.text-center.h-100(data-aos="flip-up")
              img(src='@/assets/curso/tema2/33.svg', alt='', style="max-width: 90px").mx-auto.mb-4
              .bg-color-primario.d-inline-block.px-2.py-1.mb-3
                h6.text-center.text-white.mb-0 #[strong Dirección del viento]
              p.text-center Ubicar las barreras arbóreas en oposición a la dirección predominante del viento, con el fin de reducir su impacto en el área de cultivo. 

          .col-lg-4.mb-4
            .tarjeta--boton.bg-color-1.p-4.text-center.h-100(data-aos="flip-up")
              img(src='@/assets/curso/tema2/34.svg', alt='', style="max-width: 90px").mx-auto.mb-4
              .bg-color-primario.d-inline-block.px-2.py-1.mb-3
                h6.text-center.text-white.mb-0 #[strong Selección de árboles]
              p.text-center Elegir especies de árboles que alcancen una altura adecuada para proteger eficazmente el cultivo. Los árboles deben ser seleccionados según su adaptabilidad al clima y suelo locales.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .bg-color-secundario.p-5
              .row.justify-content-center.align-items-center
                .col-lg-auto(data-aos="fade-right")
                  img(src="@/assets/curso/tema2/35.png", style="max-width: 400px", alt="").m-auto.mb-lg-0.mb-4
                .col-lg(data-aos="fade-left")
                  p.mb-4 #[strong Entre las ventajas de las barreras rompevientos se encuentran:]
                  ul.custom-list.mb-0
                    li.mb-2 Protegen al ganado del viento, proporcionando sombra.
                    li.mb-2 Crean un microclima favorable para el desarrollo vegetal.
                    li.mb-2 Mejoran la humedad del suelo.
                    li.mb-2 Protegen la calidad de las cosechas.
                    li.mb-2 Ayudan a establecer límites entre predios.
                    li.mb-2 Favorecen la diversidad biológica, animal y vegetal.

        p(data-aos="fade-left").mb-5 #[strong Entre las especies utilizadas como barreras rompevientos están:]

        .row.justify-content-center.align-items-center
          .col-md-11
            .d-flex.flex-row.flex-wrap.justify-content-center
              .custom-image-card-2.d-flex.flex-column.me-4(data-aos="flip-up").mb-4
                img.custom-image-card-2__image(src="@/assets/curso/tema2/36.png" alt="")
                .bg-color-8.px-4.py-2
                  h6.mb-0.text-center.text-white Leucaena

              .custom-image-card-2.d-flex.flex-column.me-4(data-aos="flip-down").mb-4
                img.custom-image-card-2__image(src="@/assets/curso/tema2/37.png" alt="")
                .bg-color-8.px-4.py-2
                  h6.mb-0.text-center.text-white Matarratón


              .custom-image-card-2.d-flex.flex-column.me-4(data-aos="flip-left").mb-4
                img.custom-image-card-2__image(src="@/assets/curso/tema2/38.png" alt="")
                .bg-color-8.px-4.py-2
                  h6.mb-0.text-center.text-white Madrecacao

              .custom-image-card-2.d-flex.flex-column.me-4(data-aos="zoom-in-down").mb-4
                img.custom-image-card-2__image(src="@/assets/curso/tema2/39.png" alt="")
                .bg-color-8.px-4.py-2
                  h6.mb-0.text-center.text-white Kakauati

              .custom-image-card-2.d-flex.flex-column.me-4(data-aos="zoom-in-up").mb-4
                img.custom-image-card-2__image(src="@/assets/curso/tema2/40.png" alt="")
                .bg-color-8.px-4.py-2
                  h6.mb-0.text-center.text-white Gandul


    Separador

    .titulo-segundo.color-secundario(data-aos='fade-right')#t_2_5
      h2 2.5 Barreras vivas 

    p(data-aos="fade-right").mb-4 Las barreras vivas son cultivos sembrados en laderas para evitar la erosión. Esta técnica ayuda a conservar el suelo y el agua. Para que actúen como barreras, las plantas deben sembrarse de manera tupida en los surcos. 

    p(data-aos="fade-right").mb-5 #[strong La importancia de esta práctica radica en que:]

    .row.justify-content-center.align-items-stretch
      .col-lg-3(data-aos="zoom-in-up").mb-4.mb-lg-0
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/tema2/41.svg' alt='' style="max-width: 97px")
          .tarjeta.bg-color-7.w-100
            .p-4.mt-4
              p.text-center Ayuda a retener la tierra, permitiendo el paso del agua.
      
      .col-lg-3(data-aos="zoom-in").mb-4.mb-lg-0
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/tema2/42.svg' alt='' style="max-width: 97px")
          .tarjeta.bg-color-7.w-100
            .p-4.mt-4
              p.text-center Tiene un aprovechamiento variado, ya que proporciona alimento para animales, humanos y mejora la calidad del suelo.

      .col-lg-3(data-aos="zoom-in-down").mb-4.mb-lg-0
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/tema2/43.svg' alt='' style="max-width: 97px")
          .tarjeta.bg-color-7.w-100
            .p-4.mt-4
              p.text-center Evita que el suelo pierda fertilidad, reteniendo fertilidad al evitar la erosión y retener el agua.

      .col-lg-3(data-aos="zoom-in").mb-4.mb-lg-0
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/tema2/44.svg' alt='' style="max-width: 97px")
          .tarjeta.bg-color-7.w-100
            .p-4.mt-4
              p.text-center Las especies sembradas dependen de la región; entre las más usadas están la caña de azúcar, el banano, el té de limón y la piña, entre otros.



</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass"></style>

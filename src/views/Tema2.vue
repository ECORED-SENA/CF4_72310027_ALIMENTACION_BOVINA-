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
              img(src="@/assets/curso/tema2/1.svg", style="max-width: 420px", alt="").m-auto.mt-lg-0.mt-4
            .col-xl(data-aos="fade-left")
              .p-4
                p.mb-0 Un sistema silvopastoril combina elementos silvestres con la actividad de pastoreo. En otras palabras, es una mezcla de árboles, arbustos, pasto y ganado en un mismo terreno, en donde se busca una integración de todos los elementos silvestres con los asociados a la actividad ganadera. También existen sistemas agroforestales que consisten en la integración de árboles, arbustos y forraje con cultivos agrícolas. Ambos sistemas surgen como una alternativa para mitigar el impacto medioambiental ocasionado por las prácticas extensivas de producción de carne y cultivos. 
      .col-xl-3(data-aos="fade-left")
        img(src="@/assets/curso/tema2/2.png", style="max-width: 295px", alt="").m-auto.mt-lg-0.d-none.d-xl-block
          
    p(data-aos="fade-left").mb-5 Como se presenta en la siguiente figura, los sistemas silvopastoriles buscan que exista una relación entre la actividad ganadera y forestal a nivel del predio. El sistema está conformado por tres factores: 

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Figura 1. 
      span Factos sistema silvopastoril 

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            img(src="@/assets/curso/figuras/1.png", style="max-width: 100%", alt="").m-auto.d-none.d-md-block
            img(src="@/assets/curso/figuras/1b.png", style="max-width: 100%", alt="").m-auto.d-md-none
        p(data-aos="fade-right") En un sistema silvopastoril, todos los componentes, tanto silvestres como ganaderos, se organizan de manera inteligente, buscando siempre que prevalezca una armonía ecológica y económica entre ambas partes. La adecuada implementación de estos sistemas no solo permite disminuir el impacto ambiental en gran medida, sino que también puede incrementar los niveles de productividad pecuaria. 

        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/tema2/3.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Es importante diseñar de manera inteligente el sistema silvopastoril, pues debe evitarse que se generen interferencias entre los componentes silvestres y el pastoreo. Por ejemplo, no deben sembrarse plantas que puedan enfermar o lastimar al ganado, ni árboles que atraigan la presencia de animales que puedan incomodar a los bovinos. 

        p Algunos beneficios adicionales que pueden obtenerse con la utilización de estos sistemas son los siguientes: 
        p El uso de sistemas silvopastoriles en terrenos ganaderos no solo mejora la producción, sino que también contribuye a la conservación del medio ambiente y la biodiversidad. 
        p #[strong Los beneficios de los sistemas silvopastoriles son:]

    .bg-full-width.bg-fondo-4(data-aos="fade-down").mb-5
      .p-4.p-md-5
        .tarjeta.bg-color-white.p-4.p-lg-5.pb-lg-4.shadow-soft
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
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    Separador

    .titulo-segundo.color-secundario(data-aos='fade-right')
      h2 2.1 Arreglos silvopastoriles 

    p La disposición de árboles y arbustos en terrenos ganaderos, conocida como arreglo silvopastoril, puede variar según los objetivos del productor, desde la mejora del suelo hasta el aumento de la productividad ganadera. 

    p #[strong A continuación, se describen algunos de los arreglos silvopastoriles más comúnmente utilizados: ]


    .bg-full-width.bg-fondo-4(data-aos="fade-down").mb-5
      .p-4.p-md-5
        .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4.shadow-soft
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

    .titulo-segundo.color-secundario(data-aos='fade-right')
      h2 2.2 Pastoreo en plantaciones 

    p(data-aos="fade-left").mb-5 Este modelo combina plantaciones de árboles con la actividad ganadera. Consiste en criar ganado dentro de una plantación, la cual también cuenta con los elementos propios de un potrero, como pastos y plantas herbáceas. Este arreglo silvoforestal es económicamente conveniente, ya que integra dos actividades productivas en un mismo terreno, reduciendo significativamente los costos operativos. 

    .bg-color-4.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-auto
          img(src="@/assets/curso/tema2/15.png", style="max-width: 505px", alt="").m-auto.mb-4.mb-lg-0
        .col-lg
          .p-4
            p Los forrajes producidos por las plantas y los árboles de la plantación generan nuevas fuentes de alimento para los bovinos, además de ser una fuente de semillas que reabastecen la producción de forraje. Los árboles también proporcionan sombra y refugio para los animales en días de lluvia. 

            p #[strong A pesar de sus ventajas, este tipo de arreglo tiene algunas desventajas, como: ]


    .row
      .col-lg-4.mb-4
        .custom-image-card
          img.custom-image-card__image(src="@/assets/curso/tema2/16.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0 La vegetación del terreno compite constantemente por espacio, agua, nutrientes y luz, lo que afecta su productividad.
      .col-lg-4.mb-4
        .custom-image-card
          img.custom-image-card__image(src="@/assets/curso/tema2/17.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0 La presencia de plantas herbáceas puede atraer plagas, que a su vez transmiten enfermedades a los árboles o incluso al ganado.
      .col-lg-4.mb-4
        .custom-image-card
          img.custom-image-card__image(src="@/assets/curso/tema2/18.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0 Los bovinos pueden dañar los arbustos, disminuyendo su valor económico.

    Separador

    .titulo-segundo.color-secundario(data-aos='fade-right')
      h2 2.3 Cercas vivas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-right") Este sistema de cercas vivas es común en áreas tropicales y consiste en establecer hileras de árboles y arbustos para delimitar áreas dentro de la finca, como los potreros. Este método es mucho más económico que las cercas convencionales. Una cerca viva puede estar formada por una sola especie de árbol leñoso o postes muertos leñosos.  
        .bg-color-5.p-4.py-lg-3.brounded
          .row.justify-content-center.align-items-center
            .col-auto(data-aos="fade-right")
              img(src="@/assets/curso/tema2/19.svg", style="max-width: 80px", alt="").m-auto.mt-lg-0
            .col
              p(data-aos="fade-left").mb-0 La distancia entre los árboles puede variar, pero la más recomendable es de 1 a 3 metros.
      .col-lg-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/20.png", style="max-width: 400px", alt="").m-auto.mt-lg-0


    p(data-aos="fade-left").mb-5 #[strong Los beneficios que ofrecen las cercas vivas son:]

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
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

      .col-md.tarjeta.bg-color-5.p-5
        .row.justify-content-center.align-items-end.mb-4
          .col-auto
            img(src='@/assets/curso/tema2/21.svg', alt='')
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

    Separador
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

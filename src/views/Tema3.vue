<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Bancos de proteínas


    p(data-aos="fade-right") Los bancos de proteínas son cultivos intensivos de diversas especies de leguminosas que sirven como alimento para el ganado. Son resistentes a las podas y tienen una gran capacidad de rebrote. El forraje obtenido en los bancos de proteínas se utiliza como suplemento en la dieta del ganado alimentado con pasto. 

    p(data-aos="fade-right")  #[strong Existen tres tipos de bancos de proteínas:]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        img(src="@/assets/curso/tema3/1.png", style="max-width: 293px", alt="").m-auto

      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-1")
          .row(titulo="Especies forrajeras arbóreas que se siembran solas")
            .col-md-6.mb-4.mb-md-0
              p Se cultivan a altas densidades y requieren podas manuales para su mantenimiento. 
            .col-md-6
              img(src='@/assets/curso/tema3/2.png', alt='', style='max-width: 226px').m-auto

          .row(titulo="Forrajeras arbóreas asociadas ")
            .col-md-6.mb-4.mb-md-0
              p Son especies de mayor tamaño, sembradas en cultivos o pastizales. Dificultan el consumo directo por el ganado, por lo que el material comestible debe ser transportado manualmente. 
            .col-md-6
              img(src='@/assets/curso/tema3/3.png', alt='', style='max-width: 226px').m-auto

          .row(titulo="Especies forrajeras arbóreas sembradas en bordes o franjas")
            .col-md-6.mb-4.mb-md-0
              p Se siembran junto con pasto o caña y se propagan por medios sexuales o asexuales. 
            .col-md-6
              img(src='@/assets/curso/tema3/4.png', alt='', style='max-width: 226px').m-auto

    p(data-aos="fade-right").mb-5 #[strong Las características de las especies arbóreas utilizadas en los bancos de proteínas son:]


    .bg-full-width.bg-fondo-7
      .px-4.px-md-5.pb-5
        .row.mb-5
          .col-lg-4.mb-4
            .custom-image-card
              img.custom-image-card__image(src="@/assets/curso/tema3/5.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0 #[strong Arco nacedero]
                p.mb-0 Esta especie tiene un alto valor nutricional y buena digestibilidad.
          .col-lg-4.mb-4
            .custom-image-card
              img.custom-image-card__image(src="@/assets/curso/tema3/6.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0 #[strong Matarratón]
                p.mb-0 Es una especie que tolera suelos pobres y se desarrolla en altitudes de entre 0 y 1,500 metros sobre el nivel del mar.
          .col-lg-4.mb-4
            .custom-image-card
              img.custom-image-card__image(src="@/assets/curso/tema3/7.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0 #[strong Leucaena]
                p.mb-0 Esta leguminosa es rica en betacarotenos y fósforo. Ha sido ampliamente estudiada en los trópicos debido a sus propiedades antioxidantes.
        

        .titulo-tres.mb-4(data-aos="flip-up").mb-4
          h4 La reconversión agrícola y pecuaria 

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8(data-aos="fade-right")
            .bg-color-1.p-4
              p Este proceso se realiza durante un tiempo determinado en el que el sistema agrario o ganadero necesita mejorar la producción de un cultivo o restablecer la fertilidad del predio y la unidad productiva. 
          .col-lg-4(data-aos="fade-left")
            img(src="@/assets/curso/tema3/8.png", style="max-width: 400px", alt="").m-auto.mt-lg-0
      

        .titulo-tres.mb-4(data-aos="flip-up").mb-4
          h4 Plan de reconversión 

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8(data-aos="fade-right")
            .bg-color-1.p-4
              p Este proceso requiere una buena planificación, en la que se involucren tanto los recursos naturales como los humanos. Lo primero que debe hacerse es elaborar un plan de reconversión en el que se analice la situación. En este documento deben quedar estipulados los cambios y estrategias a utilizar para mejorar el cultivo. 
          .col-lg-4(data-aos="fade-left")
            img(src="@/assets/curso/tema3/9.png", style="max-width: 400px", alt="").m-auto.mt-lg-0

        .titulo-tres.mb-4(data-aos="flip-up").mb-4
          h4 Historial de la finca o situación de partida

        .row.justify-content-center.align-items-center
          .col-lg-8(data-aos="fade-right")
            .bg-color-1.p-4
              p Este es el primer paso para realizar un plan de conversión ecológica. Deben tenerse en cuenta algunos aspectos que deben ser contemplados en el análisis inicial, como se presenta  en la siguiente figura: 
          .col-lg-4(data-aos="fade-left")
            img(src="@/assets/curso/tema3/10.png", style="max-width: 400px", alt="").m-auto.mt-lg-0


    .titulo-sexto.color-acento-contenido(data-aos="flip-up").mb-5
      h5 Figura 3. 
      span Aspectos de la finca 

    .row.justify-content-center.align-items-center.mb-5.pb-4
      .col-lg-10.col-xl-8
        img(src="@/assets/curso/figuras/3.svg", style="max-width: 990px", alt="").m-auto

    .bg-full-width.bg-fondo-7
      .px-4.px-md-5.pb-5
        .titulo-tres.mb-4(data-aos="flip-up").mb-4
          h4 Programa de actualizaciones 

        p(data-aos="fade-right").mb-5 En el programa de reconversión se debe incluir la secuencia de actualizaciones necesarias para alcanzar el objetivo esperado. Para ello, considere las siguientes indicaciones: 

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .bg-color-6(data-aos="fade-right")
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema3/11.png", style="max-width: 400px", alt="").m-auto.mt-lg-0
                .col-lg 
                  .p-4
                    ul.custom-list.mb-0
                      li.mb-2 Elaborar un plan de manejo del suelo.
                      li.mb-2 Diseñar un plan de manejo de rotación de cultivos.
                      li.mb-2 Ajustar la ganadería.
                      li.mb-2 Mejorar la biodiversidad, si es pobre, se deben sembrar especies.
                      li.mb-0 La infraestructura se debe adaptar

        p(data-aos="fade-right").mb-5 #[strong La reconversión de una finca puede realizarse de diferentes maneras:] 

        .row.mb-5
          .col-lg-4.mb-4(data-aos="fade-right")
            .custom-image-card.bg-color-1
              img.custom-image-card__image(src="@/assets/curso/tema3/12.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0 #[strong Conversión total]
                p.mb-0 Aplica a toda la finca, ideal cuando no hay cultivos. Permite empezar desde cero y es beneficioso para el productor. 
          .col-lg-4.mb-4(data-aos="zoom-in")
            .custom-image-card.bg-color-1
              img.custom-image-card__image(src="@/assets/curso/tema3/13.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0 #[strong Conversión gradual u horizontal]
                p.mb-0 Se empieza en una parte de la finca y se va aumentando la superficie conforme se adquiere experiencia. 
          .col-lg-4.mb-4(data-aos="fade-left")
            .custom-image-card.bg-color-1
              img.custom-image-card__image(src="@/assets/curso/tema3/14.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0 #[strong Conversión vertical]                
                p.mb-0 Incorpora técnicas de reconversión de manera gradual, reduciendo el uso de agroquímicos y aplicando modelos ecológicos de producción. 


</template>

<script>
export default {
  name: 'Tema3',
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

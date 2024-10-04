<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Impacto económico y ambiental de la ganadería

    
    p La ganadería, como uno de los pilares fundamentales del sector agropecuario, tiene un impacto considerable en la economía y el medio ambiente. Desde el punto de vista económico, contribuye significativamente al producto interno bruto (PIB) y es una fuente crucial de empleo e ingresos para muchas familias rurales.  

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/tema1/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Esta actividad también presenta importantes desafíos ambientales, como la emisión de gases de efecto invernadero, la degradación del suelo y la pérdida de biodiversidad. Analizar el impacto económico y ambiental de la ganadería es esencial para encontrar un equilibrio entre el desarrollo productivo y la sostenibilidad ecológica.


        .titulo-tres.mb-4(data-aos="flip-up").mb-4
          h4 Perspectiva económica 

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            p(data-aos="fade-right") En Colombia, la actividad ganadera representa el #[strong 3 % de la riqueza nacional], tiene una participación del #[strong 26 % en la producción global] del sector agropecuario y genera el 60 % del PIB pecuario. Más allá de los números y cifras, la ganadería es la fuente de ingresos y sustento de miles de familias que ocupan de manera pacífica las complicadas zonas rurales del país. Inclusive, al día de hoy, la ganadería se ha convertido en una cultura, un estilo de vida que embarga a una buena parte de la población nacional y que representa la identidad e idiosincrasia de muchos colombianos, cuya gran mayoría no conoce otra forma de ganarse la vida. 
          .col-lg-4(data-aos="fade-left")
            img(src="@/assets/curso/tema1/2.png", style="max-width: 400px", alt="").m-auto.mt-lg-0


        .titulo-tres.mb-4(data-aos="flip-up").mb-4
          h4 Perspectiva medioambiental 

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            p(data-aos="fade-right") Desde una perspectiva medioambiental, las actividades humanas han generado un impacto considerable en los ecosistemas, afectando tanto la biodiversidad como la calidad del aire, suelo y agua. Este enfoque busca comprender cómo prácticas como la agricultura, la ganadería y la industria influyen en el equilibrio natural, promoviendo soluciones sostenibles para mitigar el daño y preservar los recursos para las futuras generaciones. 
          .col-lg-4(data-aos="fade-left")
            img(src="@/assets/curso/tema1/3.png", style="max-width: 400px", alt="").m-auto.mt-lg-0

        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

        .titulo-tres.mb-4(data-aos="flip-up").mb-4
          h4 Sistemas alternos de producción ganadera

        p(data-aos="fade-right").mb-5 La ganadería es una actividad económica de gran tamaño e importancia, y difícilmente detendrá su crecimiento. Además de ser la fuente de ingreso de muchas personas, es un atractivo para la inversión y constituye uno de los pilares del sector primario de la economía. 


        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .bg-color-primario.brounded.p-4
              .row.align-items-center
                .col-lg-auto(data-aos="fade-right")
                  img(src="@/assets/curso/tema1/4.svg", style="max-width: 85px", alt="").m-auto.mb-4.mb-lg-0
                .col-lg(data-aos="fade-left")
                  p.mb-0.text-white #[strong No puede negarse] que la ganadería extensiva ocasiona un fuerte impacto sobre el medio ambiente y contribuye al deterioro de las condiciones atmosféricas, como la calidad del aire y la estabilidad climática.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            p(data-aos="fade-right") En respuesta a la necesidad de mantener la producción de carne y leche que abastece un enorme mercado a nivel global, y de mitigar el impacto negativo que dicha producción genera para el medio ambiente, han surgido diversas alternativas que proponen la integración de componentes silvestres y forestales con la crianza de ganado.  
            .bg-color-2.p-4.brounded-xs
              p(data-aos="fade-left").mb-0 #[strong El objetivo es simple:] garantizar la producción, minimizando tanto como sea posible el impacto ambiental. 
              img(src="@/assets/curso/tema1/5.png", style="max-width: 400px", alt="").m-auto.mt-lg-0.mt-4.d-lg-none
          .col-lg-4(data-aos="fade-left")
            img(src="@/assets/curso/tema1/5.png", style="max-width: 400px", alt="").m-auto.mt-lg-0.d-none.d-lg-block


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

<style lang="sass"></style>

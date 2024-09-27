<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-5
        .row.mb-4.align-items-center
          .col-lg-8
            .row.mb-4
              .col-lg-auto(data-aos="fade-right").d-none.d-lg-block
                img(src="@/assets/curso/intro/1.svg", style="max-width: 85px", alt="").m-auto.mb-4.mb--0
              .col-lg(data-aos="fade-left")
                p.mb-0 La ganadería es una actividad de gran relevancia económica y cultural en muchas regiones del mundo, incluida Colombia, donde representa una importante fuente de ingresos para miles de familias rurales. Sin embargo, su crecimiento ha generado preocupaciones debido al impacto ambiental que produce, como la emisión de gases de efecto invernadero y la degradación de suelos. 

            .bg-color-1.brounded.mb-4.p-4
              .row
                .col-lg-auto(data-aos="fade-right")
                  img(src="@/assets/curso/intro/3.svg", style="max-width: 155px", alt="").m-auto.mb-4.mb-lg-0
                .col-lg(data-aos="fade-left")
                  p.mb-0 En respuesta a estos desafíos, han surgido alternativas de producción ganadera que buscan mitigar los efectos negativos sobre el medio ambiente, sin comprometer la productividad. Entre estas alternativas destacan los sistemas silvopastoriles, que integran árboles y arbustos con el pastoreo, y las cercas vivas, que además de dividir áreas dentro de las fincas, ofrecen beneficios ambientales y económicos. 

          .col-lg-4(data-aos="fade-left").d-none.d-lg-block
            img(src="@/assets/curso/intro/2.png", style="max-width: 505px", alt="").m-auto.mt-lg-0

        p(data-aos="fade-right") Este componente formativo también explora la importancia de los bancos de proteínas y la reconversión agrícola como métodos para mejorar la sostenibilidad de la ganadería. Asimismo, se describen las Buenas Prácticas Ganaderas (BPG), que garantizan la producción de alimentos de origen animal de manera responsable, segura y en armonía con el medio ambiente. 
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

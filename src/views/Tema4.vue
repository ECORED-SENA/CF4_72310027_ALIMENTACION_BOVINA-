<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Buenas Prácticas Ganaderas (BPG)
  

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          .bg-color-3.brounded.p-4.py-lg-5.px-lg-4(data-aos="fade-right")
            p.mb-0 Las Buenas Prácticas Ganaderas son normas elaboradas para garantizar la inocuidad en la producción de alimentos de origen animal y el bienestar animal. Se aplican principalmente en la producción del sector primario. 
        .col-lg-4(data-aos="fade-left")
          img(src="@/assets/curso/tema4/1.png", style="max-width: 400px", alt="").m-auto.mt-lg-0


  
      .bg-full-width.bg-fondo-5
        .px-4.px-md-5.pb-5

          p(data-aos="fade-right") A continuación, se explican algunos aspectos de estas normas, relacionados con la alimentación animal, el suministro de agua y el almacenamiento de alimentos. 
          p(data-aos="fade-right") #[strong Alimentación animal:]

          .carousel-bg
            .row.justify-content-center.align-items-center.my-5
              .col-lg-3.d-none.d-lg-block(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/7.png', style="max-width: 100%", alt='').m-auto
              .col-lg-8
                SlyderF.mb-5(columnas="col-lg-6 col-xxl-4")(data-aos="zoom-in-up")
                  .tarjeta.color-primario.p-4.shadow-top-left-right.text-center
                    img(src='@/assets/curso/tema4/2.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                    .bg-color-secundario.d-inline-block.px-2.py-1.mb-3
                      h6.text-center.mb-0.text-color-black #[strong Registro en el ICA] 
                    p.text-center.text-small.lh-sm Todos los alimentos, suplementos, sales mineralizadas, plaguicidas, fertilizantes e insumos agrícolas deben tener registro en el ICA. 

                  .tarjeta.color-primario.p-4.shadow-top-left-right
                    img(src='@/assets/curso/tema4/3.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                    .bg-color-secundario.d-inline-block.px-2.py-1.mb-3
                        h6.text-center.mb-0.text-color-black Prohibición de harinas de origen animal 
                    p.text-center.text-small.lh-sm No se permite usar suplementos que contengan harinas de carne, sangre, hueso o despojos de mamíferos. 
                  
                  .tarjeta.color-primario.p-4.shadow-top-left-right
                    img(src='@/assets/curso/tema4/4.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                    .bg-color-secundario.d-inline-block.px-2.py-1.mb-3
                      h6.text-center.mb-0.text-color-black Control de subproductos contaminados 
                    p.text-center.text-small.lh-sm No se deben utilizar subproductos de cosechas contaminados con plaguicidas, y debe registrarse el origen de todos los productos empleados en la alimentación. 

                  .tarjeta.color-primario.p-4.shadow-top-left-right
                    img(src='@/assets/curso/tema4/5.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                    .bg-color-secundario.d-inline-block.px-2.py-1.mb-3
                      h6.text-center.mb-0.text-color-black #[strong Respeto al período de carencia de plaguicidas] 
                    p.text-center.text-small.lh-sm Si se aplican plaguicidas a forrajes o cultivos destinados a la alimentación animal, debe respetarse el período de carencia del producto. 

                  .tarjeta.color-primario.p-4.shadow-top-left-right
                    img(src='@/assets/curso/tema4/6.svg', style="max-width: 89px", alt='').mx-auto.mb-4
                    .bg-color-secundario.d-inline-block.px-2.py-1.mb-3
                      h6.text-center.mb-0.text-color-black Uso de materiales transgénicos 
                    p.text-center.text-small.lh-sm El uso de materiales transgénicos en alimentación o salud animal debe contar con la autorización del ICA. 
              
      .bg-full-width.bg-fondo-6
        .px-4.px-md-5.pb-5
          .bg-color-secundario.brounded.px-3.py-2.d-inline-block.mb-5
            h5.mb-0 Suministro de agua:

          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              .bg-color-6.mb-5
                .row.justify-content-center.align-items-center.mb-5
                  .col-lg-auto
                    img(src="@/assets/curso/tema4/8.png", style="max-width: 400px", alt="").m-auto.mt-lg-0
                  .col-lg 
                    .p-4
                      ul.custom-list.mb-0
                        li.mb-4 El suministro de agua para los animales debe ser permanente, sin restricciones y en condiciones higiénicas. 
                        li.mb-4 El agua utilizada en la alimentación del ganado debe tener una calidad que no afecte la inocuidad de los productos obtenidos de los animales. 
                        li.mb-4 Los sitios de obtención y almacenamiento de agua deben estar protegidos de la contaminación. 

          .bg-color-secundario.brounded.px-3.py-2.d-inline-block.mb-5
            h5.mb-0 Almacenamiento de alimentos: 

          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              .bg-color-6.mb-5
                .row.justify-content-center.align-items-center.mb-5
                  .col-lg-auto
                    img(src="@/assets/curso/tema4/8.png", style="max-width: 400px", alt="").m-auto.mt-lg-0
                  .col-lg 
                    .p-4
                      ul.custom-list.mb-0
                        li.mb-4 Los alimentos deben almacenarse en bodegas destinadas exclusivamente a este fin, las cuales deben mantenerse cerradas para impedir el ingreso de plagas y animales.
                        li.mb-4 Deben controlarse las condiciones de temperatura y humedad durante el almacenamiento para evitar su deterioro o contaminación por hongos.
                        li.mb-4 Los alimentos en bultos deben colocarse sobre estibas y separados de las paredes.


      .titulo-tres.mb-4(data-aos="flip-up").mb-5
        h4 Buenas Prácticas Ganaderas en la producción de leche y carne

      
      .row.justify-content-center.align-items-center.mb-5.pb-4
        .col-lg-8
          p(data-aos="fade-right") Las BPG se aplican en la producción pecuaria con el fin de que las empresas ganaderas alcancen la sostenibilidad ambiental, económica y social. Estas prácticas buscan garantizar la obtención de productos sanos, seguros para el consumo y de buena calidad. 
          .bg-color-7.p-4.brounded-xs
            p(data-aos="fade-left").mb-0 La implementación de estas normas, especialmente en la producción de carne y leche, puede generar una gran variedad de beneficios. Sin embargo, su aplicación no es sencilla y requiere mucho esfuerzo y dedicación por parte de las personas involucradas en la finca ganadera. Los beneficios de aplicar estas normas en el ámbito productivo son los siguientes: 
        .col-lg-4(data-aos="fade-left")
          img(src="@/assets/curso/tema4/10.png", style="max-width: 400px", alt="").m-auto.mt-lg-0
          

      .row.justify-content-center.my-5
          .col-lg-4.d-none.d-lg-block(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema4/11.png', style="max-width: 100%", alt='').m-auto

          .col-lg-8(data-aos="fade-right")
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-1")
              div(titulo="Inocuidad de productos")
                p.mb-0 Los productos son libres de contaminantes biológicos y químicos, permitiendo acceder a mercados con mayores exigencias de calidad. 
              div(titulo="Oportunidades en mercados internacionales")
                p.mb-0 Se abren oportunidades en mercados con mejores precios y sin intermediarios, lo que permite al productor vender a precios más competitivos. 
              div(titulo="Mejor control de actividades empresariales")
                p.mb-0 El manejo de registros detallados facilita la toma de decisiones, ofreciendo un mejor conocimiento sobre el comportamiento económico y financiero de la empresa. 
              div(titulo="Mejora en la productividad y administración")
                p.mb-0 Una buena gestión de insumos, instalaciones y personal mejora la productividad, competitividad, reduce costos y optimiza la eficiencia productiva. 
              div(titulo="Mejor imagen en el mercado")
                p.mb-0 La empresa mejora su imagen y sus productos son mejor valorados por los compradores, quienes confían en los certificados de Buenas Prácticas Ganaderas.  
              div(titulo="Mejora en condiciones laborales y sociales")
                p.mb-0 Las condiciones de trabajo y vida de los empleados mejoran, contribuyendo al bienestar general y la calidad de vida de las personas de la región. 

  </template>

<script>
export default {
  name: 'Tema4',
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

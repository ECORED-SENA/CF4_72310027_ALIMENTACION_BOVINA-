<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis sobre la productividad ganadera. Expone los sistemas alternos para la producción de ganado bovino, que buscan una relación eficiente entre la actividad ganadera y el terreno, así como favorecer el impacto económico y ambiental. También menciona los planes de reconversión, que incluyen la actualización del proceso, manejo del suelo, mejor infraestructura y biodiversidad de especies forrajeras. Finalmente, detalla las buenas prácticas ganaderas, enfocadas en mejorar la dosificación y almacenamiento de alimentos y favorecer la productividad en sectores como carne y leche.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo: 'Cuestionario: Impacto económico y ambiental de la ganadería',
      introduccion:
        '<b> Objetivo:</b> Analizar el impacto económico y ambiental de la ganadería, identificando prácticas sostenibles como los sistemas silvopastoriles, las cercas vivas y los bancos de proteínas. Lea cada enunciado y luego seleccione la respuesta correcta según corresponda.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué porcentaje del PIB de Colombia representa la actividad ganadera?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '5 %', esCorrecta: false },
            { id: 'b', texto: '10 %', esCorrecta: false },
            { id: 'c', texto: '3 %', esCorrecta: true },
            { id: 'd', texto: '7 %', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué gas de efecto invernadero emiten principalmente los bovinos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Metano (CH<sub>4</sub>)', esCorrecta: true },
            {
              id: 'b',
              texto: 'Dióxido de azufre (SO<sub>2</sub>)',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Óxido nitroso (N<sub>2</sub>O)',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Ozono (O<sub>3</sub>)', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué técnica combina la cría de ganado con plantaciones de árboles?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Potrerización.', esCorrecta: false },
            { id: 'b', texto: 'Pastoreo en plantaciones.', esCorrecta: true },
            { id: 'c', texto: 'Banco de proteínas.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Arreglo de hileras alternadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué es la potrerización?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La instalación de cercas vivas en terrenos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La conversión de terrenos boscosos en potreros.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El uso de forrajes en la alimentación del ganado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El diseño de bancos de proteínas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes no es un tipo de sistema silvopastoril?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Hilera simple.', esCorrecta: false },
            { id: 'b', texto: 'Potrero rotativo.', esCorrecta: true },
            { id: 'c', texto: 'Hilera doble.', esCorrecta: false },
            { id: 'd', texto: 'Callejones para pastura.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es uno de los principales beneficios de las cercas vivas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proporcionan sombra al ganado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumentan la emisión de gases de efecto invernadero.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Facilitan el uso de maquinaria agrícola.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducen la calidad del aire.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué tipo de cultivos se usan en los bancos de proteínas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cereales.', esCorrecta: false },
            { id: 'b', texto: 'Plantas leñosas.', esCorrecta: false },
            { id: 'c', texto: 'Leguminosas.', esCorrecta: true },
            { id: 'd', texto: 'Frutales.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es el principal objetivo de las Buenas Prácticas Ganaderas (BPG)?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar la inocuidad de los productos de origen animal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Maximizar la producción de carne.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir los costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar la cría intensiva de ganado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de los siguientes es un beneficio de los sistemas silvopastoriles?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentan las emisiones de CO<sub>2</sub>.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Conservan la biodiversidad.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Reducen la calidad del suelo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentan la temperatura ambiental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué es la compactación del suelo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La plantación de árboles en el terreno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El proceso en el que el peso del ganado reduce la porosidad del suelo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La mejora en la calidad del suelo por el uso de fertilizantes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El aumento de la fertilidad del terreno por pastoreo intensivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>

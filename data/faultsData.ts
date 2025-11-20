
import { Fault } from '../types';

export const faults: Fault[] = [
  {
    id: 'no-power',
    symptom: 'La cafetera no enciende',
    causes: [
      'El cable de alimentación no está bien conectado.',
      'El enchufe de la pared no tiene electricidad.',
      'El interruptor principal de la máquina está apagado.',
    ],
    solutionSteps: [
      {
        step: 1,
        description:
          'Primero, vamos a asegurarnos de que todo esté bien conectado. Revisa que el cable esté firmemente enchufado tanto en la cafetera como en la pared. ¡A veces se afloja un poquito y no nos damos cuenta!',
        imagePlaceholder: 'Diagrama mostrando el cable de alimentación conectado a la cafetera y al enchufe.',
      },
      {
        step: 2,
        description:
          'Ahora, comprobemos si el enchufe funciona. Para estar seguros, prueba a conectar otro aparato que sepas que funciona, como una lámpara o un cargador de móvil. Si tampoco enciende, el problema es del enchufe, no de la cafetera.',
        imagePlaceholder: 'Icono de una lámpara enchufada en la misma toma de corriente.',
      },
      {
        step: 3,
        description:
          '¡Un último paso! Busca el interruptor general de la cafetera. Normalmente es un botón grande en un lateral o en la parte de atrás. Asegúrate de que está en la posición de encendido (marcado como "I" o "ON").',
        imagePlaceholder: 'Círculo de zoom sobre el interruptor de encendido de una cafetera Nespresso.',
      },
    ],
    preventionTips: [
      'Al mover la cafetera, ten cuidado de no doblar o pisar el cable.',
      'Usa siempre el interruptor de la máquina para apagarla antes de desenchufarla de la pared.',
    ],
  },
  {
    id: 'only-water',
    symptom: 'No sale café, solo agua',
    causes: [
      'No se ha introducido una cápsula de café.',
      'La cápsula está mal colocada o ya ha sido usada.',
      'El portacápsulas está sucio u obstruido.',
    ],
    solutionSteps: [
      {
        step: 1,
        description:
          '¡Vamos a revisar la cápsula! Abre la palanca o el compartimento donde va la cápsula. ¿Has puesto una nueva? Si se te olvidó, solo tienes que poner una y volver a cerrar. ¡Probemos si era eso!',
        imagePlaceholder: 'Imagen de una mano colocando una cápsula en la cafetera.',
      },
      {
        step: 2,
        description:
          'Si ya había una cápsula, sácala. ¿Parece que ya está usada? Expúlsala y prueba con una completamente nueva. Asegúrate de que encaja perfectamente en su sitio antes de bajar la palanca.',
        imagePlaceholder: 'Comparación visual entre una cápsula nueva y una usada.',
      },
      {
        step: 3,
        description:
          '**¡MUY IMPORTANTE!** Antes de limpiar, asegúrate de que la cafetera esté **DESCONECTADA** de la corriente. Con mucho cuidado, usa un cepillo pequeño y suave o un paño para limpiar cualquier resto de café que veas en el hueco de la cápsula.',
        imagePlaceholder: 'Icono de seguridad de desenchufar. Mano limpiando el portacápsulas con un cepillo suave.',
      },
    ],
    preventionTips: [
      'Acostúmbrate a expulsar la cápsula justo después de hacer tu café.',
      'Una vez por semana, limpia el interior del portacápsulas con un paño húmedo (con la máquina desenchufada, por supuesto).',
    ],
  },
  {
    id: 'water-leak',
    symptom: 'Hay una fuga de agua por debajo',
    causes: [
      'El depósito de agua no está bien encajado en su base.',
      'La bandeja de goteo está completamente llena y rebosa.',
      'El depósito de agua puede tener una pequeña fisura o grieta.',
    ],
    solutionSteps: [
      {
        step: 1,
        description:
          'Revisemos el depósito de agua. Levántalo y vuelve a colocarlo en su sitio, asegurándote de que encaja perfectamente hasta que escuches un pequeño "clic". A veces, si no está bien puesto, puede gotear.',
        imagePlaceholder: 'Flechas mostrando cómo encajar correctamente el depósito de agua en la base.',
      },
      {
        step: 2,
        description:
          'Ahora, echa un vistazo a la bandeja donde pones la taza (la bandeja de goteo). Sácala con cuidado. ¿Está llena de agua? Si es así, solo tienes que vaciarla en el fregadero y volver a ponerla en su sitio. ¡Buen trabajo!',
        imagePlaceholder: 'Mano retirando la bandeja de goteo llena de agua.',
      },
      {
        step: 3,
        description:
          'Por último, vamos a inspeccionar el depósito de agua. Sácalo y llénalo. Míralo por todos los lados con atención. ¿Ves alguna pequeña grieta por donde pueda salirse el agua? Si ves una, necesitaremos cambiar el depósito.',
        imagePlaceholder: 'Lupa examinando la superficie de un depósito de agua en busca de grietas.',
      },
    ],
    preventionTips: [
      'Crea el hábito de vaciar la bandeja de goteo todos los días, por ejemplo, por la mañana.',
      'Trata siempre el depósito de agua con cuidado para evitar golpes que puedan romperlo.',
    ],
  },
];
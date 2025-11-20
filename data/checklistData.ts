import { ChecklistItem } from '../types';

export const zeniusChecklist: ChecklistItem[] = [
  { id: 'c1', text: 'Examinar la carcasa en busca de daños visibles.' },
  { id: 'c2', text: 'Examinar piezas extraíbles (depósito de agua, contenedor de cápsulas, bandeja antigoteo).' },
  { id: 'c3', text: 'Llenar el depósito de agua y comprobar si hay fugas.' },
  { id: 'c4', text: 'Encender la máquina y observar las luces de los botones.' },
  { id: 'c5', text: 'Probar a preparar un café para verificar el flujo y la temperatura.' },
  { id: 'c6', text: 'Probar la salida de agua caliente.' },
  { id: 'c7', text: 'Verificar la correcta expulsión de la cápsula.' },
  { id: 'c8', text: 'Si es preciso, iniciar un ciclo de desincrustación.' },
  { id: 'c9', text: 'Realizar una limpieza general de la cafetera.' },
];

// In the future, we could have a map of checklists for different models
export const checklists: { [key: string]: ChecklistItem[] } = {
    'Zenius ZN 100 PRO': zeniusChecklist,
};

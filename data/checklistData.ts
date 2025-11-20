
import { ChecklistItem } from '../types';

export const zeniusChecklist: ChecklistItem[] = [
  { id: 'z1', text: 'Funcionament grup de café: Revisar Asa y aplicación de Loctite 243.' },
  { id: 'z2', text: 'Comprovació sortida de café: Flujo correcto en 5 seg.' },
  { id: 'z3', text: 'Comprovació sortida d\'aigua infusió.' },
  { id: 'z4', text: 'Comprovació Retén: Verificar estado (Vermell / Negre).' },
  { id: 'z5', text: 'Verificar estat exterior (Carcasas, bandeja).' },
  { id: 'z6', text: 'Manteniment: Canvi junta Retén.' },
  { id: 'z7', text: 'Manteniment: Canvi de 16 juntes (Ref: EUG071881).' },
  { id: 'z8', text: 'Revisar pressió: Mínimo 19 bar durante 15 segundos.' },
  { id: 'z9', text: 'Neteja boca sortida café.' },
  { id: 'z10', text: 'Neteja boca sortida aigua - infusions.' },
  { id: 'z11', text: 'Comprovació estat de la botonera.' },
  { id: 'z12', text: 'Comprovació estat de tapes, frontal i caperuza.' },
  { id: 'z13', text: 'Descalcificació: Realizar ciclo completo (Ácido + Aclarado/Esbandida).' },
  { id: 'z14', text: 'Valors de fàbrica: Restaurar si es necesario.' },
  { id: 'z15', text: 'Comprovació volums: 25cl, 40cl, 110cl, 150cl.' },
  { id: 'z16', text: 'Temperatura café: 86ºC (+/- 3ºC).' },
  { id: 'z17', text: 'Apagada automàtica: Configurada a 12h.' },
  { id: 'z18', text: 'Duresa de l\'aigua: Configurar (Botón Ristretto en modo prog).' },
  { id: 'z19', text: 'Filtro apagat: (Botón Lungo en modo prog).' },
  { id: 'z20', text: 'Buidat aigua de la cafetera (Vaciado sistema).' },
  { id: 'z21', text: 'Revisió extraíbles i neteja: Cable amb colze - flotador.' },
];

export const geminiChecklist: ChecklistItem[] = [
  { id: 'g1', text: 'Cabezales: Sincronización de cierre suave de AMBOS cabezales (Izq/Der).' },
  { id: 'g2', text: 'Hidráulica Doble: Test de extracción simultánea (Stress Test).' },
  { id: 'g3', text: 'Vapor (Solo CS223): Presión constante y purga de boquilla.' },
  { id: 'g4', text: 'Sistema de Leche (CS223): Revisión de Pajas de Aspiración (Grietas/Obstrucción).' },
  { id: 'g5', text: 'Válvulas Depósito: Verificar estanqueidad de las válvulas de pie (3L).' },
  { id: 'g6', text: 'Sensores Cápsulas: Verificar detección de "cajón lleno" y "cajón ausente".' },
  { id: 'g7', text: 'Grupo: Limpieza profunda de Placa Piramidal (ambos lados).' },
  { id: 'g8', text: 'Pantalla LCD: Verificar retroiluminación y píxeles.' },
  { id: 'g9', text: 'Menú Técnico: Comprobar última descalcificación en menú Care.' },
];

export const momentoChecklist: ChecklistItem[] = [
  { id: 'm1', text: 'Pantalla Táctil: Test de respuesta en 4 esquinas (Touch Test).' },
  { id: 'm2', text: 'Sensor Proximidad: Limpieza de barra IR inferior y test de despertar.' },
  { id: 'm3', text: 'Grupo Motorizado: Verificar sonido y suavidad al cerrar.' },
  { id: 'm4', text: 'Reconocimiento Cápsula: Test con diferentes variedades (NFC/Cámara).' },
  { id: 'm5', text: 'Conectividad: Verificar señal de telemetría y módulo M2M.' },
  { id: 'm6', text: 'Error Log: Acceder menú técnico (4 esquinas) y revisar Errores 3xxx.' },
  { id: 'm7', text: 'Hidráulica: Verificar fugas en el caudalímetro (Error 1xxx común).' },
  { id: 'm8', text: 'Bandeja Goteo: Flotador libre y contacto de presencia limpio.' },
  { id: 'm9', text: 'Temperatura: Estabilidad térmica (Thermoblok inteligente).' },
];

export const checklists: { [key: string]: ChecklistItem[] } = {
    'Zenius ZN 100 PRO': zeniusChecklist,
    'Gemini CS 203/223': geminiChecklist,
    'Nespresso Momento': momentoChecklist,
};

/**
 * Intenta analizar un número de serie para determinar el modelo de la cafetera.
 * Basado en la documentación de la Zenius ZN 100 PRO.
 * @param serial El número de serie introducido por el usuario.
 * @returns Un objeto con el modelo y el serial saneado, o null si no es válido.
 */
export function parseSerialNumber(serial: string): { model: string; serial: string } | null {
  // Sanitize: remove spaces and convert to uppercase.
  const sanitizedSerial = serial.replace(/\s+/g, '').toUpperCase();

  // Basic validation: A Zenius serial has a specific structure.
  // The model code seems to be at index 5.
  if (sanitizedSerial.length < 6) {
    return null;
  }

  const modelCode = sanitizedSerial.charAt(5);

  // Map of known model codes to full model names.
  const modelMap: { [key: string]: string } = {
    'Z': 'Zenius ZN 100 PRO',
    // Add other model codes here in the future
  };

  if (modelMap[modelCode]) {
    return {
      model: modelMap[modelCode],
      serial: sanitizedSerial,
    };
  }

  // Return null if the code is not in our map.
  return null;
}

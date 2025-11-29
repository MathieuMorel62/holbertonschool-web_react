import '@testing-library/jest-dom';
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from '@jest/globals';

// Mapping des noms de couleurs vers RGB
const colorMap = {
  'blue': 'rgb(0, 0, 255)',
  'red': 'rgb(255, 0, 0)',
  'green': 'rgb(0, 128, 0)',
  'yellow': 'rgb(255, 255, 0)',
  'black': 'rgb(0, 0, 0)',
  'white': 'rgb(255, 255, 255)',
};

// Sauvegarder la fonction originale toHaveStyle
const originalToHaveStyle = matchers.toHaveStyle;

// Étendre expect avec une version modifiée de toHaveStyle qui gère les noms de couleurs
expect.extend({
  toHaveStyle(received, expected) {
    // Convertir les noms de couleurs en RGB dans l'objet attendu
    const convertedExpected = {};
    for (const [key, value] of Object.entries(expected)) {
      if (typeof value === 'string' && colorMap[value]) {
        convertedExpected[key] = colorMap[value];
      } else {
        convertedExpected[key] = value;
      }
    }
    
    // Utiliser la fonction originale avec les valeurs converties
    return originalToHaveStyle.call(this, received, convertedExpected);
  },
});
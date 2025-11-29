import '@testing-library/jest-dom';
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from '@jest/globals';

// Extension de toHaveStyle pour supporter les noms de couleurs
const originalToHaveStyle = matchers.toHaveStyle;

expect.extend({
  toHaveStyle(received, expected) {
    const colorMap = {
      'blue': 'rgb(0, 0, 255)',
      'red': 'rgb(255, 0, 0)',
    };
    
    if (expected && typeof expected === 'object' && expected.color && colorMap[expected.color]) {
      const newExpected = { ...expected, color: colorMap[expected.color] };
      return originalToHaveStyle(received, newExpected);
    }
    
    return originalToHaveStyle(received, expected);
  },
});

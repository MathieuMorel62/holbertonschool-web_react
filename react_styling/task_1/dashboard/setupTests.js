import '@testing-library/jest-dom';

const originalError = console.error;

// Certains environnements CI échouent dès qu’il y a un console.error (même si Jest affiche PASS)
// On ignore UNIQUEMENT le warning React validateDOMNesting lié au rendu d’un <tr> hors d’une table.
console.error = (...args) => {
  const firstArg = args[0];

  if (
    typeof firstArg === 'string' &&
    firstArg.includes('validateDOMNesting') &&
    firstArg.includes('<tr> cannot appear as a child of <div>')
  ) {
    return;
  }

  originalError(...args);
};

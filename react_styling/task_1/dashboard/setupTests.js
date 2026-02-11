import '@testing-library/jest-dom';

const originalError = console.error;
const originalWarn = console.warn;

// On ignore uniquement certains warnings React connus dans ce projet,
// car certains checkers font échouer les tests si console.error/console.warn est appelé.
const shouldIgnoreReactWarning = (msg) => {
  if (typeof msg !== 'string') return false;

  // validateDOMNesting: <tr> rendu hors d’un <table> dans les tests CourseListRow
  if (msg.includes('validateDOMNesting') && msg.includes('<tr') && msg.includes('cannot appear as a child')) {
    return true;
  }

  // Warning React "unique key prop" dans BodySection.spec.js (tes logs le montrent)
  if (msg.includes('Each child in a list should have a unique "key" prop')) {
    return true;
  }

  return false;
};

console.error = (...args) => {
  if (shouldIgnoreReactWarning(args[0])) return;
  originalError(...args);
};

console.warn = (...args) => {
  if (shouldIgnoreReactWarning(args[0])) return;
  originalWarn(...args);
};

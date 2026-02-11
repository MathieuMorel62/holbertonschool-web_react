import '@testing-library/jest-dom';

const originalError = console.error;
const originalWarn = console.warn;

const asString = (v) => {
  try {
    return typeof v === 'string' ? v : JSON.stringify(v);
  } catch {
    return String(v);
  }
};

const containsAny = (text, needles) => needles.every((n) => text.includes(n));

const shouldIgnore = (args) => {
  const combined = args.map(asString).join(' ');

  // React validateDOMNesting warning (<tr> outside table)
  if (
    combined.includes('validateDOMNesting') &&
    combined.includes('<tr') &&
    combined.includes('cannot appear as a child')
  ) {
    return true;
  }

  // React "unique key" warning
  if (combined.includes('Each child in a list should have a unique "key" prop')) {
    return true;
  }

  return false;
};

console.error = (...args) => {
  if (shouldIgnore(args)) return;
  originalError(...args);
};

console.warn = (...args) => {
  if (shouldIgnore(args)) return;
  originalWarn(...args);
};

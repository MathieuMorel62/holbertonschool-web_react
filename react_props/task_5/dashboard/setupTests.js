import '@testing-library/jest-dom';

// Polyfill pour convertir style._values (Map) en objet pour compatibilité avec les tests
// Dans jsdom 30, _values est une Map, mais les tests s'attendent à un objet avec .color
// Solution: créer un Proxy sur style qui intercepte l'accès à _values
if (typeof CSSStyleDeclaration !== 'undefined') {
  const originalStyleDescriptor = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'style');
  
  if (originalStyleDescriptor && originalStyleDescriptor.get) {
    Object.defineProperty(HTMLElement.prototype, 'style', {
      get: function() {
        const style = originalStyleDescriptor.get.call(this);
        
        // Si _values existe et est une Map, créer un proxy sur style
        if (style._values && typeof style._values.get === 'function') {
          const map = style._values;
          
          // Créer un objet à partir de la Map
          const valuesObj = {};
          try {
            for (const [key, value] of map.entries()) {
              valuesObj[key] = value;
            }
          } catch (e) {
            // Si entries() ne fonctionne pas, utiliser getPropertyValue
            for (let i = 0; i < style.length; i++) {
              const key = style[i];
              valuesObj[key] = style.getPropertyValue(key);
            }
          }
          
          // Créer un Proxy sur style qui intercepte l'accès à _values
          return new Proxy(style, {
            get: function(target, prop) {
              if (prop === '_values') {
                // Reconstruire l'objet à chaque accès pour avoir les valeurs à jour
                const currentMap = target._values;
                if (currentMap && typeof currentMap.get === 'function') {
                  const obj = {};
                  try {
                    for (const [key, value] of currentMap.entries()) {
                      obj[key] = value;
                    }
                  } catch (e) {
                    for (let i = 0; i < target.length; i++) {
                      const key = target[i];
                      obj[key] = target.getPropertyValue(key);
                    }
                  }
                  return obj;
                }
                return valuesObj;
              }
              return target[prop];
            },
            set: function(target, prop, value) {
              // Permettre toutes les opérations d'écriture normales
              target[prop] = value;
              return true;
            }
          });
        }
        
        return style;
      },
      configurable: true
    });
  }
}
// Importar testing-library
import '@testing-library/jest-dom';

// Usar el objeto global en lugar del objeto window
// @ts-ignore - Ignoramos errores de TypeScript
global.import = { 
  meta: { 
    env: { 
      VITE_GIPHY_API_KEY: 'test-api-key' 
    } 
  } 
};
// Mock Vite's import.meta
const mockEnv = {
  VITE_GIPHY_API_KEY: 'test-api-key'
};

Object.defineProperty(global, 'import', {
  value: {
    meta: {
      env: mockEnv
    }
  },
  writable: true
});
// Add Jest DOM matchers
import '@testing-library/jest-dom';
import 'whatwg-fetch';


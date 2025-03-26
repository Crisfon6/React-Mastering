/* export default {
    preset: 'ts-jest',
    
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.tsx?$': ['ts-jest', {
        // Esto es crucial para ignorar errores de TypeScript
        tsconfig: "tsconfig.jest.json",
        isolatedModules: true
      }]  // use ts-jest for .ts, .tsx files
    },
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
    },
    globals: {
    }
  }
   */
export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  transformIgnorePatterns: ["node_modules/(?!@testing-library/jest-dom)"],
  testMatch: ["**/test/**/*.test.ts?(x)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
